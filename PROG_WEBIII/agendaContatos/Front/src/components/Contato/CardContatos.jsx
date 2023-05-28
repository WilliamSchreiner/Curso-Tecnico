import React from "react";
import { server } from "../../api/axios";

import styleContato from "./CardContatos.module.css";

export let cache = '';

 export async function Delete() {
  event.preventDefault();

  if(cache ===''){
      console.log('Contato não definido')
  }else{
    console.log("função delete " + cache);
    await server.delete(`user/${cache}`);
  }

  }

export function CardContato({  avatar, name, celular, id}) {

   function Cache(id) {
    cache = id;
    console.log("Cache definido para " + cache);
  }

  return (
    <div className={styleContato.card} onClick={() => {Cache(id)}}>
      <img className={styleContato.avatar} src={avatar} alt="Avatar" />
      <p className={styleContato.p1}>{name}</p>
      <p className={styleContato.p2}>{celular}</p>
      
    </div>
  );
}