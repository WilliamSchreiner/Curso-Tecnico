import React from "react";

import styleContato from "./CardContatos.module.css";

export function CardContato({  avatar, name, numero}) {
  return (
    <div className={styleContato.card}>
      <img className={styleContato.avatar} src={avatar} alt="Avatar" />
      <p className={styleContato.p1}>{name}</p>
      <p className={styleContato.p2}>{numero}</p>
      
    </div>
  );
}