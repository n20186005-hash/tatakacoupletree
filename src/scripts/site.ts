import { getJsStrings } from '../i18n/ui';

const localeEl = document.querySelector('main');
const locale = localeEl?.dataset.locale ?? 'zh-Hant';
const js = getJsStrings(locale);
const dateLocale = locale.toLowerCase().startsWith('en') ? 'en-US' : 'zh-TW';

/* ---------- Itinerary save (localStorage) ---------- */
interface ItineraryMap {
  [key: string]: boolean;
}

const ITINERARY_KEY = 'tataka_itinerary_v1';

function loadItinerary(): ItineraryMap {
  try {
    const raw = localStorage.getItem(ITINERARY_KEY);
    return raw ? (JSON.parse(raw) as ItineraryMap) : {};
  } catch {
    return {};
  }
}

function saveItinerary(map: ItineraryMap) {
  try {
    localStorage.setItem(ITINERARY_KEY, JSON.stringify(map));
  } catch {
    console.warn(js.localStorageWarn);
  }
}

function paint(button: HTMLButtonElement, isSaved: boolean, name: string) {
  button.setAttribute('aria-pressed', String(isSaved));
  button.setAttribute('aria-label', `${isSaved ? js.remove : js.add}${name}`);
  const plus = button.querySelector<HTMLElement>('.plus-icon');
  if (plus) {
    plus.textContent = isSaved ? '✓' : '＋';
    button.classList.toggle('saved', isSaved);
  }
}

const itineraryButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('.itinerary-button'));
const itineraryCount = document.getElementById('itinerary-count');
const clearButton = document.getElementById('clear-itinerary');

function refreshCount() {
  if (!itineraryCount) return;
  const map = loadItinerary();
  const count = Object.values(map).filter(Boolean).length;
  itineraryCount.textContent = String(count);
}

function initItinerary() {
  const map = loadItinerary();
  for (const button of itineraryButtons) {
    const id = button.dataset.itineraryId ?? '';
    const name = button.dataset.itineraryName ?? js.saved;
    const isSaved = Boolean(map[id]);
    paint(button, isSaved, name);

    button.addEventListener('click', () => {
      const current = loadItinerary();
      const nowSaved = !current[id];
      current[id] = nowSaved;
      saveItinerary(current);
      paint(button, nowSaved, name);
      refreshCount();
    });
  }
  refreshCount();

  clearButton?.addEventListener('click', () => {
    saveItinerary({});
    for (const button of itineraryButtons) {
      const name = button.dataset.itineraryName ?? js.saved;
      paint(button, false, name);
    }
    refreshCount();
  });
}

/* ---------- Gallery lightbox ---------- */
const lightbox = document.getElementById('gallery-lightbox') as HTMLDialogElement | null;
const lightboxImage = document.getElementById('gallery-lightbox-image') as HTMLImageElement | null;
const lightboxCaption = document.getElementById('gallery-lightbox-caption');
const galleryClose = document.getElementById('gallery-close');
const galleryTiles = Array.from(document.querySelectorAll<HTMLButtonElement>('.gallery-tile'));

function openLightbox(src: string, alt: string, caption: string) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = caption;
  if (typeof lightbox.showModal === 'function') lightbox.showModal();
}

function initGallery() {
  for (const tile of galleryTiles) {
    tile.addEventListener('click', () => {
      const src = tile.dataset.gallerySrc ?? '';
      const alt = tile.dataset.galleryAlt ?? '';
      const caption = tile.dataset.galleryCaption ?? '';
      openLightbox(src, alt, caption);
    });
  }
  galleryClose?.addEventListener('click', () => lightbox?.close());
  lightbox?.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target === lightbox) lightbox.close();
  });
}

/* ---------- Souvenir card (on-device only) ---------- */
const canvas = document.getElementById('souvenir-canvas') as HTMLCanvasElement | null;
const sizeSelect = document.getElementById('card-size') as HTMLSelectElement | null;
const styleSelect = document.getElementById('card-style') as HTMLSelectElement | null;
const titleInput = document.getElementById('card-title') as HTMLInputElement | null;
const dateInput = document.getElementById('card-date') as HTMLInputElement | null;
const messageInput = document.getElementById('card-message') as HTMLInputElement | null;
const renderBtn = document.getElementById('render-card');
const downloadBtn = document.getElementById('download-card');
const cardStatus = document.getElementById('card-status');
const galleryInput = document.getElementById('photo-gallery') as HTMLInputElement | null;
const cameraInput = document.getElementById('photo-camera') as HTMLInputElement | null;
const selfieInput = document.getElementById('photo-selfie') as HTMLInputElement | null;

const STYLE_PRESETS: Record<string, { bg: string; fg: string; accent: string }> = {
  mist: { bg: '#e9ede8', fg: '#26453a', accent: '#7d9b86' },
  sunset: { bg: '#f3d9b6', fg: '#5a3417', accent: '#c8874b' },
  night: { bg: '#122a24', fg: '#dfeee8', accent: '#9ed0b6' },
};

const SIZE_PRESETS: Record<string, { w: number; h: number }> = {
  square: { w: 1080, h: 1080 },
  postcard: { w: 1080, h: 1440 },
  story: { w: 1080, h: 1920 },
};

type DrawMode = 'cover' | 'contain';

function drawImageCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, x: number, y: number, w: number, h: number, mode: DrawMode = 'cover') {
  const ir = img.width / img.height;
  const br = w / h;
  let dw = w;
  let dh = h;
  if (mode === 'cover' ? ir > br : ir < br) {
    dh = w / ir;
  } else {
    dw = h * ir;
  }
  const dx = x + (w - dw) / 2;
  const dy = y + (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
}

function defaultValue(value: string, fallback: string): string {
  return value.trim() ? value.trim() : fallback;
}

function canvasText(text: string, x: number, y: number, maxWidth: number) {
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  let line = '';
  const lines: string[] = [];
  for (const ch of text) {
    if (ctx.measureText(line + ch).width > maxWidth && line) {
      lines.push(line);
      line = ch;
    } else {
      line += ch;
    }
  }
  if (line) lines.push(line);
  const lh = 64;
  for (const l of lines.slice(0, 3)) {
    ctx.fillText(l, x, y);
    y += lh;
  }
}

function renderCard() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const size = sizeSelect?.value ?? 'square';
  const preset = SIZE_PRESETS[size] ?? SIZE_PRESETS.square;
  const theme = STYLE_PRESETS[styleSelect?.value ?? 'mist'] ?? STYLE_PRESETS.mist;

  canvas.width = preset.w;
  canvas.height = preset.h;
  const W = preset.w;
  const H = preset.h;

  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, W, H);

  const photo = (window as unknown as { __souvenirPhoto?: HTMLImageElement }).__souvenirPhoto;
  if (photo) {
    drawImageCover(ctx, photo, 0, 0, W, H * 0.62, 'cover');
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    ctx.fillRect(0, H * 0.5, W, H * 0.12);
  } else {
    ctx.fillStyle = theme.accent;
    ctx.fillRect(0, 0, W, H * 0.62);
    ctx.fillStyle = theme.bg;
    ctx.font = `${W * 0.12}px "Noto Serif TC", "Songti TC", serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🌲', W / 2, H * 0.31);
    ctx.textAlign = 'left';
  }

  ctx.fillStyle = theme.fg;
  ctx.textBaseline = 'alphabetic';
  const title = defaultValue(titleInput?.value ?? '', js.defaultTitle);
  ctx.font = `bold ${W * 0.072}px "Noto Serif TC", "Songti TC", serif`;
  ctx.fillText(title, W * 0.08, H * 0.76);

  const dateText = dateInput?.value
    ? new Intl.DateTimeFormat(dateLocale, { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(dateInput.value))
    : '';
  ctx.font = `${W * 0.032}px "Noto Sans TC", "PingFang TC", sans-serif`;
  ctx.fillStyle = theme.accent;
  ctx.fillText(dateText, W * 0.08, H * 0.81);

  ctx.fillStyle = theme.fg;
  ctx.font = `${W * 0.04}px "Noto Serif TC", "Songti TC", serif`;
  canvasText(defaultValue(messageInput?.value ?? '', ''), W * 0.08, H * 0.87, W * 0.84);

  ctx.fillStyle = theme.accent;
  ctx.font = `${W * 0.026}px "Noto Sans TC", "PingFang TC", sans-serif`;
  ctx.fillText('Tataka Couple Trees · 塔塔加夫妻樹', W * 0.08, H * 0.95);

  if (cardStatus) cardStatus.textContent = js.statusDone;
}

function loadImageFile(file: File) {
  if (!file.type.startsWith('image/')) {
    if (cardStatus) cardStatus.textContent = js.pickImage;
    return;
  }
  if (file.size > 25 * 1024 * 1024) {
    if (cardStatus) cardStatus.textContent = js.tooLarge;
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      (window as unknown as { __souvenirPhoto?: HTMLImageElement }).__souvenirPhoto = img;
      if (cardStatus) cardStatus.textContent = `${js.loaded}${file.name}${js.loadedEnd}`;
      renderCard();
    };
    img.onerror = () => {
      if (cardStatus) cardStatus.textContent = js.readError;
    };
    img.src = reader.result as string;
  };
  reader.readAsDataURL(file);
}

function bindPhotoTrigger(trigger: string | null, input: HTMLInputElement | null) {
  if (!trigger || !input) return;
  const btn = document.querySelector<HTMLButtonElement>(`[data-photo-trigger="${trigger}"]`);
  btn?.addEventListener('click', () => input.click());
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (file) loadImageFile(file);
    input.value = '';
  });
}

function initSouvenir() {
  if (!canvas) return;
  if (dateInput && !dateInput.value) {
    dateInput.value = new Date().toISOString().slice(0, 10);
  }
  renderBtn?.addEventListener('click', renderCard);
  downloadBtn?.addEventListener('click', () => {
    try {
      const link = document.createElement('a');
      link.download = `${js.downloadName}${dateInput?.value || new Date().toISOString().slice(0, 10)}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      if (cardStatus) cardStatus.textContent = js.downloaded;
    } catch {
      if (cardStatus) cardStatus.textContent = js.downloadError;
    }
  });
  bindPhotoTrigger('gallery', galleryInput);
  bindPhotoTrigger('camera', cameraInput);
  bindPhotoTrigger('selfie', selfieInput);
  renderCard();
}

/* ---------- Boot ---------- */
initItinerary();
initGallery();
initSouvenir();
