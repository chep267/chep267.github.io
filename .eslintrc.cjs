/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

const { resolve } = require('node:path');

module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        // Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        // Disable các rule mà eslint xung đột với prettier.
        // Để cái này ở dưới để nó override các rule phía trên!.
        'eslint-config-prettier',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'prettier', '@tanstack/query', 'formatjs'],
    settings: {
        react: {
            // Nói eslint-plugin-react tự động biết version của React.
            version: 'detect',
        },
        // Nói ESLint cách xử lý các import
        'import/resolver': {
            node: {
                paths: [resolve(__dirname, '')],
                extensions: ['.tsx', '.ts', '.js', '.jsx'],
            },
            typescript: {
                project: resolve(__dirname, './tsconfig.json'),
            },
        },
    },
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        // Tắt rule yêu cầu import React trong file jsx
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        // Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
        'react/jsx-no-target-blank': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/no-named-as-default': 'off',
        'no-case-declarations': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@tanstack/query/exhaustive-deps': 'off',
        '@tanstack/query/no-rest-destructuring': 'warn',
        '@tanstack/query/stable-query-client': 'error',

        // intl
        "formatjs/no-offset": "error",

        // Cảnh báo khi import sai
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@mui/*/*/*'],
                paths: ['lodash'],
            },
        ],
    },
};
