module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          "internal",
          ["parent", "index", "sibling"],
        ],
        pathGroups: [
          {
            pattern: "*.svg",
            group: "object",
            position: "after",
          },
          {
            pattern: "*.css",
            group: "object",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".svg", ".json"],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
};
