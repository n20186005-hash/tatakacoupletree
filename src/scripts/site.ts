const STORAGE_KEY = 'tataka-itinerary-v1';

type SavedPlace = {
  id: string;
  name: string;
};

function safeReadItinerary(): SavedPlace[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is SavedPlace =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as SavedPlace).id === 'string' &&
        typeof (item as SavedPlace).name === 'string',
    );
  } catch {
    return [];
  }
}

function safeWriteItinerary(items: SavedPlace[]): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch {
    return false;
  }
}

function setupItinerary(): void {
  const buttons = Array.from(
    document.querySelectorAll<HTMLButtonElement>('[data-itinerary-id]'),
  );
  const count = document.querySelector<HTMLElement>('#itinerary-count');
  const clearButton = document.querySelector<HTMLButtonElement>('#clear-itinerary');
  let saved = safeReadItinerary();

  const paint = (): void => {
    const ids = new Set(saved.map((item) => item.id));
    for (const button of buttons) {
      const id = button.dataset.itineraryId ?? '';
      const isSaved = ids.has(id);
      button.dataset.saved = String(isSaved);
      button.setAttribute('aria-pressed', String(isSaved));
      const name = button.dataset.itineraryName ?? '景點';
      button.setAttribute('aria-label', `${isSaved ? '移除' : '收藏'}${name}`);
    }
    if (count) count.textContent = String(saved.length);
  };

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const id = button.dataset.itineraryId;
      const name = button.dataset.itineraryName;
      if (!id || !name) return;

      const exists = saved.some((item) => item.id === id);
      saved = exists
        ? saved.filter((item) => item.id !== id)
        : [...saved, { id, name }];

      if (!safeWriteItinerary(saved)) {
        console.warn('無法寫入 localStorage，瀏覽器可能禁止本機儲存。');
      }
      paint();
    });
  }

  clearButton?.addEventListener('click', () => {
    saved = [];
    safeWriteItinerary(saved);
    paint();
  });

  paint();
}

function setupGallery(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#gallery-lightbox');
  const dialogImage = document.querySelector<HTMLImageElement>('#gallery-lightbox-image');
  const dialogCaption = document.querySelector<HTMLElement>('#gallery-lightbox-caption');
  const closeButton = document.querySelector<HTMLButtonElement>('#gallery-close');
  const tiles = document.querySelectorAll<HTMLButtonElement>('[data-gallery-src]');

  if (!dialog || !dialogImage || !dialogCaption) return;

  for (const tile of tiles) {
    tile.addEventListener('click', () => {
      dialogImage.src = tile.dataset.gallerySrc ?? '';
      dialogImage.alt = tile.dataset.galleryAlt ?? '';
      dialogCaption.textContent = tile.dataset.galleryCaption ?? '';
      dialog.showModal();
    });
  }

  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

type CardSize = 'square' | 'postcard' | 'story';
type CardStyle = 'mist' | 'sunset' | 'night';

const dimensions: Record<CardSize, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  postcard: { width: 1080, height: 1440 },
  story: { width: 1080, height: 1920 },
};

const cardStyles: Record<
  CardStyle,
  {
    base: string;
    ink: string;
    muted: string;
    accent: string;
    overlayTop: string;
    overlayBottom: string;
  }
> = {
  mist: {
    base: '#e9eee8',
    ink: '#f7f4ea',
    muted: 'rgba(247,244,234,.78)',
    accent: '#d7a85b',
    overlayTop: 'rgba(16,44,37,.04)',
    overlayBottom: 'rgba(16,44,37,.82)',
  },
  sunset: {
    base: '#9a6b4a',
    ink: '#fff4dd',
    muted: 'rgba(255,244,221,.8)',
    accent: '#f0ba62',
    overlayTop: 'rgba(95,42,18,.04)',
    overlayBottom: 'rgba(67,31,19,.84)',
  },
  night: {
    base: '#0e2923',
    ink: '#f1eee5',
    muted: 'rgba(241,238,229,.76)',
    accent: '#b9c99f',
    overlayTop: 'rgba(5,20,17,.16)',
    overlayBottom: 'rgba(4,20,17,.92)',
  },
};

function localISODate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = 'async';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('圖片載入失敗'));
    image.src = src;
  });
}

function drawCover(
  context: CanvasRenderingContext2D,
  image: CanvasImageSource & { width: number; height: number },
  width: number,
  height: number,
): void {
  const scale = Math.max(width / image.width, height / image.height);
  const drawWidth = image.width * scale;
  const drawHeight = image.height * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;
  context.drawImage(image, x, y, drawWidth, drawHeight);
}

function roundedRectPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function fitText(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  initialSize: number,
  minimumSize: number,
  fontFamily: string,
  weight = 700,
): number {
  let size = initialSize;
  while (size > minimumSize) {
    context.font = `${weight} ${size}px ${fontFamily}`;
    if (context.measureText(text).width <= maxWidth) return size;
    size -= 2;
  }
  return minimumSize;
}

function setupSouvenirCard(): void {
  const canvas = document.querySelector<HTMLCanvasElement>('#souvenir-canvas');
  const sizeSelect = document.querySelector<HTMLSelectElement>('#card-size');
  const styleSelect = document.querySelector<HTMLSelectElement>('#card-style');
  const titleInput = document.querySelector<HTMLInputElement>('#card-title');
  const dateInput = document.querySelector<HTMLInputElement>('#card-date');
  const messageInput = document.querySelector<HTMLInputElement>('#card-message');
  const renderButton = document.querySelector<HTMLButtonElement>('#render-card');
  const downloadButton = document.querySelector<HTMLButtonElement>('#download-card');
  const status = document.querySelector<HTMLElement>('#card-status');
  const galleryInput = document.querySelector<HTMLInputElement>('#photo-gallery');
  const cameraInput = document.querySelector<HTMLInputElement>('#photo-camera');
  const selfieInput = document.querySelector<HTMLInputElement>('#photo-selfie');

  if (
    !canvas ||
    !sizeSelect ||
    !styleSelect ||
    !titleInput ||
    !dateInput ||
    !messageInput ||
    !renderButton ||
    !downloadButton
  ) {
    return;
  }

  const context = canvas.getContext('2d');
  if (!context) return;

  dateInput.value = localISODate();
  let selectedImage: HTMLImageElement | null = null;
  let objectURL: string | null = null;
  let renderSequence = 0;

  const renderCard = async (): Promise<void> => {
    const sequence = ++renderSequence;
    const size = sizeSelect.value as CardSize;
    const styleName = styleSelect.value as CardStyle;
    const { width, height } = dimensions[size] ?? dimensions.square;
    const palette = cardStyles[styleName] ?? cardStyles.mist;

    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    context.fillStyle = palette.base;
    context.fillRect(0, 0, width, height);

    if (!selectedImage) {
      try {
        selectedImage = await loadImage('/images/couple-tree.webp');
      } catch {
        selectedImage = null;
      }
    }
    if (sequence !== renderSequence) return;

    if (selectedImage) {
      drawCover(context, selectedImage, width, height);
    }

    const topShade = context.createLinearGradient(0, 0, 0, height);
    topShade.addColorStop(0, palette.overlayTop);
    topShade.addColorStop(0.48, 'rgba(0,0,0,.04)');
    topShade.addColorStop(1, palette.overlayBottom);
    context.fillStyle = topShade;
    context.fillRect(0, 0, width, height);

    if (styleName === 'night') {
      context.save();
      context.fillStyle = 'rgba(240,236,215,.75)';
      for (let i = 0; i < 42; i += 1) {
        const x = (i * 193) % width;
        const y = 80 + ((i * 127) % Math.floor(height * 0.42));
        const radius = i % 5 === 0 ? 2.4 : 1.25;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();
    }

    const margin = Math.round(width * 0.065);
    const border = Math.max(3, Math.round(width * 0.004));
    context.strokeStyle = styleName === 'mist' ? 'rgba(247,244,234,.8)' : 'rgba(255,244,221,.7)';
    context.lineWidth = border;
    roundedRectPath(context, margin, margin, width - margin * 2, height - margin * 2, Math.round(width * 0.028));
    context.stroke();

    context.fillStyle = palette.accent;
    context.font = `800 ${Math.round(width * 0.025)}px system-ui, sans-serif`;
    context.letterSpacing = `${Math.round(width * 0.004)}px`;
    context.fillText('TATAKA · TAIWAN', margin * 1.35, margin * 1.75);
    context.letterSpacing = '0px';

    const title = titleInput.value.trim() || '塔塔加夫妻樹';
    const message = messageInput.value.trim();
    const titleSize = fitText(
      context,
      title,
      width - margin * 2.7,
      Math.round(width * 0.095),
      Math.round(width * 0.055),
      '"Noto Serif TC", "Songti TC", serif',
      800,
    );
    const titleY = height - margin * 2.55;
    context.fillStyle = palette.ink;
    context.font = `800 ${titleSize}px "Noto Serif TC", "Songti TC", serif`;
    context.fillText(title, margin * 1.35, titleY);

    const parsedDate = dateInput.value ? new Date(`${dateInput.value}T12:00:00`) : new Date();
    const dateText = new Intl.DateTimeFormat('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(parsedDate);

    context.fillStyle = palette.muted;
    context.font = `600 ${Math.round(width * 0.026)}px system-ui, sans-serif`;
    context.fillText(dateText, margin * 1.38, titleY + Math.round(width * 0.055));

    if (message) {
      const messageSize = fitText(
        context,
        message,
        width - margin * 2.7,
        Math.round(width * 0.032),
        Math.round(width * 0.022),
        'system-ui, sans-serif',
        500,
      );
      context.font = `500 ${messageSize}px system-ui, sans-serif`;
      context.fillStyle = palette.muted;
      context.fillText(message, margin * 1.38, titleY + Math.round(width * 0.105));
    }

    context.fillStyle = palette.accent;
    context.fillRect(margin * 1.35, titleY - Math.round(width * 0.035), Math.round(width * 0.12), Math.max(4, Math.round(width * 0.006)));

    if (status) status.textContent = '預覽已在您的裝置完成，不會上傳。';
  };

  const handleFile = async (file: File | undefined): Promise<void> => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      if (status) status.textContent = '請選擇圖片檔。';
      return;
    }
    if (file.size > 25 * 1024 * 1024) {
      if (status) status.textContent = '圖片超過 25 MB，請先縮小後再試。';
      return;
    }

    if (objectURL) URL.revokeObjectURL(objectURL);
    objectURL = URL.createObjectURL(file);
    try {
      selectedImage = await loadImage(objectURL);
      if (status) status.textContent = `已載入「${file.name}」，照片仍只存在這台裝置。`;
      await renderCard();
    } catch {
      if (status) status.textContent = '無法讀取這張照片，請改用其他圖片。';
    }
  };

  const inputMap: Record<string, HTMLInputElement | null> = {
    gallery: galleryInput,
    camera: cameraInput,
    selfie: selfieInput,
  };

  document.querySelectorAll<HTMLButtonElement>('[data-photo-trigger]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = inputMap[button.dataset.photoTrigger ?? ''];
      target?.click();
    });
  });

  [galleryInput, cameraInput, selfieInput].forEach((input) => {
    input?.addEventListener('change', () => {
      void handleFile(input.files?.[0]);
      input.value = '';
    });
  });

  renderButton.addEventListener('click', () => void renderCard());
  [sizeSelect, styleSelect, titleInput, dateInput, messageInput].forEach((control) => {
    control.addEventListener('change', () => void renderCard());
  });

  downloadButton.addEventListener('click', () => {
    void renderCard().then(() => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            if (status) status.textContent = '無法建立下載檔，請再試一次。';
            return;
          }
          const url = URL.createObjectURL(blob);
          const anchor = document.createElement('a');
          anchor.href = url;
          anchor.download = `塔塔加夫妻樹紀念卡-${dateInput.value || localISODate()}.png`;
          document.body.append(anchor);
          anchor.click();
          anchor.remove();
          window.setTimeout(() => URL.revokeObjectURL(url), 1500);
          if (status) status.textContent = '紀念卡已下載；照片與成品未離開您的裝置。';
        },
        'image/png',
      );
    });
  });

  void renderCard();
}

function initialize(): void {
  setupItinerary();
  setupGallery();
  setupSouvenirCard();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize, { once: true });
} else {
  initialize();
}
