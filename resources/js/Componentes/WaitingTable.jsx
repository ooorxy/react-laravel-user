import {Spinner, Table} from "flowbite-react";

export default function WaitingTable ({columns}) {
    return (
        <Table.Row id="waitingTable" className="bg-white dark:border-gray-700 dark:bg-gray-800 animate-pulse py-4">
            <Table.Cell className="text-center" colSpan={columns}>
                <Spinner aria-label="Loading" size="xl"/>
            </Table.Cell>
        </Table.Row>
    )
}
