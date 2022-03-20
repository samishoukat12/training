const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");
const mailersend = new MailerSend({
  api_key: process.env.apiKey,
});
export class auth {}
export const sendEmail = async (
  portal: any,
  email: any,
  password: any,
  name: any
) => {
  try {
    const recipients = [new Recipient(email, name)];
    const emailParams = new EmailParams()
      .setFrom("info@trainings.techloset.com")
      .setFromName("trainings.techloset")
      .setRecipients(recipients)
      .setSubject("Account Created")
      .setHtml(
        `Congratulation you account has been created your email : ${email} , Password: ${password}`
      );
    await mailersend.send(emailParams);
  } catch (error: any) {
    throw new Error(error);
  }
};
