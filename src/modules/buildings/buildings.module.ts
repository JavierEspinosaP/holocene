import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './entities/building.entity';
import { BuildingType } from './entities/building-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Building, BuildingType])],
})
export class BuildingsModule {}
