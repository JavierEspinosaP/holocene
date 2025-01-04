import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Planet } from './planet.entity';
import { Building } from '../../buildings/entities/building.entity';

@Entity()
export class Moon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  size: number;

  @Column()
  discoveryDate: Date;

  @ManyToOne(() => Planet, planet => planet.moons)
  planet: Planet;

  @OneToMany(() => Building, building => building.moon)
  buildings: Building[];
}
