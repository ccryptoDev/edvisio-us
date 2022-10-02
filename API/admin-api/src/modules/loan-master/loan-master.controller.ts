import {
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  UseGuards,
  ParseUUIDPipe,
  Param,
  Post,
  Body,
  Put,
  Query,
  UsePipes,
  Req,
} from '@nestjs/common';
import { LoanMasterService } from './loan-master.service';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { RolesGuard, UsersRole } from '../../guards/roles.guard';
import { SetMetadata } from '@nestjs/common';
import { manualBankAddDto } from './dto/manual-bank-add.dto';
import { addcommentsDto } from './dto/add-comments.dto';
import { createPaymentSchedulerDto } from './dto/createPaymentScheduler.dto';
import { LogInLogsDto, Logs } from './dto/logs.dto';
import { deniedDto } from './dto/denied.dto';
import { RealIP } from 'nestjs-real-ip';
import { Headers } from '@nestjs/common';
import { ApplicationSearchDto } from './dto/application-search.dto';
import { Request } from 'express';
export const Roles = (...roles: string[]) => SetMetadata('role', roles);

@ApiTags('Loan-master')
@ApiBearerAuth()
@Roles('admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('loan-master')
@ApiBearerAuth()
@ApiHeader({
  name: 'UserId',
})
export class LoanMasterController {
  constructor(private readonly loanMasterService: LoanMasterService) {}

  @ApiBearerAuth()
  @Roles(UsersRole.ADMIN, UsersRole.SUPER_ADMIN, UsersRole.SCHOOL)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/school-loans')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get school applications available to school user' })
  @ApiQuery({ name: 'school_id', required: false })
  @ApiQuery({ name: 'email', type: String, required: false })
  @ApiQuery({ name: 'application_id', type: String, required: false })
  @ApiQuery({ name: 'application_uuid', required: false })
  @ApiQuery({ name: 'status_flag', required: false })
  @ApiQuery({ name: 'firstname', type: String, required: false })
  @ApiQuery({ name: 'lastname', type: String, required: false })
  @ApiQuery({ name: 'ssn', type: String, required: false })
  @ApiQuery({ name: 'phone_number', type: String, required: false })
  @ApiQuery({ name: 'alternate_type_id', required: false })
  @ApiQuery({ name: 'alternate_id', required: false })
  @ApiQuery({ name: 'student_id', required: false })
  @ApiQuery({ name: 'student_email', required: false })
  @ApiQuery({ name: 'student_firstname', required: false })
  @ApiQuery({ name: 'student_lastname', required: false })
  @ApiQuery({ name: 'student_ssn', required: false })
  @ApiQuery({ name: 'student_phone_number', required: false })
  @ApiQuery({ name: 'student_alternate_type_id', required: false })
  @ApiQuery({ name: 'student_alternate_id', required: false })
  async getSchoolLoans(
    @Headers() headers,
    @Query('school_id') schoolID?: string,
    @Query('application_id') applicationID?: string,
    @Query('application_uuid') applicationUUID?: string,
    @Query('status_flag') statusFlag?: string,
    @Query('email') email?: string,
    @Query('firstname') firstname?: string,
    @Query('lastname') lastname?: string,
    @Query('ssn') ssn?: string,
    @Query('phone_number') phoneNumber?: string,
    @Query('alternate_type_id') alternateTypeId?: string,
    @Query('alternate_id') alternateId?: string,

    @Query('student_id') studentID?: string,
    @Query('student_email') studentEmail?: string,
    @Query('student_firstname') studentFirstname?: string,
    @Query('student_lastname') studentLastname?: string,
    @Query('student_ssn') studentSSN?: string,
    @Query('student_phone_number') studentPhoneNumber?: string,
    @Query('student_alternate_type_id') studentAlternateTypeId?: string,
    @Query('student_alternate_id') studentAlternateId?: string,
  ) {
    let userID = headers.userid;
    return await this.loanMasterService.getSchoolLoans(
      userID,
      schoolID,
      applicationID,
      applicationUUID,
      statusFlag,
      /*Borrower*/
      email,
      firstname,
      lastname,
      ssn,
      phoneNumber,
      alternateTypeId,
      alternateId,
      /*Student*/
      studentID,
      studentEmail,
      studentFirstname,
      studentLastname,
      studentSSN,
      studentPhoneNumber,
      studentAlternateTypeId,
      studentAlternateId,
    );
  }

  @ApiBearerAuth()
  @Roles(UsersRole.ADMIN, UsersRole.SUPER_ADMIN, UsersRole.SCHOOL)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/school-loans/:status')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get school applications available to school user' })
  @ApiQuery({ name: 'school_id', required: false })
  async getSchoolLoansByStatus(
    @Headers() headers,
    @Param('status') status: string,
    @Query('school_id') schoolID?: string,
  ) {
    let userID = headers.userid;
    return await this.loanMasterService.getSchoolLoansByStatus(
      userID,
      schoolID,
      status
    );
  }

  //Get all
  @Get('/:status')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'GET_ALL' })
  async get(@Headers() headers, @Param('status') status: string) {
    let user_id = headers.userid;
    return this.loanMasterService.get(status, user_id);
  }
  // Get Id
  @Get('/:status/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get details' })
  async getdetails(
    @Param('status') status: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.loanMasterService.getdetails(status, id);
  }

  @Get('/loan/details/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get Loan details' })
  async getLoanDetails(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.getLoanById(id);
  }

  //Document-Center
  @Get('/:status/:id/document-center')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get document details' })
  async getdocuments(
    @Param('status') status: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.loanMasterService.getdocuments(status, id);
  }
  @Get('/:status/:id/payment-schedule')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get payemnt schedule details' })
  async getpaymentscheduledetails(
    @Param('status') status: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.loanMasterService.getpaymentscheduledetails(status, id);
  }

  @Post('/denied/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set Denied' })
  async setdenied(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() denieddto: deniedDto,
  ) {
    return this.loanMasterService.setdenied(id, denieddto);
  }

  @Post('/makeapproved/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set Approved' })
  async setapproved1(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.setapproved1(id);
  }

  @Get('/invite/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set Approved' })
  async invite(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.invite(id);
  }

  //Only for Pending Applications
  @Post('/pending/manualbankadd')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: '' })
  async manualBankAdd(@Body() manualBankAddDto: manualBankAddDto) {
    return this.loanMasterService.manualBankAdd(manualBankAddDto);
  }
  //Add Comments
  @Post('/pending/addcomments')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: '' })
  async addcomments(@Body() addcommentsDto: addcommentsDto) {
    return this.loanMasterService.addcomments(addcommentsDto);
  }
  // Add payment Schedule
  @Post('/pending/paymentschedule')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: '' })
  async paymentschedule(
    @Body() createpaymentSchedulerDto: createPaymentSchedulerDto,
  ) {
    return this.loanMasterService.paymentschedule(createpaymentSchedulerDto);
  }

  // Add logs
  @Post('/pending/addlogs')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Adding logs' })
  async logs(@Body() logs: Logs) {
    return this.loanMasterService.logs(logs);
  }

  // Add login logs
  @Post('/pending/addloginlogs')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Adding logIn Logs' })
  async addLoginLog(@Body() logInLogsDto: LogInLogsDto, @RealIP() ip: string) {
    return this.loanMasterService.addLoginLog(logInLogsDto, ip);
  }

  // Get comments
  @Get('/pending/getcomments/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: '' })
  async getcomments(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.getcomments(id);
  }

  // Get Creadit Report
  @Get('/pending/:id/creditreport')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get creditreport' })
  async creditreport(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.creditreport(id);
  }

  //Make pending
  @Put('setpending/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set pending' })
  async setpending(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.setpending(id);
  }

  // Set Delete
  @Get('denied/delete/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set delete' })
  async setdelete(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.setdelete(id);
  }

  //Get logs
  @Get('approved/:id/getlogs')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Get Logs' })
  async getlogs(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.getlogs(id);
  }

  @Put('/setApproved/:id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Set Approved' })
  async setApproved(@Param('id', ParseUUIDPipe) id: string) {
    return this.loanMasterService.setApproved(id);
  }

  @Put('certifiedApplication/:loan_id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(UsersRole.ADMIN)
  @ApiOperation({ summary: 'Certify An Application' })
  async certifyApp(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.loanMasterService.certifyApplication(loan_id);
  }

  @Roles(UsersRole.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Post('search')
  async search(@Body() applicationSearchDto: ApplicationSearchDto) {
    return this.loanMasterService.findSchoolLoans(applicationSearchDto);
  }
}
