import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth(): { status: string; message: string } {
    return this.appService.getHealth();
  }
}
