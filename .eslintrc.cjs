module.exports = {
    root: true,
    env:
    {
        es2022: true,
        node: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions:
    {
        sourceType: "module"
    },
    plugins:
    [
        "@stylistic",
        "@typescript-eslint"
    ],
    overrides:
    [
        {
            files: ["./src/main/ts/**/*.mts"],
            extends:
            [
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/strict"
            ],
            parserOptions:
            {
                project: ["./tsconfig.json"]
            },
            rules:
            {
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
                "@typescript-eslint/await-thenable": "error",
                "no-empty-function": "off",
                "@typescript-eslint/no-empty-function": "warn",
                "@stylistic/block-spacing": "error",
                "@stylistic/brace-style": ["error", "allman", { "allowSingleLine": true }],
                "class-methods-use-this": "off",
                "@typescript-eslint/class-methods-use-this": "error",
                "@stylistic/comma-dangle": "error",
                "@stylistic/comma-spacing": "error",
                "@typescript-eslint/consistent-type-assertions": ["error", {assertionStyle: "as", objectLiteralTypeAssertions: "never"}],
                "@typescript-eslint/consistent-type-exports": ["error", {fixMixedExportsWithInlineTypeSpecifier: true}],
                "@typescript-eslint/consistent-type-imports": ["error", {prefer: "type-imports", fixStyle: "inline-type-imports"}],
                "default-param-last": "off",
                "@typescript-eslint/default-param-last": "error",
                "@typescript-eslint/explicit-function-return-type": "error",
                "@typescript-eslint/explicit-member-accessibility": "error",
                "@typescript-eslint/explicit-module-boundary-types": "error",
                "@stylistic/func-call-spacing": "error",
                "@stylistic/key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
                "@stylistic/keyword-spacing": "error",
                "@stylistic/lines-around-comment": ["error", {beforeBlockComment: true, allowBlockStart: true }],
                "@stylistic/lines-between-class-members": ["error", "always"],
                "@stylistic/member-delimiter-style": ["error", {multiline: {delimiter: "semi", requireLast: true}, singleline: {delimiter: "semi", requireLast: false}}],
                "@typescript-eslint/member-ordering": "error",
                "@typescript-eslint/naming-convention": "error",
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-confusing-void-expression": ["error", {ignoreArrowShorthand: true}],
                "@typescript-eslint/no-duplicate-enum-values": "error",
                "@typescript-eslint/no-duplicate-type-constituents": "error",
                "@typescript-eslint/no-empty-interface": "warn",
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-extra-non-null-assertion": "error",
                "@stylistic/no-extra-parens": "error",
                "@stylistic/no-extra-semi": "error",
                "@typescript-eslint/no-extraneous-class": "warn",
                "@typescript-eslint/no-floating-promises": "warn",
                "no-implied-eval": "off",
                "@typescript-eslint/no-implied-eval": "error",
                "@typescript-eslint/no-import-type-side-effects": "error",
                "@typescript-eslint/no-inferrable-types": "warn",
                "no-loop-func": "off",
                "@typescript-eslint/no-loop-func": "error",
                "no-loss-of-precision": "off",
                "@typescript-eslint/no-loss-of-precision": "error",
                "no-magic-numbers": "off",
                "@typescript-eslint/no-magic-numbers": "off",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-misused-promises": ["error", {checksVoidReturn: {arguments: false}}],
                "@typescript-eslint/no-mixed-enums": "warn",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
                "@typescript-eslint/no-non-null-assertion": "warn",




                "default-case": "error",
                "default-case-last": "error",
                "eol-last": "error",
                "no-console": "off",
                "no-implicit-coercion": "error",
                quotes: ["error", "double", {"avoidEscape": true, "allowTemplateLiterals": true}],
                "no-tabs": "error",
                "no-trailing-spaces": "error",
                semi: "off",
                "@typescript-eslint/semi": ["error", "always"]
            }
        }
    ],
};
