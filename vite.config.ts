import inertia from '@inertiajs/vite';
import run from 'vite-plugin-run';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        process.env.NODE_ENV === 'dev' &&
            run([
                {
                    name: 'wayfinder',
                    run: ['php', 'artisan', 'wayfinder:generate --with-form'],
                    pattern: ['routes/**/*.php', 'app/**/Http/**/*.php'],
                },
            ]),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        inertia(),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
});
