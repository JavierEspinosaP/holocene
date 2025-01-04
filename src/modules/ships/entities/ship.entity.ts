import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Fleet } from './fleet.entity';
import { ShipType } from './ship-type.entity';

@Entity()
export class Ship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  attack: number;

  @Column()
  defense: number;

  @Column()
  speed: number;

  @Column()
  capacity: number;

  @Column()
  fuelConsumption: number;

  @ManyToOne(() => Fleet, fleet => fleet.ships)
  fleet: Fleet;

  @ManyToOne(() => ShipType)
  type: ShipType;
}
