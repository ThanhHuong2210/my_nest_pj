
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
}  from "typeorm";
import { Plot } from "./plot.entity";
import { Owners } from "./owner.entity";

@Entity()
export class ownerPlots { 
    @PrimaryGeneratedColumn()
  id: number;
 
  @Column('decimal', { precision: 5, scale: 2 })
  ownershipPercentage: number;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @ManyToOne(() => Plot, plot => plot.ownerPlots)
  @JoinColumn({name:'plotID'})
  plot: Plot;

  @ManyToOne(()=>Owners , owner =>owner.ownerPlots)
  @JoinColumn({name:'ownerID'})
  owner: Owners;

}