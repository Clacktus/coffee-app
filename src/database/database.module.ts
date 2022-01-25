import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'typeorm';
import { PROVIDERS } from 'src/constants/app.constants';

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: PROVIDERS.CONNECTION,
          useValue: createConnection(options),
        },
      ],
    };
  }
}
