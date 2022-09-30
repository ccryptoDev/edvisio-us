import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity,Flags } from '../../entities/users.entity';
import { UserRepository } from 'src/repository/users.repository';
import { getManager, In } from 'typeorm';
import { AddUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { MailService } from '../../mail/mail.service';
import { SchoolUserEntity } from 'src/entities/schooluser.entity';
import { SchoolUserRepository } from 'src/repository/schooluser.repository';

@Injectable()
export class UserManagementService {
    constructor( 
        @InjectRepository(UserRepository) private readonly userRepository: UserRepository, 
        @InjectRepository(SchoolUserRepository) private readonly schoolUserRepository: SchoolUserRepository,
        private readonly mailService: MailService
    ) {}

    async addUser(addUserDto:AddUserDto){    
        try {
            let newUser = new UserEntity()           
            newUser.mainInstallerId = addUserDto.schoolId;
            newUser.firstName = addUserDto.firstName;
            newUser.middleName = addUserDto.middleName;
            newUser.lastName = addUserDto.lastName;
            newUser.email = addUserDto.email;
            newUser.role = addUserDto.role;

            //check email already exist or not
            const entityManager = getManager();
            const role_list = await entityManager.
                query(`select distinct 
                        r.id
                    from tblroles r
                    join tblrolesmaster rm on r.id = rm.role_id 
                    join tblportal p on p.id = rm.portal_id 
                    where 
                        p.name in ('installer','school')
                    and r.delete_flag ='N' 
                `)

            if(role_list.length>0){
                let r = []
                for (let i = 0; i < role_list.length; i++) {
                    r.push(role_list[i]['id']);
                }

                let users:any = await this.userRepository.find( {select:["email"], where:{delete_flag:'N', email: newUser.email, role: In(r)}});
                if(users.length>0){
                    return {"statusCode": 400, "message": ["This Email Already Exists"],"error": "Bad Request"}
                }

                var length = 8,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                password = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    password += charset.charAt(Math.floor(Math.random() * n));
                }

                newUser.salt = await bcrypt.genSalt();
                newUser.password = await bcrypt.hash(password, newUser.salt);
                newUser.active_flag = Flags.Y;            
                
                let newUserRes = await this.userRepository.save(newUser);

                let url:any = process.env.InstallerUrl
                url=url+"login";                

                let schoolUser = new SchoolUserEntity()
                schoolUser.user_id = newUser.id;
                schoolUser.school_id = addUserDto.schoolId;
                await this.schoolUserRepository.save(schoolUser);

                this.mailService.add(newUser.email,password,url)

                return {"statusCode": 200, "message": ["User Added Successfully"]};
            }          
                      
        } catch (error) {
          return {"statusCode": 400, "message": [new InternalServerErrorException(error)['response']['name']], "error": "Bad Request"};
        }
    }

    async getUsers(school_id){
        const entityManager = getManager();
        try{            
            let usersList = await entityManager.query(
                `select u.*, r.name as role_name 
                from tbluser u 
                join tblroles r on r.id = u.role 
                where u."mainInstallerId"='${school_id}' 
                and u.delete_flag='N'`);

            usersList.forEach(element => {
                delete element.salt;
            }); 
            
            return {
                "statusCode": 200,
                "count": usersList.length,
                usersList: usersList };            
        }catch(error){
            console.log('err', error);
            
            return {"statusCode": 500, "message": [new InternalServerErrorException(error)['response']['name']], "error": "Bad Request"};
        }
    } 
}
