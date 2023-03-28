module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'eslint-plugin-prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/prefer-default-export': 0,
    'function-component-definition': 0,
    'arrow-body-style': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'import/order': 0,
    'default-param-last': 0,
    'object-shorthand': 2,
  },
}
