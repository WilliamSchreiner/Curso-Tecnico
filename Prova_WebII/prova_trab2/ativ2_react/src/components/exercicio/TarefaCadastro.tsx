import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export interface Tarefa {
        codigo?: string;
        nome: string;
        serie?: string;
        repeticao?: string;
        feito?: boolean
    };

export function TarefaCadastro(){

    const {id} = useParams();

    const navegate = useNavigate();

    const [codigo, setCodigo] = useState();
    const [nome, setNome] = useState('');
    const [serie, setSerie] = useState('');
    const [repeticao, setRepeticao] = useState('');
    const [feito, setFeito] = useState(false);

    const [tarefaLista, setTarefaLista] = useState([]);

    

    useEffect(() => {
        if (id) {
        editar(id)

buscar()
        }
    }, []);

    function salvar(event: any){
        event.preventDefault()

        let tarefa = {
            codigo: codigo,
            nome: nome,
            serie: serie,
            repeticao: repeticao,
            feito: feito
          };
        console.log(tarefa)
        axios.put("http://localhost:3100/tarefa", tarefa).then(() => {
            buscar();
            
          });
        navegate('/tarefa')
    }

    function buscar() {
        axios.get("http://localhost:3100/tarefa").then(resultado => {
          console.log(resultado.data);
          setTarefaLista(resultado.data);
        })
    }

    // funçoes

    function editar(codigo: any) {
        axios.get("http://localhost:3100/tarefa/" + codigo).then((resultado) => {
          setCodigo(resultado.data.codigo);
          setNome(resultado.data.nome);
          setSerie(resultado.data.serie);
          setRepeticao(resultado.data.repeticao);
          setFeito(resultado.data.feito);

          buscar();
        });
    }




    return(
        <>

        <h1 className="h1_exercicio">Cadastrar Exercício:</h1>

        <form onSubmit={salvar}>
            <div className="mb-3">
            <label className="form-label">Exercicio:</label>
            <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Series:</label>
            <input type="text" className="form-control" value={serie} onChange={(event) => setSerie(event.target.value)}/>
        </div>
        <div className="mb-3"> 
            <label className="form-label">Repetições:</label>
            <input type="text" className="form-control" value={repeticao} onChange={(event) => setRepeticao(event.target.value)}/>
        </div>

        <button className="btn btn-success"> Salvar </button>
        </form>

        </>
    )
}

