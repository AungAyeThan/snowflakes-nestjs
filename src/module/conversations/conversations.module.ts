import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ConversationService } from './converations.service';
import { ConversationController } from './conversations.controller';
import { Conversation } from './conversations.model';

@Module({
  imports: [SequelizeModule.forFeature([Conversation])],
  providers: [ConversationService],
  controllers: [ConversationController],
})
export class ConversationModule {}
