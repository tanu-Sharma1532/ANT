import React from "react";

const services = [
  {
    title: "Swift Dzire Car Hire Delhi Noida",
    img: "https://anttravels.com/transportImages/carsswift.png",
    link: "swift-dzire-car-hire-on-rent-in-delhi",
  },
  {
    title: "Toyota Innova Car Hire In Noida Delhi NCR",
    img: "https://anttravels.com/transportImages/INNOVAA.png",
    link: "toyota-innova-car-hire-on-rent-in-delhi",
  },
  {
    title: "Toyota Fortuner Car Hire In Delhi NCR",
    img: "https://anttravels.com/transportImages/fortuner.png",
    link: "toyota-fortuner-hire-in-delhi-ncr",
  },
  {
    title: "Taxi Service in Noida",
    img: "https://anttravels.com/transportImages/tant-travels-toyota-corolla.jpg",
    link: "taxi-service-in-noida",
  },
  {
    title: "Innova Crysta Car Hire In Noida Delhi NCR",
    img: "https://anttravels.com/transportImages/ttttttttttttttttttt1.jpg",
    link: "car-hire-from-delhi-ncr-to-outstation-tour",
  },
  {
    title: "Car Hire for Char Dham Yatra 2026",
    img: "https://anttravels.com/transportImages/tchar_dham.jpg",
    link: "taxi-car-hire-rental-for-char-dham-yatra-from-delhi-noida",
  },
  {
    title: "9 Seater Luxury Traveler",
    img: "https://anttravels.com/transportImages/AGRA.jpeg",
    link: "9-seater-tempo-traveller-hire-on-rent-in-delhi",
  },
  {
    title: "12 Seater Luxury Traveller",
    img: "https://anttravels.com/transportImages/tttttt5.jpg",
    link: "12-seater-tempo-traveller-hire-on-rent-in-delhi",
  },
  {
    title: "17 Seater Luxury Traveller",
    img: "https://anttravels.com/transportImages/tttt7.JPG",
    link: "17-seater-tempo-traveller-hire-on-rent-in-delhi",
  },
  {
    title: "21 Seater Bus for Outstation Tour",
    img: "https://anttravels.com/transportImages/ttttttttttt4.JPG",
    link: "21-seater-luxury-bus-hire-in-delhi-ncr",
  },
  {
    title: "Mini Bus On Rent for Char Dham Yatra 2026",
    img: "https://anttravels.com/transportImages/ttttttttttttttt2.jpg",
    link: "mini-bus-hire-for-char-dham-tour-in-delhi",
  },
  {
    title: "45 Seater Bharat Benz Coach Hire",
    img: "https://anttravels.com/transportImages/tttttt6.jpg",
    link: "bharat-benz-bus-hire-on-rent-in-delhi-for-outstation-tour",
  },
  {
    title: "Volvo Bus with Washroom",
    img: "https://anttravels.com/transportImages/IMG_2233.JPG",
    link: "38-seater-volvo-bus-hire-on-rent-in-delhi-NCR",
  },
  {
    title: "41 Seater Volvo Coach Hire",
    img: "https://anttravels.com/transportImages/tt4.jpeg",
    link: "41-seater-volvo-bus-hire-on-rent-in-delhi-for-outstation-tour",
  },
  {
    title: "45 Seater Volvo Coach Hire",
    img: "https://anttravels.com/transportImages/tt2.jpeg",
    link: "45-seater-volvo-bus-coach-rental-hire-on-rent-in-delhi-for-outstation-tour",
  },
  {
    title: "22 Seater Luxury Coach Hire",
    img: "https://anttravels.com/transportImages/ttt5.jpeg",
    link: "22-seater-luxury-bus-hire-on-rent-in-delhi",
  },
  {
    title: "25 Seater Bharat Benz Coach Hire In Delhi NCR",
    img: "https://anttravels.com/transportImages/ttttttttttttttttt1.jpg",
    link: "25-seater-luxury-bus-hire-on-rent-in-delhi-for-outstation",
  },
  {
    title: "27 Seater Luxury Coach Hire In Delhi NCR",
    img: "https://anttravels.com/transportImages/tant_bus_-2.jpg",
    link: "27-seater-luxury-bus-hire-on-rent-in-delhi",
  },
  {
    title: "Bus Booking in Delhi Airport",
    img: "https://anttravels.com/transportImages/t35_SEATER.png",
    link: "35-seater-luxury-bus-hire-on-rent-in-delhi",
  },
  {
    title: "45 Seater Luxury Coach Hire",
    img: "https://anttravels.com/transportImages/tt3.jpg",
    link: "bharat-benz-coach-hire-on-rent-in-delhi",
  }
];

const BestOperatorNoida = () => {
  return (
    <div className="w-full py-16 bg-gray-100 px-6">

      {/* Heading */}

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Best Operator in Noida
        </h2>

        <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
      </div>

      {/* Grid */}

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-center text-sm font-medium text-gray-800 bg-slate-300">
              {service.title}
            </div>

          </a>
        ))}

      </div>

    </div>
  );
};

export default BestOperatorNoida;