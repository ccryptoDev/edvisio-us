import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class PermanentAddress {
  address: string;
  city: string;
  state: string;
  zipcode: string;
}

export class StudentInfo {
         firstname: string;

         @IsOptional()
         @IsString()
         middlename: string;

         lastname: string;
         birthday: Date;
         email: string;
         ssn: string;
       }

export class EditStudentDetailsDto {
         @IsNotEmpty()
         @IsString()
         firstname: string;

         @IsOptional()
         @IsString()
         middlename: string;

         @IsNotEmpty()
         @IsString()
         lastname: string;

         @IsNotEmpty()
         @IsString()
         email: string;

         @IsNotEmpty()
         @IsString()
         ssn: string;

         @IsNotEmpty()
         @Type(() => Date)
         @IsDate()
         birthday: Date;

         @IsNotEmpty()
         @IsString()
         driver_licence_state: string;

         @IsNotEmpty()
         @IsString()
         driver_licence_number: string;

         @IsNotEmpty()
         @IsString()
         primary_phone: string;

         // @IsNotEmpty()
         // @IsString()
         // alternate_phone: string;

         @IsNotEmpty()
         @IsString()
         address: string;

         @IsNotEmpty()
         @IsString()
         city: string;

         @IsNotEmpty()
         @IsString()
         state: string;

         @IsNotEmpty()
         @IsString()
         zipcode: string;

         @IsNotEmpty()
         @IsString()
         rent_or_own: string;

         @IsNotEmpty()
         @IsBoolean()
         isSameasMailAddress: boolean;

         @IsNotEmpty()
         permanentaddress: PermanentAddress;

         @IsNotEmpty()
         @IsBoolean()
         isStudentSameasApplicant: boolean;

         @IsNotEmpty()
         studentDetails: StudentInfo;

         @IsNotEmpty()
         @IsString()
         student_id: string;

         @IsNotEmpty()
         @IsString()
         school_id: string;

         @IsOptional()
         @IsString()
         product_id: string;
       }
