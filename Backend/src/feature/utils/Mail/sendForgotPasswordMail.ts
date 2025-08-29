import nodemailer from "nodemailer";
import config from "../../../utils/config/config.js";

export async function sendForgotPasswordMail({
  email,
  token,
}: {
  email: string;
  token: string;
}): Promise<void> {
  const FORGOT_PASSWORD_MAIL_LINK = `http://localhost:5173/set-password?token=${token}&email=${email}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: config.smtp.email,
      pass: config.smtp.password,
    },
  });
  await transporter.sendMail({
    from: `"DigitalDen" <${config.smtp.email}>`,
    to: email,
    subject: "Set Your Password - Action Required",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
          <h2 style="color: #333;">Set Your Password</h2>
          <p style="font-size: 16px; color: #555;">You are receiving this email because an account has been created for you or you’ve requested a password reset.</p>
          <p style="font-size: 16px; color: #555;">Please click the button below to set your password. This link will expire in <strong>15 minutes</strong>.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${FORGOT_PASSWORD_MAIL_LINK}" style="
              display: inline-block;
              padding: 12px 25px;
              background-color: #28a745;
              color: #ffffff;
              font-size: 16px;
              font-weight: bold;
              text-decoration: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            ">
              Set Your Password
            </a>
          </div>
          <p style="font-size: 14px; color: #999;">If you did not initiate this request, you can safely ignore this email.</p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #aaa; text-align: center;">This is an automated message. Please do not reply.</p>
        </div>
      </div>
    `,
  });
}
