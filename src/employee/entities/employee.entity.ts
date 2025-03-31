import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToMany,
    ManyToOne,
    JoinColumn,
}  from "typeorm";
import { Tasks } from "./Tasks.entity";
import { Roles } from "./role.entity";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
   
    @Column({nullable:true})
    position : string; 
    
    @Column('decimal', { precision: 5, scale: 2 })
    salary: number;
    
    @Column()
    comments: string;

    @Column()
    document: string;

    @Column()
    description:string;

    @ManyToMany(() => Tasks, task => task.employees)
    @JoinTable()
    tasks: Tasks[];

    @ManyToOne(() => Roles, (role) => role.employees)
    @JoinColumn({name:'roleID'})
    role: Roles;

}