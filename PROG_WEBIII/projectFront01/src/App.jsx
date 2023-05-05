
import './global.css'

import style from './App.module.css'
import CardPerson from './components/CardPerson'
//import {CardPerson} from './components/CardPerson' - exportação sem o default
export function App() {
  const listStack = [
    { Tag: "Sextou!", color: "#f702f7" },
    { Tag: "Cavalo", color: "#f78502"},
    { Tag: "Impermeavel" , color: "#33f702"},
    ,74231
  ];
  return (
   <div className={style.container}>
    <CardPerson  stacks={listStack}></CardPerson>
    </div>
  )
}

