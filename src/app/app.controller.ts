import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3000/home/hello
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
