const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@sxzz/eslint-config-vue', '@sxzz/eslint-config-prettier'],
  rules: {
    'import/named': 'off',
    curly: [2, 'multi-line'], //if 后必须包含 { ，单行 if 除外
    'max-depth': [2, 5], //最大块嵌套不能超过5层
    'max-params': [2, 8], //函数的形参不能多于8个
    'no-empty-function': 2, //禁止空的function,保证写的每一个function都有用
    'array-callback-return': 2, // 数组的 map、filter、sort 等方法，回调函数必须有返回值
    'no-var': 2, // 禁止使用 var，必须用 let 或 const
    'no-alert': 1, // 禁止 alert
    'no-implied-eval': 2, // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
    'block-spacing': [2, 'always'], // 代码块花括号前后的空格规则
    'no-console': 0,
    semi: [2, 'never'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      { vars: 'all', varsIgnorePattern: '^props', args: 'none' },
    ],
  },
})
