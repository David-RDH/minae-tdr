import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tdr } from './Tdr';

@Entity()
export class Utilisateurs {
  @PrimaryGeneratedColumn()
  idUtilisateurs: number;

  @Column()
  Email: string;

  @Column()
  Password: string;

  @Column()
  Nom: string;

  @Column()
  Prenom: string;

  @OneToMany(() => Tdr, tdr => tdr.utilisateur)
  tdrs: Tdr[];
}