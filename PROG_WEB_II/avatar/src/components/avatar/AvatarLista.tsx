import { Link } from "react-router-dom";

export function AvatarLista() {

    return(
        <>
        <h1>Pagina Avatar Lista</h1>

        <Link to={'/avatar/cadastro'}> Cadastrar avatar </Link>
        </>
    )
}