import {Head, usePage} from "@inertiajs/react";
import Icone from "@/Componentes/Icone.jsx";
import {Breadcrumb, Button, Card, Table} from "flowbite-react";

export default function Dashboard() {
    const { users } = usePage().props;

    return <>
        <Head title="Dashboard" />

        <Breadcrumb className="flex justify-end px-5 py-3 mb-5">
            <Breadcrumb.Item><Icone iconName="Home" size={.8}/> Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <Card>
            <h3>Usuários Cadastrados</h3>

            <Table>
                <Table.Head>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Usuário</Table.HeadCell>
                    <Table.HeadCell>E-mail</Table.HeadCell>
                    <Table.HeadCell>Ativo</Table.HeadCell>
                    <Table.HeadCell>Data de Criação</Table.HeadCell>
                    <Table.HeadCell>Ações</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        users.map(user => {
                            const date = new Date(user.created_at).toLocaleDateString('pt-BR');
                            return (
                                <Table.Row key={user.id}>
                                    <Table.Cell><img className="border-2 border-gray-400 rounded-full" width="40" height="40" src={user.image} alt="user_image"/></Table.Cell>
                                    <Table.Cell>{user.id}</Table.Cell>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.active}</Table.Cell>
                                    <Table.Cell>{date}</Table.Cell>
                                    <Table.Cell>
                                        <Button.Group>
                                            <Button color="blue" size="sm" pill>
                                                <Icone iconName="Pencil" size={.8}/>
                                            </Button>
                                            <Button color="failure" size="sm" pill>
                                                <Icone iconName="Delete" size={.8}/>
                                            </Button>
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
            <div className="overflow-x-auto">
                <table>
                    <thead>
                    <tr>
                        <th className="hidden xl:block"></th>
                        <th>ID</th>
                        <th>Usuário</th>
                        <th>E-mail</th>
                        <th>Ativo</th>
                        <th>Data de Criação</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </Card>
    </>
}
