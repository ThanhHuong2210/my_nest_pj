import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
}  from "typeorm";
import { ownerPlots } from "./ownerPlots.entity";

@Entity()
export class Owners { 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    address: string;

    @Column()
    contract: string;

    @Column()
    nationality:string;

    @Column()
    Comments: string;

    @Column()
    document: string;

   @OneToMany(()=> ownerPlots,(ownerPlots)=>ownerPlots.owner)
   ownerPlots: ownerPlots[];    
}