import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tdr } from './Tdr';

@Entity()
export class Chapitre {
  @PrimaryGeneratedColumn()
  idChapitre: number;

  @Column()
  Nom: string;

  @Column()
  Contenu: string;

  @ManyToOne(() => Tdr, tdr => tdr.chapitres)
  tdr: Tdr;
}