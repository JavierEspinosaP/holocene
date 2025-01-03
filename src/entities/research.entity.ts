import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ResearchRequirement } from './research-requirement.entity';
import { UserResearch } from './user-research.entity';

@Entity()
export class Research {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json')
  costs: {
    metal: number,
    crystal: number,
    deuterium: number,
    energy: number
  }[];

  @Column('json')
  benefits: {
    attack?: number,
    defense?: number,
    speed?: number,
    capacity?: number,
    production?: number
  }[];

  @OneToMany(() => ResearchRequirement, requirement => requirement.research)
  requirements: ResearchRequirement[];

  @OneToMany(() => UserResearch, userResearch => userResearch.research)
  userResearches: UserResearch[];
}
