import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import Layout from "@/Layout.jsx";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${appName}` + (title ? ` - ${title}` : ''),
    resolve: (name) => {
        const pages = import.meta.glob('./Views/**/*.jsx', { eager: true });
        let page = pages[`./Views/${name}.jsx`];

        page.default.layout = page => <Layout children={page} />;

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
