import { Link, usePage } from "@inertiajs/react";
import Darkmode from "@/Componentes/Darkmode.jsx";
import Icone from "@/Componentes/Icone.jsx";

export default function Topbar () {
    const { auth } = usePage().props;

    return (
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
            <Darkmode iconLight={<Icone iconName="WhiteBalanceSunny"></Icone>}
                      iconDark={<Icone iconName="WeatherNight"></Icone>}>
            </Darkmode>
        </nav>
    )
}
