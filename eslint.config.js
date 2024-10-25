// eslint.config.js
import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        ignores: [
            'dist/**/*.ts',
            'dist/**/*.js',
            'dist/**',
            'vite.config.js',
          ],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];