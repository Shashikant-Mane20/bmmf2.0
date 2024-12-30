import React from "react";
import EventCard from "./EventCard";

const Events = () => {
  const events = [
    {
      id: 1,
      image: "/images/530x530.jpg",
      category: "Education",
      name: "Help Underprivileged Children",
      description: "Support our initiative to educate underprivileged children.",
      amountRaised: "₹50,000",
      goal: "₹1,00,000",
    },
    {
      id: 2,
      image: "/images/530x530.jpg",
      category: "Health",
      name: "Medical Aid for Villages",
      description: "Provide medical aid to remote villages in need.",
      amountRaised: "₹30,000",
      goal: "₹70,000",
    },
    {
      id: 3,
      image: "/images/530x530.jpg",
      category: "Environment",
      name: "Tree Plantation Drive",
      description: "Join us in planting trees for a greener tomorrow.",
      amountRaised: "₹10,000",
      goal: "₹50,000",
    },
    {
      id: 4,
      // Missing image, using fallback
      image: undefined,
      category: "Animal Welfare",
      name: "Save the Strays",
      description: "Help provide shelter to stray animals.",
      amountRaised: "₹25,000",
      goal: "₹60,000",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
