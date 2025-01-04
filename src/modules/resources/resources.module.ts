import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';
import { ResourceType } from './entities/resource-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resource, ResourceType])],
})
export class ResourcesModule {}
