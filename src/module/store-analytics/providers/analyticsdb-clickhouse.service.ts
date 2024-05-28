
import { Injectable, Inject } from '@nestjs/common';
import { Conversation } from "../../conversations/conversations.model";
import { AnalyticsDatabase } from "./abstract-analyticsdb.service";
import { ClickHouseClient } from '@clickhouse/client';

@Injectable()

export class ClickhouseDB extends AnalyticsDatabase {
  constructor(
    @Inject('CLICKHOUSE_CONNECTION')
    private readonly clickhouseClient: ClickHouseClient,
  ) {
    super()
  }
  
  
  async getDataById(id: string): Promise<Conversation[]> {
    try {
      const query = "select * from conversations where conversation_id = '1'";
      const response = await this.clickhouseClient.query({
        query,
        format: 'JSON',
      });
      console.log(response);
      return
    } catch (error) {
      console.error('Error executing ClickHouse query:', error);
      throw error;
    }
  }

  async writeData(data: any): Promise<Conversation> {
    return 
  }
}