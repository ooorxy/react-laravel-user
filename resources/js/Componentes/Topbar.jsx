import { usePage } from "@inertiajs/react";
import {useState} from "react";
import Darkmode from "@/Componentes/Darkmode.jsx";
import {Button, Navbar} from "flowbite-react";
import Icone from "@/Componentes/Icone.jsx";

export default function Topbar () {
    const { auth } = usePage().props;
    const [isNavOpen, setIsNavOpen] = useState(false);
    const switchNav = (event) => {
        event.preventDefault();

        setIsNavOpen((menu) => (!menu));
    }

    return <>
        <Navbar fluid className="ml-[80px] py-4 px-2 bg-zinc-100 text-dark dark:text-gray-100 dark:bg-zinc-700">
            <Navbar.Brand href={route('dashboard')}>
                <span className="text-3xl uppercase">Auth</span>
            </Navbar.Brand>
            <div className="md:order-1">
                <Darkmode iconLight={<Icone iconName="WhiteBalanceSunny"></Icone>}
                    iconDark={<Icone iconName="WeatherNight"></Icone>}/>
            </div>
        </Navbar>

        <div id="sidebar" className={`fixed left-0 top-0 p-2 bg-zinc-100 dark:bg-zinc-600 z-10 h-full ${isNavOpen ? 'w-[350px]' : 'w-[80px]'} overflow-y-auto transition-all ease-in-out self-center`}>
            <div className="flex justify-end mb-4">
                <Button type={"button"} onClick={switchNav} color="dark" className="z-10"><Icone iconName={isNavOpen ? 'Close' : 'Menu'}></Icone></Button>
            </div>
            <div className="flex flex-col items-center">
                <ul>

                </ul>
            </div>
        </div>
    </>
}
