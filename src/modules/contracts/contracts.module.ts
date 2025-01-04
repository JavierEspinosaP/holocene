import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from './entities/contract.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contract])],
})
export class ContractsModule {}
