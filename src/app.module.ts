import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { User } from './module/user/user.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'snowflake',
        dialectModule: require('snowflake-sdk'),
        host: `${configService.get<string>('SNOWFLAKE_ACCOUNT')}.snowflakecomputing.com`,
        username: configService.get<string>('SNOWFLAKE_USERNAME'),
        password: configService.get<string>('SNOWFLAKE_PASSWORD'),
        database: configService.get<string>('SNOWFLAKE_DATABASE'),
        schema: configService.get<string>('SNOWFLAKE_SCHEMA'),
        models: [User],
        dialectOptions: {
          account: configService.get<string>('SNOWFLAKE_ACCOUNT'),
          warehouse: configService.get<string>('SNOWFLAKE_WAREHOUSE'),
          role: configService.get<string>('SNOWFLAKE_ROLE'),
        },
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
