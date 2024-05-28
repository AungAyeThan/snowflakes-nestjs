import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ConversationService } from './converations.service';
import { Conversation } from './conversations.model';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Get()
  async findAll(): Promise<Conversation[]> {
    return this.conversationService.findAll();
  }

  @Get(':conversation_id')
  async findOne(@Param('conversation_id') id: number): Promise<Conversation[]> {
    return this.conversationService.find(id);
  }

  @Post()
  async create(@Body() convo: Conversation): Promise<Conversation> {
    return this.conversationService.create(convo);
  }


  @Get('/query/:conversation_id')
  async findByQuery(@Param('conversation_id') id: string): Promise<Conversation[]> {
    return this.conversationService.findByQuery(id);
  }
}
