import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ShipType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  baseAttack: number;

  @Column()
  baseDefense: number;

  @Column()
  baseSpeed: number;

  @Column()
  baseCapacity: number;

  @Column()
  baseFuelConsumption: number;

  @Column('json')
  cost: {
    metal: number,
    crystal: number,
    deuterium: number,
    energy: number
  };

  @Column()
  researchRequirementId: number;
}
