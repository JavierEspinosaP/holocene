import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resource } from './resource.entity';
import { Contract } from './contract.entity';

@Entity()
export class ResourceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  baseValue: number;

  @Column()
  isTradable: boolean;

  @OneToMany(() => Resource, resource => resource.type)
  resources: Resource[];

  @OneToMany(() => Contract, contract => contract.terms.resourceType)
  contracts: Contract[];
}
