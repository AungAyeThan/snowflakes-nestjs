import { Inject, Provider, Injectable } from '@nestjs/common';
import { ClickhouseDB } from './analyticsdb-clickhouse.service';
import { SnowflakesDB } from './analyticsdb-snowflakes.service';
import { AnalyticsDatabase } from './abstract-analyticsdb.service';
import { Conversation } from 'src/module/conversations/conversations.model';

const featureFlag = {
  snowflakes: false
};

export const DatabaseProvider: Provider = {
  provide: 'AnalyticsDatabase',
  useClass: featureFlag.snowflakes ? SnowflakesDB: ClickhouseDB,
};

@Injectable()
export class DatabaseService {
  private dbs: AnalyticsDatabase[]
  constructor(
      private readonly clickHouse: ClickhouseDB,
      private readonly snowflakes: SnowflakesDB,

      @Inject('AnalyticsDatabase') private readonly db: AnalyticsDatabase, //db that is set with feature flag
  ) {
      this.dbs = [this.clickHouse, this.snowflakes]
  }


  async writeData(data: any): Promise<void> {
    for (const db of this.dbs) {
        await db.writeData(data)
    }
  }

  async getDataById(id: string): Promise<Conversation[]> {
    return await this.db.getDataById(id)
  }
}