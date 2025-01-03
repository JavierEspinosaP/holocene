import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Alliance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  tag: string;

  @Column({ default: 0 })
  score: number;

  @OneToMany(() => User, user => user.alliance)
  members: User[];
}
