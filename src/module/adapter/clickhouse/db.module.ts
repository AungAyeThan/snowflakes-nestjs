// src/clickhouse/clickhouse.module.ts
import { Module, Global } from '@nestjs/common';
import { ClickHouseClient, createClient } from '@clickhouse/client';


@Global()
@Module({
  providers: [
    {
      provide: 'CLICKHOUSE_CONNECTION',
      useFactory: async () => {
        const client = createClient({
          host: 'https://g4flen7dlm.ap-southeast-1.aws.clickhouse.cloud:8443',
          username: 'default',      
          password: '7MqpQz~7XxfR7',
          database: 'default',      
        });
        return client;
      },
    },
  ],
  exports: ['CLICKHOUSE_CONNECTION'],
})
export class ClickhouseModule {}
