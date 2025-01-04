import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserResearch } from './entities/user-research.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserResearch])],
})
export class UsersModule {}
