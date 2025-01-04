import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Defense } from './entities/defense.entity';
import { DefenseType } from './entities/defense-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Defense, DefenseType])],
})
export class DefensesModule {}
