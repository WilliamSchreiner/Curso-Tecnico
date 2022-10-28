import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { TarefaService } from "./tarefa.service";
import { Tarefa } from "./tarefa.entity";

@Controller()
export class tarefaController {

    constructor(
        private tarefaService: TarefaService
    ) {}

    @Get("/tarefa")
       async listaTarefa(): Promise<Tarefa[]> {
            return await this.tarefaService.findAll();
        }
    
    @Put("/tarefa")
    async salvarTarefa(@Body() tarefa) {
//@Body é relacionado ao escorpo do site.
        await this.tarefaService.salvar(tarefa);
            return "ok";
               
    }

    @Get("/tarefa/:codigo")
    async buscarPorCodigo(@Param() parametro): Promise<Tarefa> {
        // @param é o objeto como algum parametro, por meio disso pode requisitar informaçoes no final da URL.  Ex: localhost:3100/tarefa/12  12=codigo
        console.log(parametro.codigo); //pega o :codigo da url
        return await this.tarefaService.findById(parametro.codigo);
    }

    @Delete("/tarefa/:codigo")
    async excluirTarefa(@Param() parametro){

        await this.tarefaService.excluir(parametro.codigo);

        return "excluido"
    }
}

