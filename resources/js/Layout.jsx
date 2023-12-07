import { Link, Head } from '@inertiajs/react';
import Topbar from "@/Componentes/Topbar.jsx";

export default function Layout({ children }) {
    return <>
        <Head title="Dashboard" />
        <main className="sm:flex min-h-screen bg-indigo-100 dark:bg-gray-900 selection:text-white">
            <Topbar />
            <section className="sm:mt-10 p-5 dark:text-gray-100">
                {children}
            </section>
        </main>
    </>
}
