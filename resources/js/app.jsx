import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp, usePage } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Layout from "@/Layouts/Layout.jsx";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => {
        const page = resolvePageComponent(`./Views/${name}.jsx`, import.meta.glob('./Views/**/*.jsx'));

        page.then((module) => {
            module.default.layout = module.default.layout || Layout
        });

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#ffffff',
    },
});
