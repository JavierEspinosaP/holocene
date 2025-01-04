import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BuildingType } from './building-type.entity';
import { Planet } from '../../planets/entities/planet.entity';
import { Moon } from '../../planets/entities/moon.entity';

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
