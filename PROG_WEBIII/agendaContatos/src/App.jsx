import style from "./App.module.css";

import { CardPerson } from "./components/User/CardPerson";
import { CardContato } from "./components/Contato/CardContatos";
export function App() {

  return (
    <div className={style.container}>

      <CardPerson
    cover="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    avatar="https://github.com/WilliamSchreiner.png"
    name="William Schreiner"
    office= 'Jovem Aprendiz desenvovedor'/>

<div className={style.contatos}>
    <div  className={style.cadastro}>
      <h1 className={style.title}>Cadastro Contatos</h1>
            <form >
            <p> Nome </p>
            <input type='text' name='nome' className={style.input}/>

            <p> Avatar (imagem) </p>
            <input type='text' name='imagem' className={style.input}/>

            <p> Numero </p>
            <input type='text' name='numero' className={style.input}/>

            <button > Salvar </button>
            </form>
        </div> 

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
  );
}
