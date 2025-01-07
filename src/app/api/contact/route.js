// import nodemailer from "nodemailer";
// import dbConnect from "../../../lib/db";
// import mongoose from "mongoose";

// // Define Mongoose schema and model
// const ContactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
//   date: { type: Date, default: Date.now },
// });

// const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// export async function POST(req) {
//   try {
//     await dbConnect();

//     const { name, email, message } = await req.json();

//     // Save to MongoDB
//     const contactEntry = new Contact({ name, email, message });
//     await contactEntry.save();

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
      
//         pass: process.env.EMAIL_PASS,
     
//       },
//     });

//     // Send email
//     await transporter.sendMail({
//       from: email,
//       to: process.env.RECIPIENT_EMAIL,
   
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Message: ${message}\nEmail: ${email}`,
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return new Response(JSON.stringify({ error: "Failed to process the request" }), { status: 500 });
//   }
// }

import nodemailer from "nodemailer";
import dbConnect from "../../../lib/db";
import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    // Database connection
    await dbConnect();

    // Request body parsing
    let parsedBody;
    try {
      parsedBody = await req.json();
    } catch (parseError) {
      console.error("Request parsing error:", parseError);
      return new Response(JSON.stringify({ error: "Invalid request payload" }), { status: 400 });
    }
    const { name, email, message } = parsedBody;

    // Save to MongoDB
    try {
      const contactEntry = new Contact({ name, email, message });
      await contactEntry.save();
    } catch (saveError) {
      console.error("MongoDB save error:", saveError);
      return new Response(JSON.stringify({ error: "Failed to save to database" }), { status: 500 });
    }

    // Verify environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
      console.error("Missing environment variables");
      return new Response(JSON.stringify({ error: "Missing email configuration" }), { status: 500 });
    }

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // From your email account
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\nEmail: ${email}`,
      });
    } catch (mailError) {
      console.error("Email sending error:", mailError);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Unhandled error:", error.message, error.stack);
    return new Response(JSON.stringify({ error: "Failed to process the request" }), { status: 500 });
  }
}
