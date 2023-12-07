import { usePage } from "@inertiajs/react";
import Darkmode from "@/Componentes/Darkmode.jsx";
import Icone from "@/Componentes/Icone.jsx";
import LinkTopBar from "@/Componentes/LinkTopBar.jsx";

export default function Topbar () {
    const { auth } = usePage().props;

    return <>
        <nav className="navbar">
            <div className="text-start">
                <span className="font-medium text-xl">AUTH</span>
            </div>
            <div className="ml-auto flex justify-end">
                {
                    auth && auth.user
                    ?
                        <div></div>
                    :
                        <>
                            <LinkTopBar route={route('login')} text={'Login'}/>
                            <LinkTopBar route={route('register')} text={'Registre-se'}/>
                        </>
                }
                <Darkmode
                    iconLight={<Icone iconName="WhiteBalanceSunny"></Icone>}
                    iconDark={<Icone iconName="WeatherNight"></Icone>}
                />
            </div>
        </nav>
    </>
}
