import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Tarefa } from "./TarefaCadastro";
export function TarefaLista(){


    const [tarefaLista, setTarefaLista] = useState<Tarefa[]>();
    const navegate = useNavigate();

    useEffect(() => {
        buscar();
        
      }, [])
    

    function excluir(codigo: any) {
        axios.delete("http://localhost:3100/tarefa/" + codigo).then((resultado) => {
        buscar()
        })
    }

    function buscar() {
        axios.get("http://localhost:3100/tarefa").then(resultado => {
          console.log(resultado.data);
          setTarefaLista(resultado.data);
        })
    }

    return(
        <>

      <h1 className="h1_table">Lista de Exercícios:</h1>


     <div className="container">
        <table className="table">

          <thead>
            <tr>
              <td> Exercício </td>
              <td> Série </td>
              <td> Repetição </td>
            </tr>
          </thead>
          <tbody>
            {
              tarefaLista?.map((tarefa, index) => (
                <tr key={index}>
                  <td>{tarefa.nome}</td>
                  <td>{tarefa.serie}</td>
                  <td>{tarefa.repeticao}</td>

                  <td>
                    <button className="botaoEditar" onClick={() => navegate('/tarefa/cadastro/' + tarefa.codigo)}>Editar</button>
                  </td>
                  <td>
                    <button className="botaoExcluir" onClick={() => excluir(tarefa.codigo)}>Excluir</button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
        <div className="link_container">
          <Link to={'/tarefa/cadastro'} className='link_cadastro'> Cadastrar um exercicio </Link>
        </div>
      </>
    )
}