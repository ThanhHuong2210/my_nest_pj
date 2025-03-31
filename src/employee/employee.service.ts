import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from './entities/employee.entity';
import { Repository } from "typeorm";
import { Requests } from "./dto/request";
import { Update } from "./dto/update";
import { error } from "console";

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepo: Repository<Employee>
    ){}

    async getAllEmployee(): Promise<Employee[]> {
        return await this.employeeRepo.find();
    }
    async createEmployee ( createEmployeeDto: Requests):Promise <Employee>{
        const {name} = createEmployeeDto;
        const newEmployee = this.employeeRepo.create({
            name
        })
        return await this.employeeRepo.save(newEmployee)
    }
    async UpedateEmployee (
        id : number,
        UpdateEmployeeDto:Update
    ):Promise<Employee>{
        try{
        const{name , description} = UpdateEmployeeDto;
        const employee = await this.employeeRepo.findOneBy({ id });
        employee!.name = name;
        employee!.description = description;
        return this.employeeRepo.save(employee!)
        }catch(e){
            throw e
        }
    }
}
