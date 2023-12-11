import { usePage } from "@inertiajs/react";
import Darkmode from "@/Componentes/Darkmode.jsx";
import {Button, Navbar} from "flowbite-react";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiMenu, mdiWeatherNight, mdiWhiteBalanceSunny} from "@mdi/js";
import Icone from "@/Componentes/Icone.jsx";

export default function Topbar () {
    const { auth } = usePage().props;
    const [isNavOpen, setIsNavOpen] = useState(false);
    const switchNav = (event) => {
        event.preventDefault();

        setIsNavOpen((menu) => (!menu));
    }

    return <>
        <Navbar fluid className="py-4 px-2 bg-zinc-100 text-dark dark:text-gray-100 dark:bg-zinc-700">
            <Navbar.Brand href={route('dashboard')}>
                {/*<Button type={"button"} onClick={switchNav} color="light" className="z-10"><Icone iconName={isNavOpen ? 'Close' : 'Menu'}></Icone></Button>*/}
                AUTH
            </Navbar.Brand>
            <div className="md:order-1">
                <Darkmode
                    iconLight={<Icone iconName="WhiteBalanceSunny"></Icone>}
                    iconDark={<Icone iconName="WeatherNight"></Icone>}
                />
            </div>
        </Navbar>
    </>
}
