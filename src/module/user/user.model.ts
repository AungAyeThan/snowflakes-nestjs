import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: "USER", timestamps: false})
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    field: 'ID',
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'NAME',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'EMAIL',
    unique: true,
  })
  email: string;
}
