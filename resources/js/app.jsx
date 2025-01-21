import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { CssVarsProvider } from '@mui/joy';
import PusherProvider from './Layouts/PusherProvider';
import { NotificationProvider } from './Contexts/notification';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <NotificationProvider>
                <PusherProvider>
                    <CssVarsProvider disableTransitionOnChange>
                        <App {...props} />
                    </CssVarsProvider>
                </PusherProvider>
            </NotificationProvider>
        );
    },
    progress: {
        color: '#f15721',
    },

});
