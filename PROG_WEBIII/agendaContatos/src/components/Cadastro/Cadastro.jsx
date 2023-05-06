import React from "react";
import {Link} from 'react-router-dom'
import style from "../App.module.css";

export function Cadastro() {
  return (
    <div  className={style.cadastro}>
      <h1 className={style.title}>Cadastro Contatos</h1>
            <form >
            <p> Nome </p>
            <input type='text' name='nome' className={style.input}/>

            <p> Avatar (imagem) </p>
            <input type='text' name='imagem' className={style.input}/>

            <p> Numero </p>
            <input type='text' name='numero' className={style.input}/>

            <button  className={style.buttom}> Salvar </button> <Link to="/">Voltar</Link>
            </form>
        </div>
  );
}