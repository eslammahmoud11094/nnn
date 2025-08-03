import { IncomingForm } from "formidable";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const EMAIL_USER = "cvtalntly@gmail.com";
  const EMAIL_PASS = "atsb zsry jvce bzwm";

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields) => {
    if (err) {
      console.error("Form parsing error:", err);
      return res.status(500).json({ error: "Form parsing error" });
    }

    // Get the raw values from Formidable (may come as string | array | object)
    const getFieldValue = (field) =>
      Array.isArray(field)
        ? field[0]
        : typeof field === "object" && field !== null && "value" in field
        ? field.value
        : field;

    const name = getFieldValue(fields["contact-name"]);
    const email = getFieldValue(fields["contact-email"]);
    const phone = getFieldValue(fields["contact-phone"]);
    const message = getFieldValue(fields["contact-message"]);

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Talently Contact" <${EMAIL_USER}>`,
        to: EMAIL_USER,
        replyTo: email,
        subject: `New Contact from ${name}`,
        html: `
          <h3>New Talently Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.toString().replace(/\n/g, "<br>")}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }
  });
}

// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     const formData = req.body;
//     const { name, email, phone, message } = formData;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Talently Contact" <${process.env.SMTP_USER}>`,
//       to: process.env.SMTP_USER,
//       replyTo: email,
//       subject: `New Contact from ${name}`,
//       html: `
//         <h3>New Talently Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
//         <p><strong>Message:</strong></p>
//         <p>${message?.replace(/\n/g, "<br>")}</p>
//       `,
//     });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ error: "Failed to send message" });
//   }
// }
