import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'qld',
      logging: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
