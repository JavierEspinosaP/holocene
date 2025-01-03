import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Alliance } from './entities/alliance.entity';
import { BuildingType } from './entities/building-type.entity';
import { Building } from './entities/building.entity';
import { Contract } from './entities/contract.entity';
import { DefenseType } from './entities/defense-type.entity';
import { Defense } from './entities/defense.entity';
import { Era } from './entities/era.entity';
import { Fleet } from './entities/fleet.entity';
import { Moon } from './entities/moon.entity';
import { Planet } from './entities/planet.entity';
import { ResearchRequirement } from './entities/research-requirement.entity';
import { Research } from './entities/research.entity';
import { ResourceType } from './entities/resource-type.entity';
import { Resource } from './entities/resource.entity';
import { ShipType } from './entities/ship-type.entity';
import { Ship } from './entities/ship.entity';
import { SolarSystem } from './entities/solar-system.entity';
import { Transaction } from './entities/transaction.entity';
import { Universe } from './entities/universe.entity';
import { UserResearch } from './entities/user-research.entity';
import { User } from './entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || 'secret',
      database: process.env.DB_DATABASE || 'holocene',
      entities: [
        Alliance,
        BuildingType,
        Building,
        Contract,
        DefenseType,
        Defense,
        Era,
        Fleet,
        Moon,
        Planet,
        ResearchRequirement,
        Research,
        ResourceType,
        Resource,
        ShipType,
        Ship,
        SolarSystem,
        Transaction,
        Universe,
        UserResearch,
        User,
      ],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
