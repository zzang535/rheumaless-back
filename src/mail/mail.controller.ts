import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service'; // 적절한 경로로 수정하세요.

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Get('send-mail')
  sendMail() {
    console.log('call send mail');
    const result = this.mailService.sendHello();
    return { success: result };
  }
}
