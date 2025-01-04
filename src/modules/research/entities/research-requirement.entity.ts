import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BuildingType } from '../../buildings/entities/building-type.entity';
import { Research } from './research.entity';

@Entity()
export class ResearchRequirement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BuildingType, buildingType => buildingType.researchRequirements)
  buildingType: BuildingType;

  @ManyToOne(() => Research)
  research: Research;

  @Column()
  requiredLevel: number;
}
