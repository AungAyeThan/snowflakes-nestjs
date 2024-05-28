import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBRootModule } from './module/adapter/snowflakes/db.module';
import { ConversationModule } from './module/conversations/conversations.module';
import { ClickhouseModule } from './module/adapter/clickhouse/db.module';
import { StoreAnalyticsModule } from './module/store-analytics/store-analytics.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DBRootModule.snowflake(),
    ConversationModule,
    StoreAnalyticsModule
  ],
})
export class AppModule {}
