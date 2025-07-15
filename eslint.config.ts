import prettierConfig from '@vue/eslint-config-prettier';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**']
  },

  pluginVue.configs['flat/essential'],
  pluginVue.configs['flat/recommended'],
  pluginVue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommended,

  prettierConfig,

  {
    rules: {
      'no-console': 'error',
      'spaced-comment': ['error', 'always', { block: { balanced: true }, exceptions: ['-', '+'] }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'vue/no-multiple-template-root': 'off',
      'vue/no-use-v-else-with-v-for': 'warn',
      'vue/no-useless-v-bind': 'warn',
      'vue/no-v-text': 'error',
      'vue/prefer-define-options': 'error',
      'vue/require-emit-validator': 'error',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts'
          }
        }
      ],
      'vue/block-order': [
        'error',
        {
          order: [['script', 'template'], 'style']
        }
      ],
      'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
          exceptions: []
        }
      ],
      'vue/require-prop-comment': [
        'error',
        {
          type: 'any'
        }
      ]
    }
  }
);
