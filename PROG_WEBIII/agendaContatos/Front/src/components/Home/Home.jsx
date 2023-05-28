//import style
import style from "./Home.module.css";
//imports cards
import { CardPerson } from "../User/CardPerson";
import { CardContato, Delete } from "../Contato/CardContatos";
//imports Icons
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";

import { useEffect, useState } from "react";
import { api, server } from "../../api/axios";


export function Home() {
  
   let [persons, setPersons] = useState([]);
 
   useEffect(() => {
    Load()
}, []);

  async function Load() {
    const temp = await server.get("user/");
    console.log(temp)

    setPersons(temp.data);
    
    console.log(persons);
  }

  async function Adicionar(){
    event.preventDefault();
    console.log("função insert");

    const resultAPI = await api.get("/");

    const user = resultAPI.data.results[0];

    const nomeCompleto = `${user.name.first} ${user.name.last}`;
    const avatar = user.picture.large;
    const cell = user.cell;
    
    const resultSERVER = await server.post("user/", {
    name: nomeCompleto,
    avatar: avatar,
    celular: cell,
    });
    Load();
  }

  async function Deletar(id) {
  event.preventDefault();

  Delete();
  Load();
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
              <button  className={style.buttom} onClick={Deletar}> <BsFillTrash3Fill /> </button>
              
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
              persons.map((person, index) => (
                <CardContato key= {index} 
                avatar= {person.avatar}
                name= {person.name}
                celular= {person.celular}

                id= {person.id}
                />

              ))
            }

  </div> 
</div>
    

    </div>
    </div>
</div>    
  );
}