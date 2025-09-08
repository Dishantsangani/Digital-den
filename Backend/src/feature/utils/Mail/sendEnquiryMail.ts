import nodemailer from "nodemailer";
import config from "../../../utils/config/config.js";

export async function sendEnquiryMail(
  email: string,
  message: string
): Promise<void> {
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
    subject: "Reply to your enquiry",
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
      <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px 30px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    
    <h2 style="color: #333;">Reply to Your Enquiry</h2>
    
    <p style="font-size: 14px; color: #555;">
      Thank you for reaching out to us. Here is our response to your enquiry:
    </p>
    
    <blockquote style="border-left: 4px solid #007bff; padding-left: 10px; color: #333; font-size: 15px; margin: 20px 0;">
      ${message}
    </blockquote>
    
    <p style="font-size: 14px; color: #555; margin-top: 20px;">
      If you have further questions, feel free to reply to this email.
    </p>
    
    <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
    
    <p style="font-size: 12px; color: #aaa; text-align: center;">
      This is an automated message from <strong>DigitalDen</strong>. Please do not reply directly.
    </p>
    
  </div>
</div>`,
  });
}
