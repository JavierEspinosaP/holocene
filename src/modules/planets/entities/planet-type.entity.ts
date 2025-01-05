import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Planet } from './planet.entity';

@Entity()
export class PlanetType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json')
  resourceModifiers: {
    metal: number,
    crystal: number,
    deuterium: number
  };

  @Column('json')
  habitability: {
    temperatureRange: [number, number],
    sizeRange: [number, number],
    gravity: number,
    atmosphere: string
  };

  @Column('json')
  specialFeatures: {
    energyProduction?: number,
    researchBonus?: number,
    defenseBonus?: number
  };

  @OneToMany(() => Planet, planet => planet.type)
  planets?: Planet[];
}
