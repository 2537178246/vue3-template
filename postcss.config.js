module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 换算的基数
      selectorBlackList: ['.el'], // 忽略转换正则匹配项 列入一些ui库, ['.el'] 就是忽略elementUI库
      propList: ['*']
    }
  }
}
