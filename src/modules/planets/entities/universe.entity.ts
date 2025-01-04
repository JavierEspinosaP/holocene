import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SolarSystem } from './solar-system.entity';

@Entity()
export class Universe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  speed: number; // Velocidad del universo (1x, 2x, etc)

  @OneToMany(() => SolarSystem, system => system.universe)
  systems: SolarSystem[];
}
