import { Link, Head } from '@inertiajs/react';
import Topbar from "@/Componentes/Topbar.jsx";

export default function Layout({ children }) {
    return <>
        <Topbar />
        <main className="py-6 px-8 min-h-screen bg-slate-100 dark:bg-gray-800 dark:text-gray-100">
            {children}
        </main>
    </>
}
