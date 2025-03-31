import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn,
}  from "typeorm";
import { Plot } from "./plot.entity";

@Entity()
export class legalHistory {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable:true})
    description : string;

    @Column({ type: 'date' })
    changeDate: Date;

    @CreateDateColumn({ type: 'timestamp' }) 
    createdAt: Date;
    
    @ManyToOne (()=>Plot , (plot) => plot.legalHistory)
    @JoinColumn({name:'plotID'})
    plot:Plot;
    

  


}