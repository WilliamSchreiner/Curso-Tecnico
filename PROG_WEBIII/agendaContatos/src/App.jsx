import style from "./App.module.css";

import { CardPerson } from "./components/User/CardPerson";
import { CardContato } from "./components/Contato/CardContatos";
import { Cadastro } from "./components/cadastro";
export function App() {

  return (
    <div className={style.container}>

      <CardPerson
    cover="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    avatar="https://github.com/WilliamSchreiner.png"
    name="William Schreiner"
    office= 'Jovem Aprendiz desenvovedor'/>

<div className={style.contatos}>
     
     <Cadastro />
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
