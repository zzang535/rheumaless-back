import { MailerService } from '@nestjs-modules/mailer';
import { ConflictException, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  sendHello(): boolean {
    this.mailerService
      .sendMail({
        to: 'zzang535@gmail.com',
        from: 'zzang535@gmail.com',
        subject: 'Hello',
        text: 'Hello World',
        html: '<b>Hello World</b>',
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        new ConflictException(error);
      });
    return true;
  }
}
