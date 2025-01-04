import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Alliance } from '../../alliances/entities/alliance.entity';
import { Planet } from '../../planets/entities/planet.entity';
import { Contract } from '../../contracts/entities/contract.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';
import { UserResearch } from './user-research.entity';
import { Fleet } from '../../ships/entities/fleet.entity';
import { Era } from '../../eras/entities/era.entity';

export enum Role {
  USER = 'user',
  ADMIN = 'admin'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @Column({ default: 0 })
  credits: number;

  @Column({ default: 0 })
  experience: number;

  @ManyToOne(() => Alliance, alliance => alliance.members)
  @JoinColumn()
  alliance: Alliance;

  @OneToMany(() => Planet, planet => planet.owner)
  planets: Planet[];

  @OneToMany(() => Contract, contract => contract.initiator)
  initiatedContracts: Contract[];

  @OneToMany(() => Contract, contract => contract.receiver)
  receivedContracts: Contract[];

  @OneToMany(() => Transaction, transaction => transaction.user, { cascade: true })
  transactions: Transaction[];

  @OneToMany(() => UserResearch, userResearch => userResearch.user)
  researches: UserResearch[];

  @OneToMany(() => Fleet, fleet => fleet.owner)
  fleets: Fleet[];

  @ManyToOne(() => Era, era => era.users)
  era: Era;
}
