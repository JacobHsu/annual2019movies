# 年度電影推薦網站 (Annual Movies)

一個基於 Vue.js 開發的互動式年度電影推薦網站，展示 2015-2019 年個人評價最高的電影清單，並整合 OMDB API 提供詳細的電影資訊和評分。

## 🎬 專案特色

- **多年度電影展示**：支援 2015-2019 年電影資料切換瀏覽
- **全頁滾動體驗**：使用 ks-vue-fullpage 實現流暢的全頁滾動效果
- **電影資訊整合**：整合 OMDB API 獲取 IMDb 評分和爛番茄評分
- **分類展示**：按電影類型分類展示（超級英雄片、劇情片、科幻片等）
- **響應式設計**：支援桌面和行動裝置瀏覽
- **個人評分系統**：每部電影都有個人星級評分

## 🛠 技術棧

- **前端框架**：Vue.js 2.6
- **UI 組件庫**：Bootstrap Vue
- **全頁滾動**：ks-vue-fullpage
- **圖標庫**：Font Awesome
- **HTTP 請求**：Axios
- **動畫效果**：Velocity.js
- **函數式程式設計**：Ramda
- **資料爬取**：Python (Beautiful Soup, gspread)

## 📁 專案結構

```
annual2019movies/
├── src/
│   ├── App.vue              # 主應用組件
│   ├── main.js              # 應用入口點
│   ├── components/
│   │   └── HelloWorld.vue   # 主要電影展示組件
│   └── assets/              # 靜態資源
├── public/
│   ├── index.html           # HTML 模板
│   └── data/                # 電影資料 JSON 檔案
│       ├── 2015movies.json
│       ├── 2016movies.json
│       ├── 2017movies.json
│       ├── 2018movies.json
│       └── 2019movies.json
├── bin/                     # Python 爬蟲腳本
│   ├── all_movies.py        # 電影資料爬取腳本
│   ├── moviesname.py        # 電影名稱處理
│   └── csvfile.py           # CSV 檔案處理
└── package.json             # 專案配置
```

## 🚀 快速開始

### 環境需求

- Node.js (建議 14.x 或以上版本)
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 開發環境運行

```bash
npm run serve
```

### 生產環境建置

```bash
npm run build
```

### 程式碼檢查

```bash
npm run lint
```

## 🎯 功能說明

### 電影資料結構

每部電影包含以下資訊：
- **基本資訊**：中英文片名、類型、個人評分
- **視覺元素**：背景圖片、海報
- **評分資訊**：IMDb 評分、爛番茄評分
- **相關電影**：同類型推薦電影清單

### API 整合

專案整合了 [OMDB API](http://www.omdbapi.com) 來獲取：
- IMDb 評分
- 爛番茄評分
- 電影海報
- 詳細電影資訊

### 資料爬取工具

`bin/` 目錄包含 Python 腳本用於：
- 從觸電網爬取年度電影清單
- 整理電影資料並上傳至 Google Sheets
- 生成 JSON 格式的電影資料

## 🌐 部署

### GitHub Pages 部署

```bash
npm run deploy
```

專案已配置自動部署至 GitHub Pages：
- 部署網址：https://jacobhsu.github.io/annual2019movies/
- 使用 gh-pages 套件自動化部署流程

### 配置說明

在 `vue.config.js` 中設定：
```javascript
module.exports = {
    publicPath: 'annual2019movies'
}
```

## 📊 資料來源

- **電影資訊**：[OMDB API](http://www.omdbapi.com)
- **背景圖片**：[Alpha Coders](http://wall.alphacoders.com)
- **評分資料**：[IMDb](https://www.imdb.com/)

## 🔧 開發工具設定

### Python 爬蟲環境

如需使用資料爬取功能，請參考 `bin/README.md` 設定：
1. Google Sheets API 憑證
2. 安裝 Python 依賴套件
3. 配置 `config.ini` 檔案

## 🔗 相關連結

- [Vue CLI 官方文檔](https://cli.vuejs.org/zh/guide/installation.html)
- [Bootstrap Vue 文檔](https://bootstrap-vue.js.org/docs)
- [Font Awesome Vue 組件](https://github.com/FortAwesome/vue-fontawesome)
