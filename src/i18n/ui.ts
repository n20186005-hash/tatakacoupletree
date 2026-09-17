// 多語系字典：繁體中文（zh-Hant，預設）與英文（en）。
// `en` 的型別由 `zh` 推導，缺少鍵值會在 LSP / 建置時報錯，確保兩語系同步。

const zh = {
  meta: {
    title: '塔塔加夫妻樹｜玉山國家公園攻略・交通管制・觀星・Tataka Couple Trees',
    description:
      '塔塔加夫妻樹（Tataka Couple Trees）位於南投信義鄉玉山國家公園、海拔約 2,478 公尺。提供交通與道路管制、停車、觀星銀河攝影、即時天氣穿著、周邊鹿林山步道與夫妻樹現況，幫你規劃塔塔加半日遊。',
  },
  nav: {
    story: '故事',
    transport: '交通',
    nearby: '周邊',
    weather: '天氣',
    services: '服務',
    seasons: '季節',
    routes: '路線',
    reviews: '評價',
    gallery: '照片',
    souvenir: '紀念卡',
    learn: '科普',
    sources: '資料來源',
    faq: 'FAQ',
  },
  header: {
    homeAria: '回到頁首',
    startNav: '開始導航',
  },
  hero: {
    eyebrow: '塔塔加夫妻樹（Tataka Couple Trees）· 南投縣信義鄉',
    titleMain: '夫妻',
    titleAccent: '樹',
    sub: ['兩株紅檜曾在風霜裡並肩，', '如今，一株站立，一株回到土地。'],
    desc: '海拔約 2,478 公尺的高山公路景觀。這裡不是需要匆忙打卡的地標，而是一段關於時間、火、風雨與陪伴的山林記憶。',
    cta1: '規劃塔塔加行程',
    cta2: '在地圖上查看',
  },
  aside: {
    title: '出發前先知道',
    items: [
      { title: '現場已非雙樹並立', desc: '倒伏的樹仍保留原地，請以現況理解這座地標。' },
      { title: '高山天氣變化快', desc: '攜帶保暖、防風與雨具，並預留回程日照。' },
      { title: '道路安全優先', desc: '只在合法空間停車，勿站入車道或翻越護欄。' },
    ],
  },
  quickFacts: [
    { label: '位置', value: '台21線約 141.2K', note: '南投縣信義鄉同富村' },
    { label: '海拔', value: '約 2,478 公尺', note: '早晚溫差明顯' },
    { label: '費用', value: '免費', note: '路側自然景觀' },
    { label: '建議停留', value: '約 30 分鐘', note: '搭配塔塔加半日遊' },
  ],
  story: {
    eyebrow: 'About 塔塔加夫妻樹',
    titleA: '不是消失，',
    titleB: '而是另一種相守。',
    breadcrumb: ['塔塔加夫妻樹', '信義鄉', '南投縣', '臺灣'],
    paragraphs: [
      '歡迎來到 塔塔加夫妻樹（Tataka Couple Trees），這座位於臺灣南投縣信義鄉玉山國家公園塔塔加地區的高山公路景觀地標，是旅人造訪塔塔加時最常停留的據點之一。',
      '夫妻樹原是兩株遭森林火災焚燒後留下的臺灣紅檜枯木。枝幹相互呼應、遠看像並肩守望的伴侶，因而成為塔塔加公路上的代表性地標。',
      '其中一株後來因基部腐朽，在豪雨後倒伏。管理單位將倒木保留於現地，讓自然分解繼續發生。今日到訪，應把「站立的樹」與「回歸土地的樹」一起視為夫妻樹。',
      '這個現況也提醒旅人：高山風景從來不是固定佈景。火災、霧、風、雨和時間，都持續改寫山林。',
    ],
    shootTitle: '拍攝重點',
    shootDesc: '利用道路曲線、遠山層次與枯木輪廓，避免只拍近距離樹幹。',
    friendlyTitle: '友善提醒',
    friendlyDesc: '不攀爬、不刻字、不移動倒木，讓自然演替留在原地。',
    badgeTitle: '一立，一臥',
    badgeDesc: '風景改變了，夫妻樹的故事卻因此更完整。',
  },
  plan: {
    eyebrow: 'Plan your stop',
    titleA: '停留不必久，',
    titleB: '準備要做足。',
    intro: '夫妻樹適合放進塔塔加半日或一日行程。先確認道路與天候，再把停車、保暖、用餐和回程日照一起納入規劃。',
    cards: [
      {
        title: '門票／費用',
        body: '夫妻樹為公路旁自然景觀，單純停留欣賞免費。本站不販售票券，也沒有預約或付費入場機制。',
        note: '延伸至玉山管制登山路線時，需另查入園、入山與接駁規定。',
      },
      {
        title: '停車資訊',
        body: '景點旁只有少量停車空間，官方資料列有一格無障礙車位。滿位時不要冒險路邊排隊，可改往塔塔加停車場或上東埔停車場。',
        note: '原則：車身完全離開車道、避開彎道、下車先看來車。',
      },
      {
        title: '最佳遊覽時段／建議停留時長',
        body: '清晨適合山嵐與清透光線，午後至傍晚有機會遇到雲海與夕照。建議停留約 30 分鐘，另為停車與天候預留彈性。',
        note: '冬季低溫、濕滑或道路管制時，以安全與官方公告為優先。',
      },
    ],
  },
  transport: {
    eyebrow: 'Getting there',
    title: '前往塔塔加夫妻樹的交通方式',
    intro: '塔塔加位於高山公路交會區，自駕最有彈性，但每一條路線都應預留天候、落石與臨時管制時間。',
    cta1: '開啟路線導航',
    cta2: '查看停車原則',
    items: [
      {
        summary: '從南投、水里方向自駕',
        body: '由國道 3 號名間交流道方向接台16線前往水里，再沿台21線經信義、和社往塔塔加。夫妻樹位於台21線約 141.2K。山路彎多，避免依一般平地車程估算抵達時間。',
      },
      {
        summary: '從嘉義、阿里山方向自駕',
        body: '由國道 3 號中埔交流道方向銜接台18線，經阿里山往塔塔加，再接近台21線景點路段。連續彎道與高海拔可能造成疲勞，建議在阿里山或塔塔加服務點休息。',
      },
      {
        summary: '大眾運輸',
        body: '可查詢 6739 阿里山—日月潭方向路線與塔塔加停靠資訊；亦可從嘉義高鐵／台鐵站轉乘往阿里山的客運，再接續山線路段。山區班次稀疏、末班早，請預留轉乘與等候時間，並在出發當日再次核對客運業者與玉山國家公園公告。',
      },
      {
        summary: '從機場前往',
        body: '最近的民航機場為嘉義機場（國內線），較遠則有高雄小港機場與台中清泉崗機場。抵達後先以高鐵、台鐵或客運前往嘉義或水里，再轉山線客運或租車續行；塔塔加位於高山，無法直飛，需分段接駁。',
      },
      {
        summary: '計程車／包車',
        body: '可於機場、高鐵／台鐵站或市區預約計程車或包車直達，適合多人分攤、攜長者或幼童的旅次。費用依車型與里程計算，建議事先確認是否含等待與過路費；山區路段經驗豐富的駕駛對安全與時間安排影響很大。',
      },
      {
        summary: '停車與道路安全',
        body: '',
      },
    ],
    parkingList: [
      '夫妻樹旁空間有限，只在明確可停的範圍短暫停靠。',
      '塔塔加大型車停車場位於臺18線約 108.4K，可由無障礙步道步行約 300 公尺前往塔塔加遊客中心。',
      '上東埔停車場位於臺18線約 107.7K，可供遊覽車及小客車停靠，並設有公廁。',
      '即使只拍一張照片，也不要把人或腳架放進行車動線。',
    ],
  },
  map: {
    eyebrow: 'Location',
    title: '塔塔加夫妻樹位置地圖',
    intro: '下列地圖顯示塔塔加夫妻樹的概略位置（台21線約 141.2K，南投縣信義鄉），實際路況與停車仍以現場與官方公告為準。',
    iframeTitle: '塔塔加夫妻樹 Google 地圖',
    govLead: '官方區域旅遊資訊請參考：',
    govName: '玉山國家公園管理處',
  },
  nearby: {
    eyebrow: 'Landmarks around 塔塔加夫妻樹',
    title: '塔塔加夫妻樹周邊景點',
    intro: '造訪塔塔加夫妻樹時，可順遊周邊的高山地標與據點，包括 塔塔加遊客中心 與 塔塔加大鐵杉；收藏按鈕會把想去的點保存在這台裝置的 localStorage，不建立帳號、不上傳，也不會跨裝置同步。',
    savedCount: '個地點已加入行程清單',
    clearBtn: '清除本機清單',
    storedNote: '只儲存在目前裝置',
  },
  itinerary: [
    { id: 'couple-tree', name: '夫妻樹', type: '公路景觀', desc: '看枯立巨木、山嵐與高山公路光影。', image: '/images/couple-tree.webp' },
    { id: 'tataka-visitor-center', name: '塔塔加遊客中心', type: '旅遊服務', desc: '補給資訊、休息、用餐並了解高山生態。', image: '/images/visitor-center-exterior.webp' },
    { id: 'upper-dongpu', name: '上東埔停車場', type: '景觀與轉乘', desc: '設有廁所，可遠眺群山與雲海。', image: '/images/tataka-visitor-center.webp' },
    { id: 'big-hemlock', name: '塔塔加大鐵杉', type: '森林地標', desc: '沿林道與步道感受高山森林尺度。', image: '/images/big-hemlock.webp' },
  ],
  services: {
    eyebrow: 'Visitor services',
    title: '訪客服務與周邊設施',
    intro: '以下以「類型」說明山上與山下可取得的服務，不推介特定店家；高山選擇有限，多數補給建議在信義、水里或阿里山等據點完成。',
    items: [
      { title: '廁所／WC', desc: '遊客中心與較大停車區設有公廁；景點路側大多無固定廁所，請在上車前先使用。' },
      { title: '停車', desc: '路側僅少量車位；大型與遊覽車建議停塔塔加或上東埔停車場，再步行或接駁至景點。' },
      { title: '餐飲', desc: '山上以遊客中心簡餐、熱食與飲料為主；更完整的餐廳集中在山下市區，建議規劃時併入用餐點。' },
      { title: '住宿', desc: '山上以山莊、招待所等高山住宿型態為主，需提前申請或預訂；一般旅客多安排下山至市區民宿或飯店。' },
      { title: '商超／採買', desc: '山上補給有限，山下市區有雜貨、超商與加油站附設賣場；飲水、糧食與保暖衣物建議先備齊。' },
      { title: '加油／充電', desc: '加油站與電動車充電樁多集中於山下主要節點；上山前請確認油量與電量，避免回程能源不足。' },
    ],
    note: '本頁為非營利科普網站，僅整理設施「類型」供規劃參考；營業狀況、價格與是否有空位，請以現場與官方公告為準。',
  },
  food: {
    eyebrow: 'Food & rest',
    title: '周邊美食與補給',
    intro: '高海拔地區聚落少，夫妻樹旁沒有餐飲。最實用的做法，是把塔塔加遊客中心周邊視為休息與用餐節點，並在進山前準備飲水和簡單糧食。',
    badge: '最近的完整選擇',
    articles: [
      { title: '塔塔加遊客中心餐飲', desc: '可安排熱食、休息與旅遊資訊。營運內容與供餐時間可能依現場調整，勿把行程壓在最後一刻。' },
      { title: '阿里山／水里沿線先用餐', desc: '若從嘉義或南投進入，可在主要聚落先吃正餐，再攜帶水、堅果、飯糰或易收納點心上山。' },
      { title: '山林飲食原則', desc: '垃圾全部帶走；不要餵食野生動物；僅在明確允許的區域使用爐具，避免在停車區或林下任意炊煮。' },
    ],
  },
  gallery: {
    eyebrow: 'Photo journal',
    title: '照片牆',
    intro: '點擊照片可放大。所有圖片已隨專案本地化，不會在瀏覽時向圖片來源站載入資源。',
    lightboxLabel: '照片放大檢視',
    closeLabel: '關閉照片',
    tileAria: '放大照片：',
  },
  galleryItems: [
    { src: '/images/couple-tree.webp', alt: '塔塔加夫妻樹現存枯立木', caption: '現存的枯立木與高山公路' },
    { src: '/images/tataka-sunset-clouds.webp', alt: '塔塔加夕照與雲海', caption: '雲海與夕照，是塔塔加最迷人的片刻' },
    { src: '/images/big-hemlock.webp', alt: '塔塔加大鐵杉', caption: '高山森林中的大鐵杉' },
    { src: '/images/forest-giant.webp', alt: '塔塔加森林巨木', caption: '霧氣、樹影與森林尺度' },
    { src: '/images/visitor-center-exterior.webp', alt: '塔塔加遊客中心外觀', caption: '塔塔加遊客中心' },
    { src: '/images/visitor-center-interior.webp', alt: '塔塔加遊客中心室內展示', caption: '室內展示與休憩空間' },
    { src: '/images/visitor-center-dining.webp', alt: '塔塔加遊客中心餐飲空間', caption: '高山地區較便利的餐飲選擇' },
    { src: '/images/tataka-visitor-center.webp', alt: '塔塔加遊客中心與山林', caption: '把夫妻樹安排進塔塔加半日行程' },
  ],
  souvenir: {
    eyebrow: 'Made on your device',
    title: '景點紀念卡',
    privacy: '照片僅保存在您的設備。選圖、自拍、文字與 Canvas 成品都只在目前瀏覽器處理，不上傳、不經伺服器。',
    step1Title: '1. 選擇照片',
    btnGallery: '從相簿',
    btnCamera: '拍照',
    btnSelfie: '自拍',
    step2Title: '2. 設定版面',
    labelSize: '尺寸',
    labelStyle: '風格',
    labelTitle: '景點名稱',
    labelDate: '日期',
    labelMessage: '短句',
    sizeOptions: [
      { value: 'square', label: '1:1 正方形' },
      { value: 'postcard', label: '明信片直式' },
      { value: 'story', label: '9:16 限時動態' },
    ],
    styleOptions: [
      { value: 'mist', label: '霧杉 · 柔和留白' },
      { value: 'sunset', label: '夕照 · 暖金木色' },
      { value: 'night', label: '山夜 · 深綠星光' },
    ],
    defaultTitle: '塔塔加夫妻樹',
    defaultMessage: '一立，一臥；仍在同一座山裡。',
    btnRender: '更新預覽',
    btnDownload: '下載紀念卡',
    statusInitial: '尚未選擇照片，先以景點照片製作預覽。',
  },
  seasons: {
    eyebrow: 'Seasonal strategy',
    title: '季節遊覽策略',
    intro: '以下依塔塔加地區長期氣候平均（約 30 年氣候態）與高山生態特性綜合歸納：山區溪流水源雖清澈仍不建議生飲；野生動物多為夜行或畏人，請遠觀不干擾。實際天候仍以中央氣象署與現場公告為準。',
    headers: ['季節', '氣候與能見度', '景觀特色', '建議裝備', '注意事項'],
    rows: [
      { season: '春季', range: '3–5 月', climate: '融雪、多霧，能見度變化大', scenery: '山櫻與新綠、溪水豐沛', gear: '保暖層、防風外套、防滑鞋', notes: '路面濕滑、午後易起霧' },
      { season: '夏季', range: '6–8 月', climate: '午後雷陣雨頻、雲海機會高、山區涼爽', scenery: '雲海與綠意、生物活躍', gear: '雨具、防曬、防蚊', notes: '颱風季留意封路、避雷' },
      { season: '秋季', range: '9–11 月', climate: '最穩定、能見度佳、日夜溫差大', scenery: '雲海與夕照、攝影黃金期', gear: '保暖與層次穿搭', notes: '早出晚歸注意回程日照' },
      { season: '冬季', range: '12–2 月', climate: '低溫、偶降雪結霜、路面可能結冰', scenery: '枯木蕭瑟美感、靜謐', gear: '厚保暖、手套、必要時冰爪', notes: '結冰與管制、車輛保暖' },
    ],
    stargazingTitle: '夜間觀星',
    stargazingBody: '塔塔加海拔高、光害低，是臺灣知名的暗空觀星與銀河攝影地點。晴朗無月的夜間適合星空與銀河拍攝；山區夜間氣溫驟降、能見度與路面狀況多變，觀星請結伴、注意保暖與行車安全，並以官方路況與管制公告為準。',
  },
  routes: {
    eyebrow: 'Route planning',
    title: '路線規劃',
    intro: '依出行組成與體力節奏選擇路線；山區信號與補給有限，出發前請把天候、停車與回程日照一併納入。',
    byGroupTitle: '按人群定制',
    rhythmLabel: '節奏',
    routeLabel: '路線',
    groups: [
      {
        tag: '親子家庭',
        rhythm: '慢、短停留、多安排廁所點。',
        route: '遊客中心 → 夫妻樹路側短停 → 上東埔（公廁、展望） → 回程用餐。',
        tip: '避免長時間暴露高海拔，備兒童保暖與飲水。',
      },
      {
        tag: '攝影自然',
        rhythm: '清晨與傍晚黃金時刻，可久留。',
        route: '夫妻樹光影 → 遊客中心周邊 → 上東埔雲海點 → 必要時麟趾山／鹿林山觀景。',
        tip: '腳架勿佔車道，注意結露與防風。',
      },
      {
        tag: '低體力無障礙',
        rhythm: '以遊客中心與無障礙步道為主，少爬升。',
        route: '遊客中心（解說、無障礙步道） → 夫妻樹路側觀景（不下切） → 上東埔停車區展望。',
        tip: '利用已鋪設步道，避開陡坡與碎石。',
      },
    ],
    generalTitle: '推薦通用路線',
    general: [
      {
        title: '半日行程',
        duration: '約 3–4 小時',
        body: '自水里／信義上山 → 塔塔加遊客中心（休整、餐飲、解說） → 夫妻樹短停拍照 → 上東埔停車場展望 → 原路回程。',
      },
      {
        title: '全日行程',
        duration: '約 6–8 小時',
        body: '半日路線 + 塔塔加大鐵杉與林道步道 → 麟趾山／鹿林山觀景（視體力與許可） → 阿里山或水里用餐回程；若安排入園路線，需另辦入園、入山與接駁。',
      },
    ],
  },
  learn: {
    eyebrow: 'Learn & responsibility',
    title: '科普與訪客責任',
    intro: '理解這座地標的生態與文化背景，能讓停留更有意義；也讓我們在欣賞的同時，把山林留給下一代。',
    cards: [
      { title: '地質與生態背景', body: '塔塔加海拔約 2,478 公尺，屬玉山山脈高山帶。夫妻樹為臺灣紅檜（Chamaecyparis formosensis，臺灣特有種）的枯立木。高山森林的火災、枯立與倒木，是自然演替的一環：倒木回到土壤、提供真菌與小型動物棲所，森林因而持續更新。' },
      { title: '名稱由來與文化', body: '「塔塔加」一帶為布農族等原住民族傳統活動區域，地名帶有原住民語源背景；「夫妻樹」則是後人因兩株枯立紅檜形似並肩伴侶，而給予的親切稱呼。我們以尊重態度呈現地名與文化，不杜撰細節。' },
      { title: '玉山國家公園保育', body: '本區屬玉山國家公園範圍，部分為生態保護區；進入特定路線須依規定申請入園、入山與接駁。園區長期進行森林動態、氣候與野生動物監測，讓這片高山生態得以延續。' },
      { title: '訪客責任（無痕山林）', body: '不攀爬、刻字或移動倒木；垃圾全數帶走；不餵食野生動物；遵守管制與步道範圍。把「站立的樹」與「回到土地的樹」一起視為這座地標，是對山林最簡單的尊重。' },
    ],
  },
  faqTitle: '常見問答',
  faqIntro: '山區資訊容易受天候與管理措施影響。以下回答以長期有效的原則為主，當日狀況仍以官方公告為準。',
  faqs: [
    { q: '現在還能看到兩棵夫妻樹嗎？', a: '不能。原本並立的兩株紅檜枯木中，一株已因基部腐朽與豪雨影響倒伏，現場仍保留倒木；目前主要看到的是另一株枯立木。' },
    { q: '夫妻樹需要門票嗎？', a: '不需要。夫妻樹是高山公路旁的自然景觀，單純停留欣賞不收門票；若延伸前往需要入園或入山許可的登山路線，則應另依規定辦理。' },
    { q: '可以在路邊停車拍照嗎？', a: '現場有少量停車空間，其中官方資料提到一格無障礙車位。山區道路狹窄，請勿佔用車道、彎道或妨礙通行；車位不足時應改至較大型停車區。' },
    { q: '什麼時間最適合拍照？', a: '清晨常有較乾淨的光線與山嵐，傍晚則有機會遇到夕照和雲海。高山天候變化快，景色無法保證；夜間道路視線差，不建議為拍照冒險停留。' },
    { q: '大眾運輸能到夫妻樹嗎？', a: '可查詢行經阿里山、塔塔加與日月潭方向的 6739 路線，再依實際停靠點安排步行或接駁。班次與停靠會調整，出發前務必以客運與官方公告為準。' },
    { q: '附近有餐廳和廁所嗎？', a: '夫妻樹本身沒有完整服務設施。可前往塔塔加遊客中心周邊使用旅遊服務與餐飲，或到上東埔停車場使用廁所；高山區選擇有限，建議自備飲水與簡單糧食。' },
    { q: '塔塔加夫妻樹在哪裡？', a: '位於臺灣南投縣信義鄉玉山國家公園塔塔加地區，台21線約 141.2K 處，座標約為北緯 23.5125、東經 120.8907。' },
    { q: '頁面上的評分與評價數據從哪裡來？', a: '本站的評分（4.3）與評價數（2,987）同步自 Google 地圖（Google Maps）用戶評價，同步時間為 2026 年 9 月；版權歸原作者與 Google 地圖所有，僅在頁面展示、未納入結構化資料。' },
  ],
  reviews: {
    eyebrow: 'Visitor ratings',
    title: '谷歌地圖評價',
    ratingCount: '則 Google 地圖評價',
    text: '評分與評價數同步自谷歌地圖（Google Maps）用戶評價 · 2026 年 9 月 ·',
    sourceTitle: '評價來源說明',
    sourceDesc: '同步自 Google 地圖用戶評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有。',
    sourceBtn: '在谷歌地圖查看全部評價',
  },
  sources: {
    eyebrow: 'Sources',
    title: '資料來源',
    items: [
      { title: '評價', sub: '同步時間 2026 年 9 月', desc: '同步自 Google 地圖用戶評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有。', linkText: '在谷歌地圖查看全部評價' },
      { title: '官方旅遊資訊', sub: '', desc: '玉山國家公園管理處官方網站，提供最新的園區公告、路況與入園規定。', linkText: '前往玉山國家公園官網' },
    ],
  },
  cta: {
    eyebrow: 'BEFORE YOU GO',
    title: '先查路況，再上山。',
    desc: '塔塔加的美，來自高海拔與多變天候。出發前請查看玉山國家公園、道路主管機關及客運業者的即時公告。',
    cta1: '導航至夫妻樹',
    cta2: '回到頁首',
  },
  footer: {
    brandDesc: '整理夫妻樹現況、交通與塔塔加周邊行程，陪你更從容地走進高山風景。',
    navTitle: '網站導覽',
    toolsTitle: '旅行工具',
    mapLink: '在地圖上查看',
    routeLink: '導航至夫妻樹',
    topLink: '回到頁首',
    copyright: '塔塔加夫妻樹旅遊指南',
    deviceNote: '行程收藏與照片紀念卡僅保存在您的裝置。',
  },
  weather: {
    eyebrow: 'Live conditions',
    title: '塔塔加夫妻樹即時天氣',
    intro: '高山天氣變化快，出發前留意溫度、風與降雨機率；下方建議會依當下天況自動整理，實際仍以現場與中央氣象署公告為準。',
    currentLabel: '目前天況',
    feelsLabel: '體感溫度',
    humidityLabel: '相對濕度',
    windLabel: '風力',
    popLabel: '今日降雨機率',
    forecastLabel: '未來七日預報',
    riskTitle: '風險提醒',
    riskNoneTitle: '風險提醒',
    riskNoneBody: '目前無需特別警示的強降雨、雷雨或強風風險。',
    sourceNote: '氣象資料：Open-Meteo',
    disclaimer: '颱風、豪雨、低溫等特報以中央氣象署公告為準；本模組依開放氣象資料自動推算，僅供出發參考。',
    fallback: '天氣資訊暫時無法取得。山區天候多變，出發前請查詢中央氣象署最新預報，並預留保暖、防風與雨具。',
    outfitTitle: '出行穿搭',
    activityTitle: '游玩安排',
    itemsTitle: '随身物品',
  },
  // 天氣建議邏輯輸出的「短語鍵」，再由下方 advice* 對應表轉為各語系文字。
  // 僅用於 Weather 組件。
};

export type Translation = typeof zh;

const en: Translation = {
  meta: {
    title: 'Tataka Couple Trees｜Yushan National Park Guide · Road Control · Stargazing · 塔塔加夫妻樹',
    description:
      'Tataka Couple Trees (塔塔加夫妻樹) sit in Yushan National Park, Xinyi, Nantou, at about 2,478 m. This guide covers access and road control, parking, stargazing and Milky Way photography, live weather and what to wear, nearby Lulin trails, and the current state of the trees—everything you need to plan a Tataka half-day trip.',
  },
  nav: {
    story: 'Story',
    transport: 'Getting there',
    nearby: 'Nearby',
    weather: 'Weather',
    services: 'Services',
    seasons: 'Seasons',
    routes: 'Routes',
    reviews: 'Reviews',
    gallery: 'Gallery',
    souvenir: 'Souvenir',
    learn: 'Learn',
    sources: 'Sources',
    faq: 'FAQ',
  },
  header: {
    homeAria: 'Back to top',
    startNav: 'Start navigation',
  },
  hero: {
    eyebrow: 'Tataka Couple Trees · Xinyi, Nantou',
    titleMain: 'Couple',
    titleAccent: 'Trees',
    sub: ['Two red cypress snags once stood side by side through wind and weather—', 'now one remains upright, one has returned to the earth.'],
    desc: 'A high-mountain roadside landmark at about 2,478 m. This is not a spot to rush a photo; it is a forest memory about time, fire, rain, and companionship.',
    cta1: 'Plan your Tataka trip',
    cta2: 'View on map',
  },
  aside: {
    title: 'Before you go',
    items: [
      { title: 'No longer two trees side by side', desc: 'The fallen trunk is kept on site—please read this landmark as it is today.' },
      { title: 'Mountain weather changes fast', desc: 'Bring warm, windproof, and rain layers, and keep daylight for the drive back.' },
      { title: 'Road safety first', desc: 'Park only where legal; never stand in the lane or climb the guardrail.' },
    ],
  },
  quickFacts: [
    { label: 'Location', value: 'Hwy 21 ≈ 141.2K', note: 'Tongfu Village, Xinyi, Nantou' },
    { label: 'Elevation', value: '≈ 2,478 m', note: 'Large day–night swing' },
    { label: 'Cost', value: 'Free', note: 'Roadside natural sight' },
    { label: 'Suggested stay', value: '≈ 30 min', note: 'With a Tataka half-day' },
  ],
  story: {
    eyebrow: 'About Tataka Couple Trees',
    titleA: 'Not gone—',
    titleB: 'just together differently.',
    breadcrumb: ['Tataka Couple Trees', 'Xinyi', 'Nantou', 'Taiwan'],
    paragraphs: [
      'Welcome to Tataka Couple Trees (塔塔加夫妻樹), a high-mountain roadside landmark in the Tataka area of Yushan National Park, Xinyi, Nantou, Taiwan—one of the most-visited stops when people come to Tataka.',
      'The couple trees were two Taiwan red cypress (Chamaecyparis formosensis) snags left after a forest fire. Their leaning forms looked like companions keeping watch, and the spot became a signature landmark along the Tataka highway.',
      'One later collapsed after its base rotted and heavy rain. The managing authority left the fallen trunk in place so natural decomposition continues. When you visit, see both the standing tree and the one returned to the earth as the Couple Trees.',
      'This reality also reminds visitors: a high-mountain landscape is never a fixed set. Fire, fog, wind, rain, and time keep rewriting the forest.',
    ],
    shootTitle: 'Photography tips',
    shootDesc: 'Use the road curve, layered ridges, and the snag silhouette—avoid only close-ups of the trunk.',
    friendlyTitle: 'Friendly reminder',
    friendlyDesc: 'No climbing, carving, or moving the fallen wood; let natural succession stay in place.',
    badgeTitle: 'One stands, one rests',
    badgeDesc: 'The scenery changed, yet the couple trees’ story is more complete for it.',
  },
  plan: {
    eyebrow: 'Plan your stop',
    titleA: 'A short stop,',
    titleB: 'but come prepared.',
    intro: 'The Couple Trees fit a Tataka half- or full-day plan. Confirm roads and weather first, then fold in parking, warmth, food, and daylight for the return.',
    cards: [
      {
        title: 'Tickets / Cost',
        body: 'The Couple Trees are a free roadside natural sight. This site sells no tickets and has no reservation or paid entry.',
        note: 'If you extend into Yushan controlled trails, check park entry, mountain entry, and shuttle rules separately.',
      },
      {
        title: 'Parking',
        body: 'Only a little parking sits beside the sight; official data list one accessible space. When full, do not queue on the roadside—use Tataka or Upper Dongpu parking instead.',
        note: 'Rule: keep the car fully off the lane, avoid curves, and check for traffic before exiting.',
      },
      {
        title: 'Best time / Suggested stay',
        body: 'Mornings bring clean light and mist; afternoon to dusk may offer sea of clouds and sunset. About 30 minutes is enough; leave buffer for parking and weather.',
        note: 'In winter cold, ice, or road control, safety and official notices come first.',
      },
    ],
  },
  transport: {
    eyebrow: 'Getting there',
    title: 'How to reach Tataka Couple Trees',
    intro: 'Tataka sits where high-mountain highways meet. Driving is most flexible, but every route needs buffer for weather, rockfall, and temporary control.',
    cta1: 'Open route navigation',
    cta2: 'Parking rules',
    items: [
      {
        summary: 'Drive from Nantou / Shuili',
        body: 'From the Guoli 3 Mingjian interchange take Hwy 16 to Shuili, then Hwy 21 via Xinyi and Heshè to Tataka. The trees are at Hwy 21 ≈ 141.2K. Mountain curves are many—do not estimate arrival by flatland drive times.',
      },
      {
        summary: 'Drive from Chiayi / Alishan',
        body: 'From the Guoli 3 Zhongpu interchange take Hwy 18 through Alishan toward Tataka, then approach the Hwy 21 sight. Continuous curves and altitude cause fatigue—rest at Alishan or Tataka service points.',
      },
      {
        summary: 'Public transit',
        body: 'Check route 6739 (Alishan–Sun Moon Lake) and Tataka stops; or transfer from Chiayi HSR/TRA to Alishan buses, then continue on the mountain line. Mountain service is sparse with early last buses—allow transfer and waiting time, and reconfirm operators and Yushan notices on the day.',
      },
      {
        summary: 'From the airport',
        body: 'The nearest civil airport is Chiayi (domestic); farther options are Kaohsiung and Taichung. After arrival, use HSR, TRA, or bus to Chiayi or Shuili, then a mountain bus or rental to continue. Tataka is high in the mountains—no direct flight; segment by segment.',
      },
      {
        summary: 'Taxi / Charter',
        body: 'Book a taxi or charter from the airport, HSR/TRA, or city to the door—good for groups, seniors, or children. Fares depend on vehicle and distance; confirm waiting and tolls upfront. An experienced mountain driver greatly affects safety and timing.',
      },
      {
        summary: 'Parking & road safety',
        body: '',
      },
    ],
    parkingList: [
      'Space beside the trees is limited; stop only briefly where clearly allowed.',
      'Tataka large-vehicle parking is on Hwy 18 ≈ 108.4K; an accessible trail leads about 300 m to the Tataka Visitor Center.',
      'Upper Dongpu parking is on Hwy 18 ≈ 107.7K, for tour and passenger cars, with public restrooms.',
      'Even for one photo, keep people and tripods out of the traffic line.',
    ],
  },
  map: {
    eyebrow: 'Location',
    title: 'Tataka Couple Trees map',
    intro: 'The map below shows the approximate location (Hwy 21 ≈ 141.2K, Xinyi, Nantou). Actual road and parking conditions follow the site and official notices.',
    iframeTitle: 'Tataka Couple Trees Google Map',
    govLead: 'For official regional tourism information, see:',
    govName: 'Yushan National Park Headquarters',
  },
  nearby: {
    eyebrow: 'Landmarks around Tataka Couple Trees',
    title: 'Near Tataka Couple Trees',
    intro: 'While visiting, add nearby high-mountain landmarks and stops—including the Tataka Visitor Center and the Tataka Giant Hemlock. The save button stores chosen spots in this device’s localStorage: no account, no upload, no cross-device sync.',
    savedCount: 'places added to your list',
    clearBtn: 'Clear local list',
    storedNote: 'Stored on this device only',
  },
  itinerary: [
    { id: 'couple-tree', name: 'Couple Trees', type: 'Roadside sight', desc: 'See the standing snag, mist, and high-mountain highway light.', image: '/images/couple-tree.webp' },
    { id: 'tataka-visitor-center', name: 'Tataka Visitor Center', type: 'Visitor service', desc: 'Supplies info, rest, food, and high-mountain ecology.', image: '/images/visitor-center-exterior.webp' },
    { id: 'upper-dongpu', name: 'Upper Dongpu Parking', type: 'View & transfer', desc: 'Has restrooms; overlook ranges and sea of clouds.', image: '/images/tataka-visitor-center.webp' },
    { id: 'big-hemlock', name: 'Tataka Giant Hemlock', type: 'Forest landmark', desc: 'Feel the scale of high-mountain forest along the trail.', image: '/images/big-hemlock.webp' },
  ],
  services: {
    eyebrow: 'Visitor services',
    title: 'Visitor services & nearby facilities',
    intro: 'Below we describe services by “type,” naming no specific vendors; high-mountain options are limited, so stock up in Xinyi, Shuili, or Alishan.',
    items: [
      { title: 'Restrooms / WC', desc: 'Visitor centers and larger lots have public restrooms; roadside sights usually do not—use them before boarding.' },
      { title: 'Parking', desc: 'Few roadside spaces; large and tour buses use Tataka or Upper Dongpu, then walk or shuttle to the sight.' },
      { title: 'Food & drink', desc: 'Mountain options are mainly the visitor center’s light meals, hot food, and drinks; fuller restaurants are down in town—plan a meal stop.' },
      { title: 'Lodging', desc: 'Mountain lodging is mostly huts and hostels needing advance application/booking; most visitors stay downhill in town.' },
      { title: 'Stores / supplies', desc: 'Mountain supply is limited; towns have groceries, convenience stores, and gas-mart shops—prepare water, food, and warm clothes first.' },
      { title: 'Fuel / charging', desc: 'Gas stations and EV chargers cluster at lower nodes; check fuel and battery before ascending to avoid shortage on return.' },
    ],
    note: 'This is a non-profit science site; we list facility “types” for planning only. Hours, prices, and availability follow the site and official notices.',
  },
  food: {
    eyebrow: 'Food & rest',
    title: 'Nearby food & supplies',
    intro: 'Few settlements at altitude, and no food at the trees. Best practice: treat the Tataka Visitor Center area as your rest and meal node, and bring water and simple food before entering.',
    badge: 'Closest full option',
    articles: [
      { title: 'Tataka Visitor Center dining', desc: 'Hot meals, rest, and travel info. Service and meal times may change—do not leave it to the last minute.' },
      { title: 'Eat along Alishan / Shuili first', desc: 'If entering from Chiayi or Nantou, eat a main meal in a town, then bring water, nuts, rice balls, or easy snacks up.' },
      { title: 'Backcountry food rules', desc: 'Pack out all trash; do not feed wildlife; use stoves only where clearly allowed—no cooking at lots or under the trees.' },
    ],
  },
  gallery: {
    eyebrow: 'Photo journal',
    title: 'Photo wall',
    intro: 'Click a photo to enlarge. All images are bundled with the project—nothing is loaded from an external image host while browsing.',
    lightboxLabel: 'Enlarged photo view',
    closeLabel: 'Close photo',
    tileAria: 'Enlarge photo: ',
  },
  galleryItems: [
    { src: '/images/couple-tree.webp', alt: 'Standing snag of Tataka Couple Trees', caption: 'The standing snag and the high-mountain highway' },
    { src: '/images/tataka-sunset-clouds.webp', alt: 'Tataka sunset and sea of clouds', caption: 'Sea of clouds and sunset—Tataka’s most enchanting moments' },
    { src: '/images/big-hemlock.webp', alt: 'Tataka giant hemlock', caption: 'The giant hemlock in high-mountain forest' },
    { src: '/images/forest-giant.webp', alt: 'Tataka forest giant', caption: 'Mist, shadows, and forest scale' },
    { src: '/images/visitor-center-exterior.webp', alt: 'Tataka Visitor Center exterior', caption: 'Tataka Visitor Center' },
    { src: '/images/visitor-center-interior.webp', alt: 'Tataka Visitor Center interior', caption: 'Indoor exhibits and rest space' },
    { src: '/images/visitor-center-dining.webp', alt: 'Tataka Visitor Center dining', caption: 'The more convenient dining option up high' },
    { src: '/images/tataka-visitor-center.webp', alt: 'Tataka Visitor Center and forest', caption: 'Fit the Couple Trees into a Tataka half-day' },
  ],
  souvenir: {
    eyebrow: 'Made on your device',
    title: 'Souvenir card',
    privacy: 'Photos stay on your device only. Selection, selfie, text, and the Canvas result are processed in your browser—no upload, no server.',
    step1Title: '1. Choose a photo',
    btnGallery: 'Gallery',
    btnCamera: 'Camera',
    btnSelfie: 'Selfie',
    step2Title: '2. Set layout',
    labelSize: 'Size',
    labelStyle: 'Style',
    labelTitle: 'Place name',
    labelDate: 'Date',
    labelMessage: 'Caption',
    sizeOptions: [
      { value: 'square', label: '1:1 square' },
      { value: 'postcard', label: 'Postcard portrait' },
      { value: 'story', label: '9:16 story' },
    ],
    styleOptions: [
      { value: 'mist', label: 'Mist fir · soft' },
      { value: 'sunset', label: 'Sunset · warm gold' },
      { value: 'night', label: 'Mountain night · deep green' },
    ],
    defaultTitle: 'Tataka Couple Trees',
    defaultMessage: 'One stands, one rests—still on the same mountain.',
    btnRender: 'Update preview',
    btnDownload: 'Download card',
    statusInitial: 'No photo chosen yet; preview uses the sight photo.',
  },
  seasons: {
    eyebrow: 'Seasonal strategy',
    title: 'Seasonal visiting strategy',
    intro: 'Based on long-term climate normals (about 30-year climatology) for Tataka and high-mountain ecology: streams look clear but are not for drinking; wildlife is mostly nocturnal or wary—observe from afar. Actual weather follows CWA and on-site notices.',
    headers: ['Season', 'Climate & visibility', 'Scenery', 'Suggested gear', 'Cautions'],
    rows: [
      { season: 'Spring', range: 'Mar–May', climate: 'Snowmelt, foggy, shifting visibility', scenery: 'Mountain cherry & new green, full streams', gear: 'Warm layer, windproof, grippy shoes', notes: 'Slippery roads, afternoon fog' },
      { season: 'Summer', range: 'Jun–Aug', climate: 'Frequent afternoon storms, more clouds, cool', scenery: 'Sea of clouds & green, active wildlife', gear: 'Rain gear, sun protection, repellent', notes: 'Typhoon season: watch closures, lightning' },
      { season: 'Autumn', range: 'Sep–Nov', climate: 'Most stable, clear, large day–night swing', scenery: 'Sea of clouds & sunset, photo prime', gear: 'Warm, layered dressing', notes: 'Early out, late back: keep return daylight' },
      { season: 'Winter', range: 'Dec–Feb', climate: 'Cold, occasional snow/frost, possible ice', scenery: 'Bare snags, quiet', gear: 'Heavy warmth, gloves, crampons if needed', notes: 'Ice & control, warm the car' },
    ],
    stargazingTitle: 'Night stargazing',
    stargazingBody: 'Tataka’s high altitude and low light pollution make it a well-known dark-sky and Milky Way spot in Taiwan. Clear moonless nights suit stars and Milky Way; mountain nights drop fast with changing visibility and roads—go with company, dress warm, drive safe, and follow official road and control notices.',
  },
  routes: {
    eyebrow: 'Route planning',
    title: 'Route planning',
    intro: 'Choose by who is traveling and the pace; mountain signal and supply are limited—fold weather, parking, and return daylight into the plan.',
    byGroupTitle: 'By traveler type',
    rhythmLabel: 'Rhythm',
    routeLabel: 'Route',
    groups: [
      {
        tag: 'Families',
        rhythm: 'Slow, short stays, more restroom stops.',
        route: 'Visitor Center → short roadside stop at the trees → Upper Dongpu (restroom, view) → meal on return.',
        tip: 'Avoid long high-altitude exposure; bring kids’ warmth and water.',
      },
      {
        tag: 'Photo & nature',
        rhythm: 'Golden hours at dawn and dusk; stay longer.',
        route: 'Tree light → around the visitor center → Upper Dongpu cloud point → Linti/Lulin view if needed.',
        tip: 'Keep tripods off the lane; watch condensation and wind.',
      },
      {
        tag: 'Low-effort / accessible',
        rhythm: 'Visitor center and accessible trails, little climb.',
        route: 'Visitor Center (intro, accessible trail) → roadside view of the trees (no descent) → Upper Dongpu lookout.',
        tip: 'Use paved trails; avoid steep slopes and loose rock.',
      },
    ],
    generalTitle: 'Recommended general routes',
    general: [
      {
        title: 'Half-day',
        duration: '≈ 3–4 hours',
        body: 'Up from Shuili/Xinyi → Tataka Visitor Center (rest, food, intro) → short photo stop at the trees → Upper Dongpu lookout → back the same way.',
      },
      {
        title: 'Full-day',
        duration: '≈ 6–8 hours',
        body: 'Half-day + Tataka Giant Hemlock and forest trails → Linti/Lulin view (by fitness/permit) → meal in Alishan or Shuili on return; park-entry routes need separate entry, mountain, and shuttle.',
      },
    ],
  },
  learn: {
    eyebrow: 'Learn & responsibility',
    title: 'Science & visitor responsibility',
    intro: 'Understanding the ecology and culture behind this landmark makes the stop meaningful—and helps us leave the forest for the next generation.',
    cards: [
      { title: 'Geology & ecology', body: 'Tataka sits at about 2,478 m in the Yushan range. The Couple Trees are snags of Taiwan red cypress (Chamaecyparis formosensis, endemic). Fire, snagging, and fall are part of forest succession: fallen wood returns to soil, feeds fungi and small animals, and the forest renews.' },
      { title: 'Name & culture', body: 'Tataka is traditional land of Indigenous peoples including the Bunun; the place name has Indigenous roots. “Couple Trees” is a later affectionate name for two snags shaped like companions. We present names and culture respectfully and invent no details.' },
      { title: 'Yushan conservation', body: 'This area is within Yushan National Park, partly an ecological protection zone; specific routes require park, mountain, and shuttle permits. The park runs long-term forest, climate, and wildlife monitoring to sustain this high-mountain ecology.' },
      { title: 'Visitor responsibility (Leave No Trace)', body: 'No climbing, carving, or moving fallen wood; pack out all trash; do not feed wildlife; obey control and trail bounds. Seeing both the standing tree and the one returned to earth as the landmark is the simplest respect for the mountain.' },
    ],
  },
  faqTitle: 'FAQ',
  faqIntro: 'Mountain info shifts with weather and management. Answers below follow long-term principles; same-day status still defers to official notices.',
  faqs: [
    { q: 'Can I still see two couple trees?', a: 'No. Of the two red cypress snags, one collapsed from base rot and heavy rain; the fallen wood remains on site. What you mainly see now is the other standing snag.' },
    { q: 'Is there an entry ticket for the Couple Trees?', a: 'No. The trees are a free roadside natural sight; just stopping to look costs nothing. Trails needing park or mountain permits are separate and follow their own rules.' },
    { q: 'Can I park roadside to take photos?', a: 'A little parking exists, including one accessible space per official data. Mountain roads are narrow—do not block the lane, curves, or passage; when full, use a larger lot.' },
    { q: 'When is best for photos?', a: 'Mornings often bring clean light and mist; dusk may show sunset and sea of clouds. Mountain weather shifts fast and is not guaranteed; poor night visibility—do not risk stops for photos.' },
    { q: 'Can public transit reach the trees?', a: 'Check route 6739 (Alishan–Sun Moon Lake) and Tataka stops; or transfer from Chiayi HSR/TRA to Alishan buses, then the mountain line. Schedules and stops change—confirm operators and Yushan notices before departure.' },
    { q: 'Are there restaurants and restrooms nearby?', a: 'The trees themselves have no full facilities. Use the Tataka Visitor Center area for services and dining, or Upper Dongpu for restrooms. High-mountain choices are limited—bring your own water and simple food.' },
    { q: 'Where are the Tataka Couple Trees?', a: 'In the Tataka area of Yushan National Park, Xinyi, Nantou, Taiwan, at Hwy 21 ≈ 141.2K, coordinates about 23.5125°N, 120.8907°E.' },
    { q: 'Where do the ratings and review counts come from?', a: 'The rating (4.3) and count (2,987) are synced from Google Maps user reviews, as of September 2026; copyright belongs to the authors and Google Maps. Shown on the page only, not in structured data.' },
  ],
  reviews: {
    eyebrow: 'Visitor ratings',
    title: 'Google Maps reviews',
    ratingCount: 'Google Maps reviews',
    text: 'Ratings and counts synced from Google Maps user reviews · September 2026 ·',
    sourceTitle: 'About the rating source',
    sourceDesc: 'Synced from Google Maps user reviews, September 2026; copyright belongs to the authors and Google Maps.',
    sourceBtn: 'See all reviews on Google Maps',
  },
  sources: {
    eyebrow: 'Sources',
    title: 'Sources',
    items: [
      { title: 'Reviews', sub: 'Synced September 2026', desc: 'Synced from Google Maps user reviews, September 2026; copyright belongs to the authors and Google Maps.', linkText: 'See all reviews on Google Maps' },
      { title: 'Official tourism info', sub: '', desc: 'The official Yushan National Park Headquarters website provides the latest park notices, road conditions, and entry rules.', linkText: 'Visit Yushan National Park official site' },
    ],
  },
  cta: {
    eyebrow: 'BEFORE YOU GO',
    title: 'Check road status, then go up.',
    desc: 'Tataka’s beauty comes from high altitude and changeable weather. Before leaving, check Yushan National Park, the road authority, and bus operators for live notices.',
    cta1: 'Navigate to the trees',
    cta2: 'Back to top',
  },
  footer: {
    brandDesc: 'We organize the current state of the trees, access, and nearby Tataka plans so you can step into the high-mountain landscape more calmly.',
    navTitle: 'Site map',
    toolsTitle: 'Travel tools',
    mapLink: 'View on map',
    routeLink: 'Navigate to the trees',
    topLink: 'Back to top',
    copyright: 'Tataka Couple Trees Travel Guide',
    deviceNote: 'Trip saves and souvenir cards are stored on your device only.',
  },
  weather: {
    eyebrow: 'Live conditions',
    title: 'Tataka Couple Trees live weather',
    intro: 'Mountain weather changes fast—check temperature, wind, and rain chance before leaving. The tips below auto-organize by current conditions; on-site and CWA notices still rule.',
    currentLabel: 'Current conditions',
    feelsLabel: 'Feels like',
    humidityLabel: 'Humidity',
    windLabel: 'Wind',
    popLabel: 'Today rain chance',
    forecastLabel: '7-day forecast',
    riskTitle: 'Risk alert',
    riskNoneTitle: 'Risk alert',
    riskNoneBody: 'No strong-rain, thunder, or high-wind risk needs special warning right now.',
    sourceNote: 'Weather: Open-Meteo',
    disclaimer: 'Typhoon, heavy-rain, and cold alerts follow CWA notices; this module estimates from open weather data for reference only.',
    fallback: 'Weather is temporarily unavailable. Mountain weather varies—check the latest CWA forecast before leaving, and bring warm, windproof, and rain layers.',
    outfitTitle: 'What to wear',
    activityTitle: 'What to do',
    itemsTitle: 'What to bring',
  },
};

export const defaultLocale = 'zh-Hant';
export const locales = ['zh-Hant', 'en'] as const;
export type Locale = (typeof locales)[number];

export function getTranslations(locale?: string): Translation {
  if (locale && locale.toLowerCase().startsWith('en')) return en;
  return zh;
}

// 天氣建議短語：邏輯回傳鍵，再依語系對應為文字。
export type AdviceKey =
  | 'outfitWaterproof'
  | 'outfitLayered'
  | 'outfitColdNight'
  | 'outfitCold'
  | 'outfitHot'
  | 'outfitWind'
  | 'outfitWindCarry'
  | 'actThunder'
  | 'actHeavyRain'
  | 'actModRain'
  | 'actLightRain'
  | 'actFog'
  | 'actClear'
  | 'actPartly'
  | 'actCloudy'
  | 'actPop'
  | 'actUv'
  | 'actWind'
  | 'itemRaincoatThunder'
  | 'itemRainMod'
  | 'itemRainLight'
  | 'itemRainHeavy'
  | 'itemUv'
  | 'itemCold'
  | 'itemWater'
  | 'itemPop'
  | 'riskThunder'
  | 'riskHeavyRain'
  | 'riskSnow'
  | 'riskFog'
  | 'riskWind';

const adviceZh: Record<AdviceKey, string> = {
  outfitWaterproof: '建議穿著防水外套與防滑鞋。',
  outfitLayered: '晝夜溫差大，建議洋蔥式穿搭，備一件外套方便增減。',
  outfitColdNight: '清晨與夜間偏冷，請備保暖外套或發熱衣。',
  outfitCold: '氣溫偏低，請穿厚外套並注意保暖。',
  outfitHot: '氣溫偏高，建議輕薄透氣衣物，避開正午曝曬。',
  outfitWind: '風大請穿防風外套。',
  outfitWindCarry: '建議攜帶防風外套。',
  actThunder: '雷雨時不建議戶外觀景與登山，先避入室內或車內等待。',
  actHeavyRain: '雨勢較大，戶外觀景（雲海、遠山）視野受限，建議以遊客中心等室內為主。',
  actModRain: '有小到中雨，雲海觀賞機會偏低，路面濕滑請放慢腳步。',
  actLightRain: '飄著小雨，露天體驗較差，走路與步道注意防滑。',
  actFog: '大霧時雲海與遠山看不清，可改走森林步道近距離遊覽。',
  actClear: '天氣晴朗，適合戶外觀景、看日出日落與雲海。',
  actPartly: '多雲時晴，雲隙間有機會見到遠山與光影，適合戶外走訪。',
  actCloudy: '陰天光線柔和，很適合長時間戶外遊覽與拍照。',
  actPop: '今日降雨機率偏高，建議隨身帶傘，戶外觀景行程預留彈性。',
  actUv: '紫外線偏強，長時間戶外請做好防曬。',
  actWind: '風力偏大，山頂與開闊處注意保暖與防風，帽子易被吹落。',
  itemRaincoatThunder: '雨衣（風大時長柄傘易被吹翻，雨衣更安全）',
  itemRainMod: '摺疊傘或雨衣',
  itemRainLight: '輕便摺疊傘',
  itemRainHeavy: '雨衣（風大不建議長柄傘）',
  itemUv: '防曬霜、墨鏡、遮陽帽',
  itemCold: '厚外套、圍巾',
  itemWater: '充足飲用水、防暑用品',
  itemPop: '雨傘 / 雨衣',
  riskThunder: '午後易有雷雨，請勿登山、勿在樹下或空曠處避雨，高處與水上設施可能關閉。',
  riskHeavyRain: '降雨較強，山區易濕滑、能見度驟降，請避開溪谷、低窪與落石路段。',
  riskSnow: '山區可能有積雪結冰，行車與步行請減速，必要時備冰爪。',
  riskFog: '山區能見度差，行車請開頭燈、減速慢行，不適合遠距觀景。',
  riskWind: '山區陣風強，遠離突出岩壁與枯立木，注意防風與保暖。',
};

const adviceEn: Record<AdviceKey, string> = {
  outfitWaterproof: 'Wear a waterproof jacket and grippy shoes.',
  outfitLayered: 'Big day–night swing—dress in layers and bring a jacket to add or shed.',
  outfitColdNight: 'Cold mornings and nights—bring a warm jacket or heat-tech layer.',
  outfitCold: 'Low temperatures—wear a thick jacket and keep warm.',
  outfitHot: 'Warm—wear light, breathable clothes and avoid midday sun.',
  outfitWind: 'Windy—wear a windproof jacket.',
  outfitWindCarry: 'Bring a windproof jacket.',
  actThunder: 'In thunderstorms, skip outdoor viewing and hiking; wait indoors or in the car.',
  actHeavyRain: 'Heavy rain limits views (clouds, distant ridges); prefer indoor spots like the visitor center.',
  actModRain: 'Light to moderate rain lowers cloud-view odds; wet roads—slow your pace.',
  actLightRain: 'A light drizzle makes the outdoors less pleasant; mind slippery paths.',
  actFog: 'In dense fog you cannot see clouds or far ridges—try the forest trail up close.',
  actClear: 'Clear skies suit outdoor viewing, sunrise/sunset, and sea of clouds.',
  actPartly: 'Partly cloudy—gaps may reveal ridges and light; good for outdoor walks.',
  actCloudy: 'Soft cloudy light is great for long outdoor visits and photos.',
  actPop: 'High rain chance today—carry an umbrella and keep outdoor plans flexible.',
  actUv: 'Strong UV—protect your skin during long outdoor time.',
  actWind: 'Breezy—keep warm and wind-protected at the summit and open areas; hats blow off.',
  itemRaincoatThunder: 'Raincoat (wind flips long umbrellas—a coat is safer)',
  itemRainMod: 'Folding umbrella or raincoat',
  itemRainLight: 'Light folding umbrella',
  itemRainHeavy: 'Raincoat (avoid long umbrellas in wind)',
  itemUv: 'Sunscreen, sunglasses, sun hat',
  itemCold: 'Thick jacket, scarf',
  itemWater: 'Plenty of drinking water, heat-relief items',
  itemPop: 'Umbrella / raincoat',
  riskThunder: 'Afternoon thunderstorms likely—no climbing, no shelter under trees or in the open; high and water facilities may close.',
  riskHeavyRain: 'Heavy rain makes mountains slippery with sudden low visibility—avoid valleys, low spots, and rockfall sections.',
  riskSnow: 'Possible snow and ice—slow down driving and walking; crampons if needed.',
  riskFog: 'Poor mountain visibility—headlights on, slow down; not good for distant viewing.',
  riskWind: 'Strong gusts—stay away from exposed rock faces and snags; mind wind and warmth.',
};

export function getAdvice(locale?: string): Record<AdviceKey, string> {
  return locale && locale.toLowerCase().startsWith('en') ? adviceEn : adviceZh;
}

// 客戶端腳本（site.ts）使用的在地化字串。
export const jsStrings = {
  zh: {
    saved: '景點',
    add: '收藏',
    remove: '移除',
    localStorageWarn: '無法寫入 localStorage，瀏覽器可能禁止本機儲存。',
    statusInitial: '尚未選擇照片，先以景點照片製作預覽。',
    statusDone: '預覽已在您的裝置完成，不會上傳。',
    pickImage: '請選擇圖片檔。',
    tooLarge: '圖片超過 25 MB，請先縮小後再試。',
    loaded: '已載入「',
    loadedEnd: '」，照片仍只存在這台裝置。',
    readError: '無法讀取這張照片，請改用其他圖片。',
    downloadError: '無法建立下載檔，請再試一次。',
    downloaded: '紀念卡已下載；照片與成品未離開您的裝置。',
    downloadName: '塔塔加夫妻樹紀念卡-',
    photoFail: '圖片載入失敗',
    defaultTitle: '塔塔加夫妻樹',
  },
  en: {
    saved: 'place',
    add: 'Save',
    remove: 'Remove',
    localStorageWarn: 'Cannot write to localStorage; the browser may block local storage.',
    statusInitial: 'No photo chosen yet; preview uses the sight photo.',
    statusDone: 'Preview finished on your device; nothing uploaded.',
    pickImage: 'Please choose an image file.',
    tooLarge: 'Image over 25 MB—shrink it first and retry.',
    loaded: 'Loaded “',
    loadedEnd: '”; the photo stays on this device only.',
    readError: 'Cannot read this photo; try another image.',
    downloadError: 'Could not create the download; please retry.',
    downloaded: 'Card downloaded; photo and result never left your device.',
    downloadName: 'tataka-couple-trees-card-',
    photoFail: 'Image failed to load',
    defaultTitle: 'Tataka Couple Trees',
  },
} as const;

export function getJsStrings(locale?: string) {
  return locale && locale.toLowerCase().startsWith('en') ? jsStrings.en : jsStrings.zh;
}
