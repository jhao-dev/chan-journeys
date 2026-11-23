# 禪宗祖師行旅圖（Journeys of the Chan Patriarchs）

水墨古卷風格的動畫地圖網站。第一篇：達摩東來。

## 檔案說明
- `index.html`：網頁本體
- `style.css`：配色與版面
- `data.js`：**故事文字、站點座標、路線**（要改故事改這裡）
- `scenes.js`：每一站的水墨插圖
- `app.js`：地圖動畫與播放控制
- `lib/`：地圖資料與繪圖函式庫（已下載到本機，不依賴外部網站）
- `assets/bgm.mp3`：背景音樂（**尚未放入**，放一個同名 mp3 即可啟用）

## 發布到 Cloudflare Pages
1. 登入 Cloudflare → Workers & Pages → 建立 → Pages → 「直接上傳」（Upload assets）
2. 把這個資料夾裡的網站檔案（index.html、style.css、data.js、scenes.js、app.js、lib、assets）拖進去
3. 不需要任何建置（build）設定，上傳完成就有網址

## 更新網站時
修改檔案後，把 `index.html` 裡的 `?v=2` 改成 `?v=3`（依此類推），觀眾的瀏覽器才會抓到新版，不會看到舊的快取。

## 其他
- **分享縮圖：** 上線拿到網址後，把 `index.html` 裡 `og:image` 的 `og-image.jpg` 改成完整網址（例如 `https://你的網址/og-image.jpg`），LINE／Facebook 才抓得到圖。
- 網址加上 `#stop=3` 會直接從第三站開始播放（「分享」按鈕會自動產生）。
- 優化方向與功能規劃見 `ROADMAP.md`。

## 新增篇章
在 `data.js` 的 `CHAPTERS` 裡，把對應篇章改成 `ready: true`，並仿照達摩篇填入 `stations`（站點）與 `segments`（路段）。
