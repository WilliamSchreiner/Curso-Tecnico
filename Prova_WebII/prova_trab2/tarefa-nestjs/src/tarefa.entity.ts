import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'tarefa'})
export class Exercicio {

    @PrimaryGeneratedColumn({name: 'codigo'})
    codigo?: number;

    @Column({name: 'nome', type: 'varchar',length: '100'})
    nome?: string;

    @Column({name: 'serie', type: 'varchar',length: '5'})
    serie?: string;

    @Column({name: 'repeticao', type: 'varchar',length: '5'})
    repeticao?: string;

    @Column({name: 'feito', type: 'boolean'})
    feito?: string;
}