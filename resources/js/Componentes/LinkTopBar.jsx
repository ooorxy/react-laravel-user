import { Link } from "@inertiajs/react";

export default function LinkTopBar ({ route, text }) {
    return (
        <Link
            href={route}
            className="ms-6 my-1 p-1 hover:text-gray-500 dark:hover:text-gray-300 font-medium"
        >
            {text}
        </Link>
    )
}
