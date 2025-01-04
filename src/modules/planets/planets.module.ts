import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from './entities/planet.entity';
import { Moon } from './entities/moon.entity';
import { SolarSystem } from './entities/solar-system.entity';
import { Universe } from './entities/universe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Planet, Moon, SolarSystem, Universe])],
})
export class PlanetsModule {}
