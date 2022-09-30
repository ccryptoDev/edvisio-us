import { IsOptional, IsString } from 'class-validator';

export class searchApplicationDto {
         @IsOptional()
         firstname: string;

         @IsOptional()
         middlename: string;

         @IsOptional()
         lastname: string;

         @IsOptional()
         email: string;

         @IsOptional()
         student_id: string;

         @IsOptional()
         application_id: number;

         @IsOptional()
         ssn: string;

         @IsOptional()
         phone: string;
       }
