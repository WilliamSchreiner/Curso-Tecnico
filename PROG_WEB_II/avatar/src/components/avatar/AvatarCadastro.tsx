import { useState } from "react";
import { Link } from "react-router-dom";
import { AvatarService, Avatar } from "./AvatarService";


export function AvatarCadastro() {
    
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    function salvar(event: any) {
        event.preventDefault(); // nesta condiçoes perderemos os dados se nao quardarmos ela em algum local, 
        //neste projeto foi no AvatarService mas podemos fazer de forma direta no NestJS;

        let avatar: Avatar = {
            nome: nome,
            imagem: imagem
        };
        
        AvatarService.salvar(avatar);
    }


    return(
        <>
        <Link to={'/avatar'}> Seus avatares </Link>
        
        <h1>Pagina Avatar Cadastro</h1>

        <div>
            <form>

                <label>Nome</label>
            <input type='text' onChange={(event) => setNome(event.target.value)}> </input>

            <label>Avatar (imagem)</label>
            <input type='text' onChange={(event) => setImagem(event.target.value)}> </input>

            </form>
        </div>

        
        </>
    )
}