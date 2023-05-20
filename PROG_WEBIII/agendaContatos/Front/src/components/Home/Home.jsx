//import style
import style from "./Home.module.css";
//imports cards
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
//imports Icons
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";

import { useEffect, useState } from "react";
import { api, server } from "../../api/axios";


export function Home() {
<<<<<<< HEAD:PROG_WEBIII/agendaContatos/Front/src/components/Home/Home.jsx
=======
   //list person
   const [persons, setPersons] = useState([]);
   //caracteristicas person
   const [name, setName] = useState("");
   const [avatar, setAvatar] = useState("");
   const [cell, setCell] = useState("");
   const [cache, setCache] = useState("");

   const table = "person"

>>>>>>> f857754e59bb8ec1fcd028ce604e85200c23d9e3:PROG_WEBIII/agendaContatos/src/components/Home/Home.jsx

   useEffect(() => {
    
}, []);


<<<<<<< HEAD:PROG_WEBIII/agendaContatos/Front/src/components/Home/Home.jsx
  async function Adicionar(){
    event.preventDefault();
    console.log("função add");

    const resultAPI = await api.get("/");

    const user = resultAPI.data.results[0];

    const nomeCompleto = `${user.name.first} ${user.name.last}`;
    const avatar = `${user.picture.large}`;
    const cell = `${user.cell}`;
    

    setDataRequest(nomeFull);
    const resultSERVER = await server.post("user/", {
      name: nomeCompleto,
      imagem: avatar,
      celular: cell,
    });

    console.log(resultSERVER);

=======
  async function  Adicionar(){
     event.preventDefault();
     const data = await axios.get("https://randomuser.me/api/");

    setName(data.data.results[0].name.first);
    setAvatar(data.data.results[0].picture.large);
    setCell(data.data.results[0].cell);

    let person = {
  
      name: name,
      avatar: avatar,
      cell: cell
    };

    if (person) {PersonService.salvar(table, person);}
    console.log(person);

  }

  function Cache(id) {
    event.preventDefault();
    if(id) {setCache(id)}
  }

  function Deletar() {
    event.preventDefault();
>>>>>>> f857754e59bb8ec1fcd028ce604e85200c23d9e3:PROG_WEBIII/agendaContatos/src/components/Home/Home.jsx
  }

  function Deletar(id) {

  }

  function Cache(id) {
setCache(id)
  }
  



  return (
    <div className={style.container}>

    <CardPerson
    cover="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    avatar="https://github.com/WilliamSchreiner.png"
    name="William Schreiner"
    office= 'Jovem Aprendiz desenvovedor'/>

<div className={style.contatos}>
<div  className={style.controles}>
  <form >
      
            <div className={style.headerContatos}>
            <h1 className={style.title}>Meus contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom} onClick={Adicionar}> <IoAdd /> </button>
              <button  className={style.buttom}> <IoPencil /> </button>
<<<<<<< HEAD:PROG_WEBIII/agendaContatos/Front/src/components/Home/Home.jsx
              <button  className={style.buttom} onClick={Deletar(cache)}> <BsFillTrash3Fill /> </button>
=======
              <button  className={style.buttom} onClick={Deletar()}> <BsFillTrash3Fill /> </button>
>>>>>>> f857754e59bb8ec1fcd028ce604e85200c23d9e3:PROG_WEBIII/agendaContatos/src/components/Home/Home.jsx
              
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            
            <input type='text' name='pesquisa' className={style.inputPesquisa} placeholder="Busque por nome ou pelos dados do contato... "/>
            </div>
            
            </form>
        </div>

<div className={style.listaContatos}>

<div className={style.listaCatalogo}>
  <h1 className={style.letraCatalogo}>All</h1>
  <div className={style.contatoCatalogo}>
  {
              persons.map(person => (
<<<<<<< HEAD:PROG_WEBIII/agendaContatos/Front/src/components/Home/Home.jsx
      <div>
        <CardContato key={person.id}
        avatar= {person.avatar}
        name= {person.name}
        numero= {person.cell}/>
=======
      <div key={person.id}>
        <CardContato
    avatar= {person.avatar}
    name= {person.name}
    numero= {person.cell}  
    //onClick={Cache(person.id)}
    />
   
>>>>>>> f857754e59bb8ec1fcd028ce604e85200c23d9e3:PROG_WEBIII/agendaContatos/src/components/Home/Home.jsx
    </div>
              ))
            }


  </div> 
</div>
    

    </div>
    </div>
</div>    
  );
}