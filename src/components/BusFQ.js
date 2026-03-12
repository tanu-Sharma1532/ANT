import React, { useState } from "react";

const faqs = [
  {
    question: "How can I book a bus with ANT Travels?",
    answer:
      "You can easily book a bus through our website or by contacting our customer support. We provide quick and reliable booking services."
  },
  {
    question: "Are the buses air conditioned?",
    answer:
      "Yes, we provide both Air Conditioned and Non Air Conditioned buses depending on the route and customer requirements."
  },
  {
    question: "Is it safe to travel with ANT Travels?",
    answer:
      "Absolutely. All our buses are well maintained and equipped with safety equipment. Our drivers are experienced and trained for safe travel."
  },
  {
    question: "Do you provide weekend tour packages?",
    answer:
      "Yes, we provide multiple weekend tours and travel packages to popular destinations."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, bookings can be cancelled or rescheduled depending on the terms and conditions of the ticket."
  }
];

const BusFAQ = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="w-full bg-white py-16 px-6">

     <div className="text-center mb-12">
  <h2 className="text-3xl font-bold">
    Frequently Asked Questions
  </h2>
  <p className="text-gray-500 mt-2">
    Find answers to the most common travel queries
  </p>
  <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
</div>

      <div className="max-w-4xl mx-auto space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="border rounded-lg shadow-sm"
          >

            {/* Question */}

            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {/* Answer */}

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </div>

  );
};

export default BusFAQ;