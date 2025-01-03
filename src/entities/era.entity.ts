import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Era {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  unlockRequirements: string;

  @Column('json')
  availableBuildings: number[];

  @Column('json')
  availableShips: number[];

  @Column('json')
  availableDefenses: number[];

  @OneToMany(() => User, user => user.era)
  users: User[];
}
