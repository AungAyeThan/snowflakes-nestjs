import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Conversation } from './conversations.model';
import { ConsumerHandlerSvc } from '../store-analytics/service/consumer-handler.service';

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation)
    private readonly conversationModel: typeof Conversation,
    private svc: ConsumerHandlerSvc,
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

  async findByQuery(conversation_id: string): Promise<Conversation[]> {
    const results = this.svc.getData(conversation_id)
    return results;
  }
}
