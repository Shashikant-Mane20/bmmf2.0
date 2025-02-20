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

// Define Mongoose schema and model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, message } = await req.json();

    // Save to MongoDB
    const contactEntry = new Contact({ name, email, message });
    await contactEntry.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to recipient (your email)
    await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Message: ${message}\nEmail: ${email}`,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Dear ${name},\n\nThank you for reaching out. We have received your message:\n"${message}"\n\nOur team will get back to you soon.\n\nBest regards,\nYour Company Name`,
    });

    return new Response(JSON.stringify({ success: true, message: "Message sent successfully and confirmation email sent!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to process the request" }), { status: 500 });
  }
}
