const react = require('eslint-plugin-react');
const prettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
    {
        ignores: ['.cache/**', 'public/**', 'node_modules/**'],
    },
    react.configs.flat.recommended,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        rules: {
            'linebreak-style': ['error', 'unix'],
            'no-console': 'warn',
            'no-unused-vars': 'error',
            // Project uses @mui/system styling and runtime checks rather than PropTypes everywhere.
            'react/prop-types': 'off',
            // react-three-fiber elements use lowercase props (position, args, etc.)
            // that this rule treats as unknown DOM attributes.
            'react/no-unknown-property': 'off',
            // Apostrophes in JSX copy render fine; escaping them adds noise.
            'react/no-unescaped-entities': 'off',
        },
    },
];
