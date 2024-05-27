import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull
} from 'sequelize-typescript';

@Table({
  tableName: 'CONVERSATIONS',
  timestamps: false
})
export class Conversation extends Model<Conversation> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'CONVERSATION_ID',
  })
  conversation_id!: string;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
    field: 'BUYER_FIRST_SENT',
  })
  buyer_first_sent!: Date | null;

  @AllowNull(true)
  @Column({
    type: DataType.DATE,
    field: 'SELLER_SENT',
  })
  seller_sent!: Date | null;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    field: 'SELLER_SENT_FROM_ZAAPI',
  })
  seller_sent_from_zaapi!: boolean;

  @AllowNull(true)
  @Column({
    type: DataType.INTEGER,
    field: 'RESPONSE_TIME',
  })
  response_time!: number | null;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'ASSIGNED_ADMIN_ID',
  })
  assigned_admin_id!: string | null;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'RESPONDED_ADMIN_ID',
  })
  responded_admin_id!: string | null;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'ACCOUNT_ID',
  })
  account_id!: string | null;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'STORE_ID',
  })
  store_id!: string | null;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'CHANNEL',
  })
  channel!: string | null;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    field: 'MISSED',
  })
  missed!: boolean;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    field: 'NEW_CHAT',
  })
  new_chat!: boolean;

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
    field: 'CUSTOMER_ID',
  })
  customer_id!: string | null;
}
