import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";  //useParams pega os parametros enviados pelas rotas em /: xx
import { AvatarService, Avatar } from "./AvatarService";


export function AvatarCadastro() {

    const navigate = useNavigate();

    //Destructuring = desustrurar os paramentros em segmentos
    const {id} = useParams(); // {id} especifica o parametro que deseja pegar

    const [avatar, setAvatar] = useState<Avatar>({nome: '', imagem: ''});

    //const [codigo, setCodigo] = useState('');
    //const [nome, setNome] = useState('');
    //const [imagem, setImagem] = useState('');

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
const {name,value} = event.target;

setAvatar({...avatar, [name]: value})
    }

    useEffect(() => {
        if (id) {
        let avatar = AvatarService.buscarPorId(id);
        if (avatar) {setAvatar(avatar);}

           // setCodigo(avatar && avatar?.id ? avatar?.id : '');
            //setNome(avatar ? avatar?.nome : '');
           // setImagem(avatar ? avatar?.imagem : '');

        }
    }, []);

        function salvar(event: any) {
        event.preventDefault(); // nesta condiçoes perderemos os dados se nao quardarmos ela em algum local, 
        //neste projeto foi no AvatarService mas podemos fazer de forma direta no NestJS;

        //let avatar: Avatar = {
         //   nome: nome,
         //   imagem: imagem
        //};
        if (avatar) {AvatarService.salvar(avatar);}
        
        navigate('/avatar')
    }


    return(
        <>
        <Link to={'/avatar'}> Seus avatares </Link>
        <Link to={'/'}> Home </Link>
        
        <h1>Pagina Avatar Cadastro</h1>

    <div>
            <form onSubmit={salvar}>

            <label> Nome </label>
            <input type='text' name='nome' value={avatar.nome} onChange={valueChange} />

            <label> Avatar (imagem) </label>
            <input type='text' name='imagem' value={avatar.imagem} onChange={valueChange}/>

            <button > Salvar </button>

            </form>
        </div> 

        </>
    )
}