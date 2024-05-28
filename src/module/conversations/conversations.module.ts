import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConversationService } from './converations.service';
import { ConversationController } from './conversations.controller';
import { Conversation } from './conversations.model';
import { ClickhouseModule } from '../adapter/clickhouse/db.module';
import { StoreAnalyticsModule } from '../store-analytics/store-analytics.module';

@Module({
  imports: [SequelizeModule.forFeature([Conversation]), ClickhouseModule, StoreAnalyticsModule],
  providers: [ConversationService,],
  controllers: [ConversationController],
})
export class ConversationModule {}
