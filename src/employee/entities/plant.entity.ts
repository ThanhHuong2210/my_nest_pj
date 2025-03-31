import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
}  from "typeorm";
import { Plot } from "./plot.entity";
import { PlantTypes } from "./plantTypes.entity";

@Entity()
export class Plants{
  @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    quantity: number;

    @Column()
    age:number;

    @Column()
    careRequirements: string;
    
    @ManyToOne(()=>Plot,(plot)=> plot.plants)
    @JoinColumn({name:'plotID'})
    plot: Plot;
    
    @ManyToOne(()=>PlantTypes ,(plantTypes)=>plantTypes.plants)
    @JoinColumn({name:'plantTypesID'})
    plantTypes: PlantTypes;
}