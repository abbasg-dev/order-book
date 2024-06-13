module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    // Use recommended rules for React
    "plugin:react/recommended",
    // Use recommended rules for React Hooks
    "plugin:react-hooks/recommended",
    // Use recommended rules for TypeScript
    "plugin:@typescript-eslint/recommended",
    // Ensure proper import/export syntax and detect import errors
    "plugin:import/errors",
    "plugin:import/warnings",
    // Additional import rules for TypeScript
    "plugin:import/typescript",
    // Ensure accessibility best practices
    "plugin:jsx-a11y/recommended",
    // Best practices for ESLint directive comments
    "plugin:eslint-comments/recommended",
    // Enables the new JSX transform from React 17+
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  ignorePatterns: ["webpack/*"],
};
