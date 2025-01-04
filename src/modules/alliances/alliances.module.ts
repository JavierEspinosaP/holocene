import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alliance } from './entities/alliance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alliance])],
})
export class AlliancesModule {}
