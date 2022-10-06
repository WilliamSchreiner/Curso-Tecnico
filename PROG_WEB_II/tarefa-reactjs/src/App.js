
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [codigo, setCodigo] = useState();
  const [descricao, setDescricao] = useState();
  const [listaTarefa, setListaTarefa] = useState([]);

  useEffect(() => {
    buscar();
  }, [])

  function buscar() {
    axios.get("http://localhost:3100/tarefa").then(resultado => {
      console.log(resultado.data);
      setListaTarefa(resultado.data);
    })
  }

  function salvar(event) {
    event.preventDefault();

    let tarefa = {
      codigo: codigo,
      descricao: descricao
    };

    axios.put("http://localhost:3100/tarefa", tarefa).then(() => {
      buscar();
    });
  }

  function editar(codigo) {
    axios.get("http://localhost:3100/tarefa/" + codigo).then((resultado) => {
      setCodigo(resultado.data.codigo);
      setDescricao(resultado.data.descricao);
      buscar();
    });
  }

  function excluir(codigo) {
    axios.delete("http://localhost:3100/tarefa/" + codigo).then((resultado) => {
      console.log(codigo);
    buscar()
    })
  }

  return (
    <div className="container">
      <h3> Formulario </h3>

      <form id="form" onSubmit={(event) => salvar(event)}>
        <div className="mb-3">
          <label for="form-label" className="form-label">Descrição</label>
          <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)} />
        </div>

        <button type="submit" id="botaoSalvar" className="btn btn-primary" >Salvar</button>
      </form>

      <h3> Tarefas </h3>
      <div>
        <table className="table">

          <thead>
            <tr>
              <td> tarefa </td>
            </tr>
          </thead>
          <tbody>
            {
              listaTarefa.map((tarefa, index) => (
                <tr key={index}>
                  <td>{tarefa.descricao}</td>
                  <td>
                    <button className="botaoEditar" onClick={() => editar(tarefa.codigo)}>Editar</button>
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

    </div>

  );
}

export default App;
