import React from "react";
import { FaBus } from "react-icons/fa"; // Bus icon

const BusBookingBanner = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('https://s3.rdbuz.com/Images/responsiveweb/HomeBanner.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
          <div className="px-6 md:px-12">
            <h1 className="text-white text-3xl md:text-4xl font-bold max-w-md">
              Safe & Comfortable Bus Rides !!
            </h1>
            <p className="text-white mt-2 max-w-sm">
              Book your journey quickly and travel with peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="px-6">
        <div className="bg-white shadow-lg -mt-16 p-6 rounded-lg max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Book Your Bus
          </h2>

          <form className="flex flex-col md:flex-row gap-4">
            {/* From */}
            <div className="flex flex-col flex-1 relative">
              <label className="mb-1 font-medium">From</label>
              <div className="flex items-center border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500">
                <FaBus className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter city"
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            {/* To */}
            <div className="flex flex-col flex-1 relative">
              <label className="mb-1 font-medium">To</label>
              <div className="flex items-center border rounded-md p-2 focus-within:ring-2 focus-within:ring-blue-500">
                <FaBus className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter city"
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            {/* Date of Journey */}
            <div className="flex flex-col flex-1">
              <label className="mb-1 font-medium">Date of Journey</label>
              <input
                type="date"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Search Buses
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusBookingBanner;