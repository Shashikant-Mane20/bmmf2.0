"use client";

import React, { useState } from "react";

export default function DonatePage() {
  const [customAmount, setCustomAmount] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [comment, setComment] = useState("");

  const handleDonateClick = () => {
    const donationDetails = {
      amount: selectedAmount || customAmount,
      comment,
    };
    console.log("Donation Details:", donationDetails);
    alert("Thank you for your contribution!");
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
         
          <div className="flex items-center justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Donate to the Cause"
              className="w-full max-h-[500px] object-cover"
            />
          </div>

   
          <div className="bg-white p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Make a Donation
            </h2>
            <p className="text-gray-600 mb-6">
              Your contribution makes a big difference. Choose a predefined
              amount or enter a custom one to support our cause.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Amount
              </label>
              <div className="flex flex-wrap gap-4">
                {["500", "1000", "5000", "10000"].map((amount) => (
                  <button
                    key={amount}
                    className={`px-4 py-2 border ${
                      selectedAmount === amount
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-green-50 text-green-700 border-green-300"
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount(amount); 
                    }}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

          
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or Enter a Custom Amount
              </label>
              <input
                type="number"
                value={customAmount} 
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(""); 
                }}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter custom amount"
              />
            </div>

         
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add a Comment (Optional)
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Write a message..."
                rows="3"
              />
            </div>

         
            <button
              onClick={handleDonateClick}
              className="w-full py-3 bg-green-600 text-white font-bold hover:bg-green-700"
            >
              Donate Now
            </button>
          </div>
        </div>

       
        <div className="bg-white p-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            Other Ways to Contribute
          </h3>
          <p className="text-gray-600 mb-4">
            You can also contribute directly via bank transfer. Below are the
            details:
          </p>
          <ul className="text-gray-700 mt-4 space-y-2">
            <li>
              <strong>Bank Name:</strong> ABC Bank
            </li>
            <li>
              <strong>Account Number:</strong> 987654321
            </li>
            <li>
              <strong>IFSC Code:</strong> ABCD0123456
            </li>
            <li>
              <strong>Account Holder Name:</strong> Birsa Munda Medical
              Foundation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}