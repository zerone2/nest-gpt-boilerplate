import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Zerone!';
  }
  getHiEveryone(): string {
    return 'Hello Everyone :)';
  }
}
