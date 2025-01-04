import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Research } from '../../research/entities/research.entity';

@Entity()
export class UserResearch {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.researches)
  user: User;

  @ManyToOne(() => Research, research => research.userResearches)
  research: Research;

  @Column()
  level: number;

  @Column({ nullable: true })
  completionTime: Date;
}
