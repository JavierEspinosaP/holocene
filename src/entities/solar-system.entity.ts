import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Universe } from './universe.entity';
import { Planet } from './planet.entity';

@Entity()
export class SolarSystem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: number;

  @Column()
  name: string;

  @ManyToOne(() => Universe, universe => universe.systems)
  universe: Universe;

  @OneToMany(() => Planet, planet => planet.system)
  planets: Planet[];
}
