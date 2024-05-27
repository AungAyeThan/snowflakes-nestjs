import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Conversation } from './conversations.model';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation)
    private readonly conversationModel: typeof Conversation,
    private sequelize: Sequelize
  ) {}

  async findAll(): Promise<Conversation[]> {
    return this.conversationModel.findAll();
  }

  async find(conversation_id: number): Promise<Conversation[]> {
    return this.conversationModel.findAll({ where: { conversation_id } });
  }

  async create(conversation: Conversation): Promise<Conversation> {
    return this.conversationModel.create(conversation);
  }

  async findByQuery(conversation_id: number): Promise<Conversation[]> {
    const query = 'select * from STORE.conversations where conversation_id = :conversation_id';
    const replacements = { conversation_id };
    const results = await this.sequelize.query(query, {
      replacements,
      model: Conversation,
      mapToModel: true
    });
    return results;
  }
}
