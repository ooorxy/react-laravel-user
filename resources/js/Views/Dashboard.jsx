import {Head, usePage} from "@inertiajs/react";
import Icone from "@/Componentes/Icone.jsx";

export default function Dashboard() {
    const { users } = usePage().props;

    return <>
        <Head title="Dashboard" />
        <div className="panel">
            <h3>Usuários Cadastrados</h3>
            <div className="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Usuário</th>
                            <th>E-mail</th>
                            <th>Ativo</th>
                            <th>Data de Criação</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id} data-id={user.id}>
                                    <td><img className="border-2 border-gray-400 rounded-full" width="40" height="40" src={user.image} alt="user_image"/></td>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.active}</td>
                                    <td>{new Date(user.created_at).toLocaleDateString('pt-BR')}</td>
                                    <td>
                                        <button className="btn-primary btn-sm">
                                            <Icone iconName="Pencil" size={.8}/>
                                        </button>
                                        <button className="btn-danger btn-sm">
                                            <Icone iconName="Delete" size={.8}/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
