import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SousChapitre {
  @PrimaryGeneratedColumn()
  idSousChapitre: number;

  @Column()
  Nom: string;

  @Column()
  Type: string;

  @Column()
  Valeur: string;
}