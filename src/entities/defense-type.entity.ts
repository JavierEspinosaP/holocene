import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DefenseType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  baseAttack: number;

  @Column()
  baseDefense: number;

  @Column()
  baseRange: number;

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
