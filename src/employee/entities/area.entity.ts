import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
}  from "typeorm";
import { Regions } from "./region.entity";
import { Plot } from "./plot.entity";

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description:string;

    @ManyToOne (()=> Regions , (region) => region.areas)
    @JoinColumn({name:'regionID'})
    region:Regions;

    @OneToMany (()=> Plot,(plot) => plot.areas)
    plot:Plot[];
}