module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'function-component-definition': 0,
    'arrow-body-style': 0,
    'default-param-last': 0,
    'object-shorthand': 0,
    'no-unused-vars': 1,
    "react/jsx-curly-brace-presence": 'ignore'
  },
}
