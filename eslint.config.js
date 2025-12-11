import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['dist', 'node_modules']
  },

  {
    files: ['**/*.vue', '**/*.ts', '**/*.js'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // <— AGORA o TypeScript parseia APENAS o conteúdo JS/TS dentro do Vue
        extraFileExtensions: ['.vue']
      }
    }
  },

  js.configs.recommended,

  ...vue.configs['flat/recommended'],

  {
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off'
    }
  },

  {
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          trailingComma: 'none'
        }
      ]
    }
  }
]
