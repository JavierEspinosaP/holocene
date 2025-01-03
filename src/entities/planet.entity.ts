import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Building } from './building.entity';
import { Resource } from './resource.entity';
import { Moon } from './moon.entity';
import { SolarSystem } from './solar-system.entity';
import { Fleet } from './fleet.entity';
import { Defense } from './defense.entity';

@Entity()
export class Planet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: number; 

  @ManyToOne(() => SolarSystem, system => system.planets)
  system: SolarSystem;

  @Column()
  size: number;

  @Column()
  temperature: number;

  @Column({ default: 0 })
  population: number;

  @Column({ default: 0 })
  availableEnergy: number;

  @Column({ default: 0 })
  availableArea: number;

  @ManyToOne(() => User, user => user.planets)
  owner: User;

  @OneToMany(() => Building, building => building.planet)
  buildings: Building[];

  @OneToMany(() => Resource, resource => resource.planet, { cascade: true })
  resources: Resource[];

  @OneToMany(() => Moon, moon => moon.planet)
  moons: Moon[];

  @OneToMany(() => Fleet, fleet => fleet.origin)
  fleets: Fleet[];

  @OneToMany(() => Defense, defense => defense.planet)
  defenses: Defense[];
}
