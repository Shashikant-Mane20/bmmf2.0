// pages/admin/dashboard.js
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get("/api/donations/getAll");
        setDonations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching donations", error);
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) return <div>Loading donations...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Donor Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Comment</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="border-b">
                <td className="py-2 px-4">{donation.donorName}</td>
                <td className="py-2 px-4">{donation.email}</td>
                <td className="py-2 px-4">₹{donation.amount}</td>
                <td className="py-2 px-4">{donation.comment}</td>
                <td className="py-2 px-4">{new Date(donation.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
