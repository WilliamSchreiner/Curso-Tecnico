import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ExercicioController } from './tarefa.controller';
import { Exercicio } from './tarefa.entity';
import {ExercicioService } from './tarefa.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'tarefa',
      entities: [
        Exercicio // entidades/classes
      ],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Exercicio])
  ],
  controllers: [AppController,ExercicioController],
  providers: [AppService, ExercicioService],
})
export class AppModule {}
