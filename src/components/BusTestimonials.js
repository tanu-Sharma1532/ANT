import React, { useState, useEffect } from "react";
import img1 from "../assets/testimonials_new.jpg";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    review:
      "Very comfortable journey with ANT Travels. The bus was clean, on time, and the driver was very polite. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    city: "Jaipur",
    review:
      "I travel frequently for work and ANT Travels provides the most reliable weekend travel experience. Great service!",
  },
  {
    name: "Amit Verma",
    city: "Noida",
    review:
      "Safe and punctual buses. Booking process was simple and the seats were very comfortable for long distance travel.",
  },
  {
    name: "Neha Kapoor",
    city: "Gurgaon",
    review:
      "Excellent customer service and well maintained buses. My family had a great trip to Manali!",
  }
];

const BusTestimonials = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = testimonials[index];

  return (
    <div className="w-full bg-gray-100 py-16 px-6">

      <div className="text-center mb-12">
  <h2 className="text-3xl font-bold">
    What Our Travelers Say
  </h2>
  <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
</div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}

        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="Bus testimonials"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TESTIMONIAL */}

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 text-gray-800 shadow-xl rounded-xl p-10 text-center">

          <p className="text-lg mb-6">
            “{t.review}”
          </p>

          <h3 className="text-xl font-semibold">
            {t.name}
          </h3>

          <p className="text-blue-500">
            {t.city}
          </p>

          {/* Dots */}

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-3 w-3 rounded-full ${
                  i === index ? "bg-blue-700" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
};

export default BusTestimonials;