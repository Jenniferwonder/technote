// eslint.config.js
import antfu from '@antfu/eslint-config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default antfu(
  {
    lessOpinionated: true,
    // Type of the project. 'lib' for libraries, the default is 'app'
    type: 'lib',

    // Enable stylistic formatting rules
    // stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    // vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: true,
    astro: true,
    svelte: true,
    react: true,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/fixtures',
      // ...globs
    ],
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier',
    },
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts'],
    rules: {},
  },
  {
    rules: {},
  },
  ...eslintPluginAstro.configs.recommended,
)

// import eslint from '@eslint/js'
// import tseslint from 'typescript-eslint'
// import astroEslintParser from 'astro-eslint-parser'
// import eslintPluginAstro from 'eslint-plugin-astro'
// import eslintPluginVue from 'eslint-plugin-vue'
// import globals from 'globals'
// import typescriptParser from '@typescript-eslint/parser'
// import vueParser from 'vue-eslint-parser'

// export default [
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...eslintPluginAstro.configs['flat/recommended'],
//   ...eslintPluginVue.configs['flat/recommended'],
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//     },
//     rules: {
//       // セミコロン省略スタイル
//       'semi': ['error', 'never', { beforeStatementContinuationChars: 'never' }],
//       'semi-spacing': ['error', { after: true, before: false }],
//       'semi-style': ['error', 'first'],
//       'no-extra-semi': 'error',
//       'no-unexpected-multiline': 'error',
//       'no-unreachable': 'error'
//     },
//   },
//   {
//     files: ['**/*.astro'],
//     languageOptions: {
//       parser: astroEslintParser,
//       parserOptions: {
//         parser: '@typescript-eslint/parser',
//         extraFileExtensions: ['.astro'],
//       },
//     },
//   },
//   {
//     files: ["*.vue", "**/*.vue"],
//     languageOptions: {
//       parser: vueParser,
//       parserOptions: { parser: tseslint.parser, sourceType: "module" },
//     },
//   },
//   {
//     files: ['**/*.{js,jsx,astro}'],
//     rules: {
//       'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
//     },
//   },
//   {
//     // Define the configuration for `<script>` tag.
//     // Script in `<script>` is assigned a virtual file name with the `.js` extension.
//     files: ['**/*.{ts,tsx}', '**/*.astro/*.js'],
//     languageOptions: {
//       parser: typescriptParser,
//     },
//     rules: {
//       // Note: you must disable the base rule as it can report incorrect errors
//       'no-unused-vars': 'off',
//       '@typescript-eslint/no-unused-vars': [
//         'warn',//'error'
//         {
//           argsIgnorePattern: '^_',
//           destructuredArrayIgnorePattern: '^_',
//         },
//       ],
//       '@typescript-eslint/no-non-null-assertion': 'off',
//       "@typescript-eslint/no-explicit-any": "warn",
//     },
//   },
//   {
//     ignores: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro'],
//   },
// ]
