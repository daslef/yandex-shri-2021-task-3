module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  env: {
    node: true,
    browser: true
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "prefer-spread": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-case-declarations": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};
