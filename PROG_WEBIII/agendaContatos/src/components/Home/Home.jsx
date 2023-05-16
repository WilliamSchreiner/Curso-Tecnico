//import style
import style from "./Home.module.css";
//imports cards
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
//imports Icons
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline, IoAdd } from "react-icons/io5";
//import Axios e React
import axios from "axios";
import { useState, useEffect } from "react";

import  {PersonService} from "./Home.service"

export function Home() {
   //list person
   const [persons, setPersons] = useState([]);
   //caracteristicas person
   const [name, setName] = useState("");
   const [avatar, setAvatar] = useState("");
   const [cell, setCell] = useState("");



   useEffect(() => {
    setPersons(PersonService.list)
}, []);


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

    if (person) {PersonService.salvar(person);}
    console.log(person);

  }
  function Deletar(id) {
    event.preventDefault();
    if(id) {PersonService.deletar(id)}
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
      <div>
        <CardContato key={person.id}
    avatar= {person.avatar}
    name= {person.name}
    numero= {person.cell} />
    <button  className={style.buttom} onClick={Deletar(person.id)}> <BsFillTrash3Fill /> </button>
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