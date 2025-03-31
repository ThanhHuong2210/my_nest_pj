import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  role_name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // One-to-Many: Một vai trò có nhiều nhân viên
  @OneToMany(() => Employee, employee => employee.role)
  employees: Employee[];
}





































