
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState();
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
      id: id,
      descricao: descricao
    };

    axios.put("http://localhost:3100/tarefa", tarefa).then(() => {
      buscar();
    });
  }

  function editar(id) {
    axios.get("http://localhost:3100/tarefa/" + id).then((resultado) => {
      setId(resultado.data.id);
      setDescricao(resultado.data.descricao)

    });
  }

  function excluir(id) {
    axios.delete("http://localhost:3100/tarefa/" + id).then(() => {
      buscar()
    })
  }

  return (
    <div className="container">
      <h3> Formulario </h3>

      <form onSubmit={(event) => salvar(event)}>
        <div className="mb-3">
          <label for="form-label" className="form-label">Descrição</label>
          <input type="text" className="form-control" value={descricao} onChange={(event) => setDescricao(event.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary" >Salvar</button>
      </form>

      <h3> Tarefas </h3>
      <div>
        <table className="table">

          <thead>
            <tr>
              <td> tarefa </td>
              <td>
              </td>
            </tr>
          </thead>
          <tbody>
            {
              listaTarefa.map((tarefa, index) => (
                <tr key={index}>
                  <td>{tarefa.descricao}</td>
                  <td>
                    <button className="botaoEditar" onClick={() => editar(tarefa.id)}>Editar</button>
                  </td>
                  <td>
                    <button className="botaoExcluir" onClick={() => excluir(tarefa.id)}>Excluir</button>
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
