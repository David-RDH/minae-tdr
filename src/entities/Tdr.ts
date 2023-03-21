import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Utilisateurs } from './Utilisateurs';
import { Chapitre } from './Chapitre';

@Entity()
export class Tdr {
  @PrimaryGeneratedColumn()
  idTdr: number;

  @Column()
  Nom: string;

  @ManyToOne(() => Utilisateurs, utilisateur => utilisateur.tdrs)
  utilisateur: Utilisateurs;

  @OneToMany(() => Chapitre, chapitre => chapitre.tdr)
  chapitres: Chapitre[];
}
