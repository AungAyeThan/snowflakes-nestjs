import { Injectable, Inject } from '@nestjs/common';
import { AnalyticsDatabase } from '../providers/abstract-analyticsdb.service';
import { DatabaseService } from '../providers/database.service';

@Injectable()
export class ConsumerHandlerSvc {
  constructor(
    @Inject('AnalyticsDatabase') private readonly db: AnalyticsDatabase,
  ) {}

  async getData(id: string) {
    return await this.db.getDataById(id);
  }
}