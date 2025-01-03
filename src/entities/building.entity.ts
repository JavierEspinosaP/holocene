import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Planet } from './planet.entity';
import { BuildingType } from './building-type.entity';
import { Moon } from './moon.entity';

@Entity()
export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  level: number;

  @Column()
  constructionTime: number;

  @Column()
  energyCost: number;

  @ManyToOne(() => Planet, planet => planet.buildings, { nullable: true })
  planet: Planet;

  @ManyToOne(() => Moon, moon => moon.buildings, { nullable: true })
  moon: Moon;

  @ManyToOne(() => BuildingType)
  type: BuildingType;
}
