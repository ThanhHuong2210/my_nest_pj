import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
}  from "typeorm";
import { Plants } from "./plant.entity";

@Entity()
export class PlantTypes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'float' })
    growTime: number; 

    @Column()
    careInstruction: string;
    
    @OneToMany(()=>Plants,(plants)=> plants.plantTypes)
    plants:Plants[];
    
    

}