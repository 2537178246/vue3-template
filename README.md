<p align="center">
  <a href="http://hxgis.com/">
    <img width="300px" src="https://hxgit.hxgis.com/uploads/-/system/appearance/header_logo/1/logo.png" alt=''>
  </a>
</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

# Vue 3 + Typescript + Vite

<span style="display: inline-block;padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold">
Vue3</span><span></span><span style="display: inline-block;padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold">
3.2.37</span><span></span>
<span style="display: inline-block;padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold">
TypeScript</span><span></span><span style="display: inline-block;padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold">
4.4.3</span><span></span>
<span style="display: inline-block;padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold">
Vite</span><span></span><span style="display: inline-block;padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold">
3.0.7</span><span></span>

# 项目描述 <span style="color: #F43D7A">*</span>

- 项目名称👇


- 启动时间👇


- 开发人员👇

  - 项目经理

  - 前端

  - 后端


- swagger 地址👇


- 线上地址👇


- jenkins 地址👇

# 如何运行

```yaml
// npm
npm i
npm run dev
npm run build
// yarn
yarn
yarn dev
yarn build
// pnpm
pnpm i
pnpm dev
pnpm build
```

# 业务介绍

| 项目目录       | 页面描述 | 页面路由       |
|------------|------|------------|
| error-page | 错误跳转 | 404/403/.. |
| redirect   | 重定向  | redirect   |
| home       | 首页   | /home      |

# 项目备注

## config.json 👇

- `DevTokenKey` -> 测试本地Token
- `ProTokenKey` -> 线上环境Token
- `PatternType` -> 系统版本

  —— （Business **带登陆版本，动态路由**） 后台为`xuyan`配置

  —— （Dashboard **大屏版本**）可在登陆模块暂未开发的时候进行开发
- `WhiteRouter` -> 路由白名单，路由守卫会跳过白名单中路由
- `LocalName` -> `localStorage`本地信息存储名称

## router.ts👇

````typescript
/**
 * If PatternType === 'Business'（can not find PatternType? see here⬆️）
 * You will see the routing rules
 * The backstage is xuyan configured
 * If you have something special
 * Please modify manually
 *
 *
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
````

- `constantRoutes` 固定路由
- `localAsyncRoutes` 本地异步路由
- `routeList` 自己配置的路由

## 华信联创知识库👇

- [华信知识库](http://wiki.hxgis.com/)
- [前端代码规范](http://wiki.hxgis.com/zh/public/docs/web-development-guide)
- [前端项目目录结构手册](http://wiki.hxgis.com/zh/public/docs/%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E)
- [前端工程格式化标准](http://wiki.hxgis.com/zh/public/docs/front)
