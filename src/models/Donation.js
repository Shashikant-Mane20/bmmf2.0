import mongoose from "mongoose";

// Donation schema definition
const donationSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    default: "No comment",
  },
  donorName: {
    type: String,
    required: true,
  },
  donorEmail: {
    type: String,
    required: true,
  },
  donorContact: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.models.Donation || mongoose.model("Donation", donationSchema);

export default Donation;
