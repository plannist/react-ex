module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
    "./.eslintrc-auto.json",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // plugins: ['react-refresh'],
  // ESLint 사용 javascript 옵션
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    // "project": "./tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "prettier/prettier": "error", // eslnt
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off" /* import React from 'react' 모든 페이지에 적는거 방지 */,
    "react-hooks/exhaustive-deps": "off",
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    'react-refresh/only-export-components': "off"
  },
}
