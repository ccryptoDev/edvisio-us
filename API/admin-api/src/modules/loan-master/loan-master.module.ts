import { Module } from '@nestjs/common';
import { LoanMasterService } from './loan-master.service';
import { LoanMasterController } from './loan-master.controller';
import { UserBankAccountRepository } from '../../repository/userBankAccounts.repository';
import { UserRepository } from '../../repository/users.repository';
import { CommentsRepository } from '../../repository/comments.repository';
import { LogRepository } from '../../repository/log.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from '../../mail/mail.service';
import { CustomerRepository } from '../../repository/customer.repository';
import { PaymentScheduleRepository } from 'src/repository/paymentSchedule.repository';
import { OutsideService } from '../outside/outside.service';
import { HttpModule } from '@nestjs/axios';
import { LoanRepository } from 'src/repository/loan.repository';

@Module({
  controllers: [LoanMasterController],
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([
      PaymentScheduleRepository,
      CustomerRepository,
      UserBankAccountRepository,
      UserRepository,
      CommentsRepository,
      LogRepository,
      LoanRepository,
    ]),
  ],
  exports: [LoanMasterService],
  providers: [LoanMasterService, MailService, OutsideService],
})
export class LoanMasterModule {}
