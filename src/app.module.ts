import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [AppController, UserController, MailController],
  providers: [AppService],
})
export class AppModule {}
