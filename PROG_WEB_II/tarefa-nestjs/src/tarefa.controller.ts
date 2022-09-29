import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";

@Controller()
export class tarefaController {

    tarefaLista = [];

    @Get("/tarefa")
        listaTarefa(){
            return this.tarefaLista;
        }
    
    @Put("/tarefa")
    salvarTarefa(@Body() tarefa){
        // @Body é a requisiçao de algum dados inserido dentro do site
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if(index >= 0) {
            this.tarefaLista[index].descricao = tarefa.descricao;
        } else {
            this.tarefaLista.push(tarefa);
            return "ok";
        }        
    }

    @Get("/tarefa/:codigo")
    buscarPorCod(@Param() parametro){
        // @param é o objeto como algum parametro, por meio disso pode requisitar informaçoes no final da URL.  Ex: localhost:3100/tarefa/12  12=codigo
        console.log(parametro)
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        return tarefa;
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro){
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        this.tarefaLista.splice(index, 1)
        return "excluido"
    }
}

