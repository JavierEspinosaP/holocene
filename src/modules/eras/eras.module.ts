import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Era } from './entities/era.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Era])],
})
export class ErasModule {}
