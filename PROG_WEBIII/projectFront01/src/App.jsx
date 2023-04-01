
import './global.css'

import style from './App.module.css'

export function App() {

  return (
   <div className={style.container}>
    <div className={style.box}>  
      <div>
      <img  className={style.cover} src="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></img>
      <h3 >Amilto Smaniotto</h3>
      <h4 >Desempregado</h4>
    </div>
    <div>
      <h5 >#Cria</h5>
      <h5  >#Cavalo</h5>
    </div>
  </div>  
</div>
  )
}

