import { Link, Head } from '@inertiajs/react';
import Topbar from "@/Componentes/Topbar.jsx";

export default function Layout({ children }) {
    return <>
        <Topbar />
        <main className="px-10 py-6 min-h-screen bg-slate-100 dark:bg-gray-800 dark:text-gray-100">
            {children}
        </main>
    </>
}
