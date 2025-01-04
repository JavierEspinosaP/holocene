import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Research } from './entities/research.entity';
import { ResearchRequirement } from './entities/research-requirement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Research, ResearchRequirement])],
})
export class ResearchModule {}
