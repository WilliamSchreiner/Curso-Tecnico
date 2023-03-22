import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common";
import { ExercicioService } from "./tarefa.service";
import { Exercicio } from "./tarefa.entity";

@Controller()
export class ExercicioController {

    constructor(
        private exercicioService: ExercicioService
    ) {}

    @Get("/tarefa")
       async listaTarefa(): Promise<Exercicio[]> {
            return await this.exercicioService.findAll();
        }
    
    @Put("/tarefa")
    async salvarTarefa(@Body() tarefa) {
        await this.exercicioService.salvar(tarefa);
            return "ok";
               
    }

    @Get("/tarefa/:codigo")
    async buscarPorCodigo(@Param() parametro): Promise<Exercicio> {
        console.log(parametro.codigo); 
        return await this.exercicioService.findById(parametro.codigo);
    }

    @Delete("/tarefa/:codigo")
    async excluirTarefa(@Param() parametro){
        await this.exercicioService.excluir(parametro.codigo);
        return "excluido"
    }
}

