
import './global.css'

import style from './App.module.css'
import CardPerson from './components/CardPerson'
//import {CardPerson} from './components/CardPerson' - exportação sem o default
export function App() {

  return (
   <div className={style.container}>
    <CardPerson></CardPerson>
    </div>
  )
}

