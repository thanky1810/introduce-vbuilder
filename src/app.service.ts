import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; message: string } {
    return {
      status: 'success',
      message: 'Virtual Technology API is running successfully!',
    };
  }
}
