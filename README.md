<p align="center">
  <a href="">
    <img width="300px" src="https://avatars.githubusercontent.com/u/64510341?v=4">
  </a>
</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

# Vue 3 + Typescript + Vite

## config.json 👇

- `DevTokenKey` -> 测试本地Token
- `ProTokenKey` -> 线上环境Token
- `PatternType` -> 系统版本

  —— （System **带登陆版本，动态路由**）

  —— （Dashboard **大屏版本**）可在登陆模块暂未开发的时候进行开发
- `WhiteRouter` -> 路由白名单，路由守卫会跳过白名单中路由
- `LocalName` -> `localStorage`本地信息存储名称

## router.ts👇

- `constantRoutes`
- `localAsyncRoutes`
- `routeList`
