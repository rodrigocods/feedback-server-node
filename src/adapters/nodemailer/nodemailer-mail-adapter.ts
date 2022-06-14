import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "743d555d6832e2",
    pass: "d29c0b2be6c20d"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback <test@test.com>',
      to: 'Rodrigo Oliveira <rodrigomengo06@gmail.com>',
      subject,
      html: body,
  });
  };
}