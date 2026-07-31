# 塔塔加夫妻樹單頁景點網站

以繁體中文呈現的塔塔加夫妻樹旅遊指南。專案採用 Astro、Tailwind CSS、TypeScript 與 Cloudflare Workers，無資料庫、無登入、無 CMS。

## 主要功能

- 單頁景點介紹、現況、費用、停車、最佳時段與建議停留時間
- 南投／水里、嘉義／阿里山及大眾運輸交通說明
- 周邊景點、周邊餐飲與高山補給建議
- 本機照片牆、原生 `<dialog>` 放大檢視、響應式網格及圖片延遲載入
- `localStorage` 行程清單，資料只保存在目前裝置
- Canvas 景點紀念卡：相簿選圖、拍照、自拍、三種尺寸、三種風格與本機下載
- `TouristAttraction` 與 `FAQPage` JSON-LD
- GA4：`G-HXM22WWPKP`
- Cloudflare Workers 部署設定

## 固定版本

- Node.js `24.18.1`
- pnpm `11.18.0`
- Astro `7.1.6`
- TypeScript `6.0.3`
- Tailwind CSS `4.3.3`
- `@astrojs/cloudflare` `14.1.7`
- `@astrojs/sitemap` `3.7.3`
- `@astrojs/check` `0.9.10`
- Wrangler `4.113.0`

所有直接相依套件均使用精確版本，完整相依解析結果記錄於 `pnpm-lock.yaml`。

## 安裝與檢查

```bash
corepack enable
corepack prepare pnpm@11.18.0 --activate
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
```

本專案是單包專案，刻意不建立 `pnpm-workspace.yaml`。

## 設定正式網域

正式 URL 只有一個設定處：`astro.config.mjs` 中的 `site` 常數。

```js
const site = '';
```

網域尚未確定時維持空字串即可，專案仍可正常建置：

- 省略 canonical 與 `og:url`
- `og:image` 使用相對路徑
- JSON-LD 不寫入本站絕對 URL
- 不啟用 `@astrojs/sitemap`，因此不會產生含占位網域的 sitemap
- `robots.txt` 不寫入 sitemap 位址

網域確定後，在同一處填入含 `https://` 的正式來源並重新建置。canonical、Open Graph、JSON-LD、robots 與 sitemap 會全部由 `Astro.site` 派生。

## Cloudflare Workers

```bash
pnpm deploy
```

`wrangler.jsonc` 使用 Astro Cloudflare 適配器提供的統一 Worker 入口 `@astrojs/cloudflare/entrypoints/server`，並將 `./dist` 綁定為靜態資源目錄；部署前會先執行 `pnpm build`。

## 隱私

- 行程收藏只寫入瀏覽器 `localStorage`。
- 紀念卡照片透過瀏覽器 File API 讀取，並使用 Canvas 在本機合成。
- 照片、文字與成品不會上傳，也不會傳送到本站伺服器。

## 景點資料依據

- 玉山國家公園管理處：夫妻樹位於台 21 線約 141.2K、海拔約 2,478 公尺，以及景點現況、建議停留時間和無障礙停車資訊。
- 玉山國家公園管理處：塔塔加遊客中心、上東埔停車場、大鐵杉、交通與設施資料。
- 使用者提供的 Google 地圖座標：`23.5125202, 120.8907209`。
- 結構化資料中的參考評分為公開索引資料所顯示的 `4.5 / 5、26 則`，屬非即時資料；頁面已明確提醒應以地圖平台當下顯示為準。

營運時間、客運班次、道路管制、餐飲供應與評分皆可能變動，因此頁面避免寫死容易過期的時刻，並提醒訪客在出發前再次確認。

## 圖片來源與本機檔案

圖片取自內政部國家公園署玉山國家公園管理處公開景點／遊客服務頁面，並轉換為專案內的 WebP 檔案，避免訪客瀏覽時依賴遠端圖片。專案與頁面均未宣稱擁有圖片著作權；正式營運前仍應再次確認適用的政府資料開放授權或取得許可。

| 本機檔案 | 內容 | 原始來源 |
|---|---|---|
| `couple-tree.webp` | 夫妻樹現況 | 玉山國家公園管理處夫妻樹景點頁 |
| `tataka-sunset-clouds.webp` | 塔塔加夕照雲海 | 玉山國家公園管理處景點頁 |
| `big-hemlock.webp` | 塔塔加大鐵杉 | 玉山國家公園管理處景點頁 |
| `forest-giant.webp` | 高山森林巨木 | 玉山國家公園管理處景點頁 |
| `tataka-visitor-center.webp` | 塔塔加遊客中心 | 玉山國家公園管理處遊客服務頁 |
| `visitor-center-exterior.webp` | 遊客中心外觀 | 玉山國家公園管理處遊客服務頁 |
| `visitor-center-interior.webp` | 遊客中心室內 | 玉山國家公園管理處遊客服務頁 |
| `visitor-center-dining.webp` | 遊客中心餐飲空間 | 玉山國家公園管理處遊客服務頁 |

## 交付自檢

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

建置後可執行：

```bash
grep -RniE 'example\.com|localhost|chrome-extension://' dist || true
find dist -iname '*sitemap*' -type f -print
```

當 `site` 留空時，不產生 sitemap 是預期行為。設定正式網域後，sitemap 由 `@astrojs/sitemap` 自動產生，且專案未設定 `lastmod`。
