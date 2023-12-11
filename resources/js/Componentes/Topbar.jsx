import { usePage } from "@inertiajs/react";
import Darkmode from "@/Componentes/Darkmode.jsx";
import Icone from "@/Componentes/Icone.jsx";
import LinkTopBar from "@/Componentes/LinkTopBar.jsx";
import { Navbar, Sidebar } from "flowbite-react";

export default function Topbar () {
    const { auth } = usePage().props;

    return <>
        <Navbar fluid className="py-4 px-2">
            <Navbar.Brand href={route('dashboard')}>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">AUTH</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <LinkTopBar route={route('login')} text={'Login'}/>
                <LinkTopBar route={route('register')} text={'Registre-se'}/>
                <Darkmode
                    iconLight={<Icone iconName="WhiteBalanceSunny"></Icone>}
                    iconDark={<Icone iconName="WeatherNight"></Icone>}
                />
            </div>
        </Navbar>
    </>
}
