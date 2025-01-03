import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Building } from './building.entity';
import { ResearchRequirement } from './research-requirement.entity';

@Entity()
export class BuildingType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json')
  constructionCosts: { 
    metal: number, 
    crystal: number, 
    deuterium: number 
  }[];

  @Column('json')
  benefits: {
    production?: number,
    energy?: number,
    storage?: number,
    research?: number
  }[];

  @OneToMany(() => Building, building => building.type)
  buildings: Building[];

  @OneToMany(() => ResearchRequirement, requirement => requirement.buildingType)
  researchRequirements: ResearchRequirement[];
}
