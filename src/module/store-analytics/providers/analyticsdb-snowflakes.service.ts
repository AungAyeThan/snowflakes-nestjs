import { Injectable, Inject } from '@nestjs/common';
import { Conversation } from "../../conversations/conversations.model";
import { Sequelize } from 'sequelize-typescript';
import { AnalyticsDatabase } from "./abstract-analyticsdb.service";

@Injectable()
export class SnowflakesDB extends AnalyticsDatabase {
  constructor(
    private readonly sequelize: Sequelize,
  ){
    super()
  }
  
  async getDataById(id: string): Promise<Conversation[]> {
    console.log("I am here")
    const query = "select * from STORE.conversations where conversation_id = :conversation_id";
    const replacements = { conversation_id: id };
    const results = await this.sequelize.query(query, {
      replacements,
      model: Conversation,
      mapToModel: true
    });
    return results;
  }

  async writeData(data: any): Promise<Conversation> {
    return 
  }
}