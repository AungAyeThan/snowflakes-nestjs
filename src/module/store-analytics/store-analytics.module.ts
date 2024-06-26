import { Module } from '@nestjs/common';
import { DatabaseProvider, DatabaseService } from './providers/database.service';
import { DBRootModule } from '../adapter/snowflakes/db.module';
import { ConsumerHandlerSvc } from './service/consumer-handler.service';
import { ClickhouseModule } from '../adapter/clickhouse/db.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Conversation } from '../conversations/conversations.model';
import { ClickhouseDB } from './providers/analyticsdb-clickhouse.service';

const providers = [DatabaseProvider, ConsumerHandlerSvc]
@Module({
  imports: [
    SequelizeModule.forFeature([Conversation]),
    ClickhouseModule,
  ],
  providers,
  exports: providers,
  controllers: [],
})
export class StoreAnalyticsModule {}