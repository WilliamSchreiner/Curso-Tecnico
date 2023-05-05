import style from "./App.module.css";

import { CardPerson } from "./components/CardPerson";

export function App() {
  const listStack = [
    { Tec: "Sextou!", color: "#3d3d3d" },
    { Tec: "Cavalo" , color: "#D18C06" },
    { Tec: "Impermeavel", color: "#DE39E5"  }
  ];

  return (
    <div className={style.container}>
      <CardPerson
    cover="https://images.unsplash.com/photo-1536227661368-deef57acf708?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    avatar="https://github.com/WilliamSchreiner.png"
    name="William Schreiner"
    office= 'Jovem Aprendiz desenvovedor'
    stacks={listStack}
      />
    </div>
  );
}
