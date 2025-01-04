import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ship } from './entities/ship.entity';
import { ShipType } from './entities/ship-type.entity';
import { Fleet } from './entities/fleet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ship, ShipType, Fleet])],
})
export class ShipsModule {}
