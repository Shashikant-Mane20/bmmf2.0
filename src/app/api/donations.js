import dbConnect from "../../lib/db";
import Donation from "../../models/Donation";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, comment, donorName, donorEmail, donorContact } = req.body;

    // Connect to the database
    await dbConnect();

    try {
      const newDonation = new Donation({
        amount,
        comment,
        donorName,
        donorEmail,
        donorContact,
      });

      await newDonation.save();
      res.status(200).json({ message: "Donation saved successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save donation" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
