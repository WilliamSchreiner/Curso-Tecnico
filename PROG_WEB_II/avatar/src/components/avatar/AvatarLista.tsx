import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";

export function AvatarLista() {
    const [avatarList , setAvatarList] = useState<Avatar[]>();

    useEffect(() => {
        setAvatarList(AvatarService.list)
    }, []);

    return(
<>
        <h1>Pagina Avatar Lista</h1>

    <Link to={'/avatar/cadastro'}> Cadastrar avatar </Link>

        <ul>
            {avatarList?.map(avatar => (
                <li key={avatar.id}>
                    {avatar.nome}
                    <Link to={'/avatar/cadastro/' + avatar.id}> [editar] </Link>
                </li>
))}
        </ul>
</>
    )
}