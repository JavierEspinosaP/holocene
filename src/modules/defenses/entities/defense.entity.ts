import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Planet } from '../../planets/entities/planet.entity';
import { DefenseType } from './defense-type.entity';

@Entity()
export class Defense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  attackPower: number;

  @Column()
  defensePower: number;

  @Column()
  range: number;

  @ManyToOne(() => Planet, planet => planet.defenses)
  planet: Planet;

  @ManyToOne(() => DefenseType)
  type: DefenseType;
}
