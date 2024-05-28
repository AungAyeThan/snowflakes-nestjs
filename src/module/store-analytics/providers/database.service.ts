import { Provider } from '@nestjs/common';
import { ClickhouseDB } from './analyticsdb-clickhouse.service';
import { SnowflakesDB } from './analyticsdb-snowflakes.service';
import { AnalyticsDatabase } from './abstract-analyticsdb.service';

const featureFlag = {
  snowflakes: false
};

export const DatabaseProvider: Provider = {
  provide: 'AnalyticsDatabase',
  useClass: featureFlag.snowflakes ? SnowflakesDB: ClickhouseDB,
};