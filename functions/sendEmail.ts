import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587, // replace with the appropriate port number
  // secure: false, // false for TLS, true for SSL
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});
const mailOptions = {
  from: process.env.NEXT_PUBLIC_EMAIL_USER,
  to: "",
  subject: "",
  html: "",
};
export default async function sendEmail(
  email: string,
  subject: string,
  template: Function
) {
  try {
    (mailOptions.to = email),
      (mailOptions.subject = subject),
      (mailOptions.html = template()),
      await transporter
        .sendMail(mailOptions)
        .then((res: any) => {})
        .catch((err: any) => {
          throw new Error(err);
        });

    return { status: "200", message: "Email send successfully" };
  } catch (error: any) {
    return { status: "400", message: error.message };
  }
}
