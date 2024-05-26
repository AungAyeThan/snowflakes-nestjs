import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { DBRootModule } from './module/db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DBRootModule.snowflake(),
    UserModule,
  ],
})
export class AppModule {}
