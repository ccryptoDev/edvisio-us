import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  ParseUUIDPipe,
  HttpStatus,
  Put,
  Headers,
  Logger,
} from '@nestjs/common';
import { StartApplicationService } from './start-application.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RealIP } from 'nestjs-real-ip';
import { ReferenceInfoDto } from './dto/referenceInfo.dto';
import { ReviewPlanDto, UpdateRtsDate } from './dto/reviewplan.dto';
import { EditStudentDetailsDto } from './dto/editstudentdetails.dto';
import { YourInfoDto } from './dto/yourInfo.dto';
import { SubmitDto } from './dto/loan.dto';
import { Up_YourInfoDto } from './dto/yourinfo-reviewplan.dto';

// @ApiBearerAuth()
// @Roles('school')
// @UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiTags('start-application')
@Controller('start-application')
export class StartApplicationController {
  constructor(
    private readonly startApplicationService: StartApplicationService,
  ) {}

  @Get('getStage/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get All stages' })
  async getStage(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.startApplicationService.getstage(loan_id);
  }

  @Post('/updatePersonalInfo')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Employment Info' })
  async applicationform(
    @Body() yourInfoDto: YourInfoDto,
    @RealIP() ip: string,
  ) {
    return this.startApplicationService.applicationform(yourInfoDto, ip);
  }

  @Post('/updateReferenceInfo/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Reference Info' })
  async updateReferenceInfo(
    @Param('loan_id', ParseUUIDPipe) loan_id: string,
    @Body() referenceInfoDto: ReferenceInfoDto,
    @RealIP() ip: string,
  ) {
    return this.startApplicationService.updateReferenceInfo(
      loan_id,
      referenceInfoDto,
      ip,
    );
  }

  @Get('/updateReferenceInfo/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get Reference Info' })
  async getReferenceInfo(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.startApplicationService.getReferenceInfo(loan_id);
  }

  @Post('/reviewPlan/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Review plan' })
  async reviewPlan(
    @Param('loan_id', ParseUUIDPipe) loan_id: string,
    @Body() reviewPlanDto: ReviewPlanDto,
    @RealIP() ip: string,
  ) {
    return this.startApplicationService.reviewPlan(loan_id, reviewPlanDto, ip);
  }

  @Post('/submit-application/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'submit Appllication' })
  async submitApplication(
    @Param('loan_id', ParseUUIDPipe) loan_id: string,
    @Body() SubmitDto: SubmitDto,
    @RealIP() ip: string,
  ) {
    return this.startApplicationService.submitApplication(
      loan_id,
      SubmitDto,
      ip,
    );
  }

  @Put('/edit_studentDetails/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'edit ref2 Info' })
  async editStudentdetails(
    @Param('loan_id', ParseUUIDPipe) loan_id: string,
    @Body() editInfo: EditStudentDetailsDto,
    @RealIP() ip: string,
  ) {
    return await this.startApplicationService.EditStudentDetails(
      loan_id,
      editInfo,
      ip,
    );
  }
  @Get('studentInfo/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get Stage1' })
  async getStage1(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.startApplicationService.getStage1(loan_id);
  }

  @Get('referenceInfo/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get Stage3' })
  async getStage3(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.startApplicationService.getStage3(loan_id);
  }

  @Get('reviewplan/:loan_id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get Stage6' })
  async getStage6(@Param('loan_id', ParseUUIDPipe) loan_id: string) {
    return this.startApplicationService.getStage6(loan_id);
  }

  @Get('getconfigration')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get Configuration' })
  async getconfig(
    // @Param('user_id', ParseUUIDPipe) user_id: string,
    @Headers() headers,
  ) {
    let user_id = headers.userid;
    return this.startApplicationService.getSchoolConfig(user_id);
  }

  @Post('/updateflexform')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update Dto' })
  async updategetdto(
    @Body() up_yourInfoDto: Up_YourInfoDto,
    @RealIP() ip: string,
  ) {
    return this.startApplicationService.postapplicationform(up_yourInfoDto, ip);
  }

  @Put('/rtsdate/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'edit rts date' })
  async editrtsdate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRtsDate: UpdateRtsDate,
  ) {
    return this.startApplicationService.editrtsdate(id, updateRtsDate);
  }
}
