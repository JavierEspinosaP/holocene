import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlliancesModule } from './modules/alliances/alliances.module';
import { BuildingsModule } from './modules/buildings/buildings.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { DefensesModule } from './modules/defenses/defenses.module';
import { ErasModule } from './modules/eras/eras.module';
import { ResearchModule } from './modules/research/research.module';
import { ResourcesModule } from './modules/resources/resources.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ShipsModule } from './modules/ships/ships.module';
import { PlanetsModule } from './modules/planets/planets.module';

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
      ],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    BuildingsModule,
    DefensesModule,
    ShipsModule,
    PlanetsModule,
    ResourcesModule,
    ResearchModule,
    TransactionsModule,
    AlliancesModule,
    ContractsModule,
    ErasModule,
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
