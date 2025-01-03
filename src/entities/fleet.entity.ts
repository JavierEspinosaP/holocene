import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Planet } from './planet.entity';
import { Ship } from './ship.entity';

@Entity()
export class Fleet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  speed: number;

  @Column({ default: 0 })
  attackPower: number;

  @Column({ default: 0 })
  defensePower: number;

  @Column({ default: 0 })
  capacity: number;

  @ManyToOne(() => User, user => user.fleets)
  owner: User;

  @ManyToOne(() => Planet, planet => planet.fleets)
  origin: Planet;

  @ManyToOne(() => Planet, { nullable: true })
  destination: Planet;

  @Column({ type: 'timestamp', nullable: true })
  arrivalTime: Date;

  @OneToMany(() => Ship, ship => ship.fleet)
  ships: Ship[];
}
