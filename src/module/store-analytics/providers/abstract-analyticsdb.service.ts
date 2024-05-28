import { Conversation } from '../../conversations/conversations.model';

export abstract class AnalyticsDatabase {
  abstract getDataById(id: string): Promise<Conversation[]>
}
