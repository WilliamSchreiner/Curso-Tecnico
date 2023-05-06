import style from "./Home.module.css";
import { CardPerson } from "../User/CardPerson";
import { CardContato } from "../Contato/CardContatos";
import {BsFillTrash3Fill } from "react-icons/bs";
import {IoPencil, IoSearchOutline } from "react-icons/io5";
export function Home() {

  
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
            <h1 className={style.title}>Contatos</h1>
              <div  className={style.buttons}>
              <button  className={style.buttom}> + </button>
              <button  className={style.buttom}> <IoPencil /> </button>
              <button  className={style.buttom}> <BsFillTrash3Fill /> </button>
            </div>
            </div>
            
            <div className={style.pesquisa}>
            <button  className={style.buttomPesquisa}> <IoSearchOutline /> </button>
            <input type='text' name='pesquisa' className={style.inputPesquisa}/>
            </div>
            
            </form>
        </div>
    <div className={style.listaContatos}>
    <CardContato
    avatar="https://randomuser.me/api/portraits/men/58.jpg"
    name="Jayden Wright"
    numero= '(41) 9839-3029'/>

    <CardContato
    avatar="https://avatars.githubusercontent.com/u/110572740?v=4"
    name="Amilto Cavalão"
    numero= '(69) 8063-1056)'/>
    </div>
    </div>
</div>    
  );
}