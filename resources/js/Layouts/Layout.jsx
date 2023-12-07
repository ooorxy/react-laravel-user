import { Link, Head } from '@inertiajs/react';

export default function Layout({ children, auth }) {
    return <>
        <Head title="Welcome" />
        <main className="sm:flex min-h-screen bg-gray-100 dark:bg-gray-900 selection:text-white">
            <nav className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                {auth && auth.user ?
                    <div className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        Olá {auth.user.name}!
                    </div>
                    :
                    <>
                        <Link
                            href={route('login')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-gray-500"
                        >
                            Login
                        </Link>

                        <Link
                            href={route('register')}
                            className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-gray-500"
                        >
                            Registre-se
                        </Link>
                    </>
                }
            </nav>
            <section className="sm:mt-10 p-5 dark:text-gray-100">{children}</section>
        </main>
    </>
}
