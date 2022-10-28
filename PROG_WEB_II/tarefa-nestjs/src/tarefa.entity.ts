import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tarefa'})
export class Tarefa {

    @PrimaryGeneratedColumn({name: 'codigo'})
    codigo?: number;

    @Column({name: 'descricao', type: 'varchar',length: '100'})
    descricao?: string;
}