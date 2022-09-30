import { Module } from '@nestjs/common';
import { TiersService } from './tiers.service';
import { TiersController } from './tiers.controller';
import { TiersRepository } from 'src/repository/tiers.repository';
import { LoanRepository } from 'src/repository/loan.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TiersController],
  imports: [TypeOrmModule.forFeature([TiersRepository, LoanRepository])],
  providers: [TiersService],
})
export class TiersModule {}
