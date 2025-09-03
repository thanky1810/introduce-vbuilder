// eslint.config.mjs
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1) BỎ QUA build/static
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',          // <-- bỏ qua toàn bộ public (khuyên dùng cho Nest)
      // 'eslint.config.mjs' // không cần ignore file config chính nó
    ],
  },

  // 2) Rule JS cơ bản (nếu bạn có .js bên ngoài public muốn lint)
  {
    files: ['**/*.js'],
    ignores: ['public/**'], // nhắc lại để chắc chắn
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
    },
    ...eslint.configs.recommended,
  },

  // 3) Rule cho TypeScript – CHỈ áp vào .ts / .tsx
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        // Dùng Project Service mới của typescript-eslint
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
    },
    // cấu hình khuyến nghị cho TS + type-checked
    ...tseslint.configs.recommendedTypeChecked,
    // bật prettier (chỉ báo format)
    ...eslintPluginPrettierRecommended,
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);
