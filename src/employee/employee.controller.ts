import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Update } from './dto/update';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { Requests } from './dto/request';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly  employeeService: EmployeeService) {}
    
    @Get('')
    async getAllEmployee() : Promise<Employee[]> {
        return await this.employeeService.getAllEmployee();
    }

    @Post('')
    async createEmployee(@Body() a: Requests) : Promise<Employee> {
        return await this.employeeService.createEmployee(a);
    }

   @Put(':id')
   async UpdateEmployee(@Body() b: Update , @Param("id") id:number){
        return await this.employeeService.UpedateEmployee(id,b);
   }
}
