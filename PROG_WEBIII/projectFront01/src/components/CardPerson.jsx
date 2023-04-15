import React from "react";
import style from './CardPerson.modulos.css'

//Metodo 1 = função
function CardPerson(){
    return  <div className={style.card}>    
    <img
      src="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Cover"
    />
    <img
      className={style.avatar}
      src="https://github.com/WilliamSchreiner.png"
      alt="Avatar"
    />
    <p className={style.p1}>William Schreiner</p>
    <p className={style.p2}>Jovem Aprendiz desenvovedor</p>
    <CardPerson> </CardPerson>
    <div className={style.stack}>
      <span>#Humano</span>
      <span>#AtéAMorte</span>
      <span>#Sextou!</span>
      <span>#Anão</span>
      <span>#Dando</span>
      <span>#Pirueta</span>
    </div>
  </div>
}
export default Cardperson()

//Metodo 1.1 = função
//export function CardPerson(){
//    return  <p> Componentes </p>
//}

//Metodo 2 = arron function
//const CardPerson = () => {
//    return  <p> Componentes </p>
//}
//export default CardPerson

//metodo 3. = função anonima
//export default () => {
//    return  <p> Componentes </p>
//}

//metodo 3.1 = função anonima
//export default () => <p> Componentes </p>