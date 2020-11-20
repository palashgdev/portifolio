module.exports = {
  extends: ["react-app", "eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {},
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "additional-typescript-only-rule": "warn"
      }
    }
  ]
};
