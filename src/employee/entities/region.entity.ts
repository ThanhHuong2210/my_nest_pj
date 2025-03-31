import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
}  from "typeorm";
import { Area } from './area.entity'; 
@Entity()
export class Regions {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
   
    @Column({nullable:true})
    description : string;

    @OneToMany(() => Area , (areas) => areas.region)
    areas : Area[];
}