# nuxt-noeslint

## 頁面說明

### `@/pages/users`

測試 Router Params 資料夾結構，測試時先到 `nuxt.config.js` 關閉載入 `@nuxtjs/router` 模組。

```js
export default {
  modules: [
    // '@nuxtjs/router',
    "@nuxtjs/axios"
  ]
};
```

### `@/pages/store`
測試 Vuex store 模組載入規則

### `@/pages/lifecylce`
測試 SSR/CSR 前後端資料整合方式，驗證各個 lifecycle 行為。

### `@/pages/bugs`
紀錄研究過程遇到的問題與解法。

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
