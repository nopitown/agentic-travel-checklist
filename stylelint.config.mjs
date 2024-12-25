const config = {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
  plugins: ["stylelint-use-nesting", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "media",
        ],
      },
    ],
    "media-query-no-invalid": null,
    "no-descending-specificity": null,
  },
};

export default config;
