import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    ManyToMany,
}  from "typeorm";
import { Plot } from "./plot.entity";
import { Employee } from "./employee.entity";
@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('decimal', { precision: 5, scale: 2 })
    cost: number;
    
    @Column()
    status:string;

    @Column()
    description: string;

    @Column()
    managerID:number;

   @Column()
   approverID:number;

   @ManyToOne(()=> Plot,(plot)=> plot.tasks)
   @JoinColumn({name:'plotID'})
   plot:Plot;
   
   @ManyToMany(() => Employee, employee => employee.tasks)
   employees: Employee[];
}