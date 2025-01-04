import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Planet } from '../../planets/entities/planet.entity';
import { ResourceType } from './resource-type.entity';

@Entity()
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Planet, planet => planet.resources)
  planet: Planet;

  @ManyToOne(() => ResourceType)
  type: ResourceType;

  @Column()
  amount: number;

  @Column()
  storageCapacity: number;

  @Column()
  productionRate: number;
}
