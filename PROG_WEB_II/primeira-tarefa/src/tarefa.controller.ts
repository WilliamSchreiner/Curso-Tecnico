import { Body, Controller, Get, Param, Put } from "@nestjs/common";

@Controller()
export class tarefaController { 
    
    tarefasList = [];

    @Get('tarefa')
    listaTarefa() {
        const tarefa1 = {nome: "tarefa 01", id: Math.random().toString(36)};
        const tarefa2 = {nome: "tarefa 02", id: Math.random().toString(36)};

        this.tarefasList.push(tarefa1, tarefa2);

        return [this.tarefasList];
    }

    @Get("/tarefa/:id")
    apenasUmaTarefa(@Param() params){
        console.log("params ", params.id);
        return {nome: this.tarefasList.filter( tarefa => tarefa.id == "/tarefa/:id") }
    }

    @Put("tarefa")
    receberTarefa(@Body() tarefa) {
        console.log("tarefa", tarefa);
        tarefa.nome = this.tarefasList.filter( tarefa => tarefa.id == "/tarefa/:id") + ` (recebido)`;
        return tarefa;
    }
}
   
   


