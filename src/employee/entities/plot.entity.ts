import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Area } from './area.entity';
import { legalHistory } from './legalHistory.entity';
import { Plants } from './plant.entity';
import { ownerPlots } from './ownerPlots.entity';
import { Tasks } from './Tasks.entity';

@Entity()
export class Plot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  size: number;

  @Column()
  legal_history: string;

  @Column()
  description: string;
  areas: any;

  @ManyToOne(() => Area, (area) => area.plot)
  @JoinColumn({ name: 'areaID' })
  area: Area;

  @OneToMany(() =>legalHistory,(legalHistory)=> legalHistory.plot)
  legalHistory: legalHistory[];
  
   @OneToMany(() => Plants,(plants) => plants.plot)
   plants:Plants[];
  
   @OneToMany(()=>ownerPlots,(ownerPlots)=> ownerPlots.plot)
   ownerPlots:ownerPlots[];
    
   @OneToMany(()=>Tasks, (tasks)=>tasks.plot)
   tasks:Tasks[];
}
