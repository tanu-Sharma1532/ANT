import React, { useRef, useEffect, useState } from "react";
import udaipur from "../assets/UDAIPUR.jpg";
import jaipur from "../assets/jaipur.jpg";
import punjab from "../assets/PUNJAB.jpg";
import agra from "../assets/AGRA.jpg";

import weekend1 from "../assets/Weekend Getaways from Delhi_cleanup.jpg";
import weekend2 from "../assets/Weekend tour from Delhi_cleanup.jpg";
import weekend3 from "../assets/Weekend trips from Delhi_cleanup.jpg";
import BusTestimonials from "./BusTestimonials";
import BusFAQ from "./BusFQ.js";

const destinations = [
  {
    image: "https://blog-content.ixigo.com/wp-content/uploads/2017/10/kasol.jpg",
    title: "Delhi to Manali",
    subtitle: "Weekend Mountain Escape",
  },
  {
    image: udaipur,
    title: "Delhi to Udaipur",
    subtitle: "Royal Rajasthan Tour",
  },
  {
    image: jaipur,
    title: "Delhi to Jaipur",
    subtitle: "Pink City Weekend",
  },
  {
    image: punjab,
    title: "Delhi to Punjab",
    subtitle: "Cultural Punjab Trip",
  },
  {
    image: agra,
    title: "Delhi to Agra",
    subtitle: "Taj Mahal Weekend Tour",
  }
];

const PopularDestinations = () => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  /* Auto slide destinations */
  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* Weekend auto image slider */

  const weekendImages = [weekend1, weekend2, weekend3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % weekendImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white">

      {/* DESTINATION SLIDER */}

      <div className="py-14 relative">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Popular Destinations & Weekend Tours
          </h2>
          <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          {"<"}
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          {">"}
        </button>

        {/* Slider */}

        <div
          ref={sliderRef}
          className="flex gap-6 px-14 overflow-x-auto scroll-smooth hide-scrollbar"
        >

          {destinations.map((item, index) => (
            <div
              key={index}
              className="min-w-[340px] h-[230px] rounded-xl overflow-hidden relative shadow-lg"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-4 left-4 text-white">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm">
                  {item.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* WEEKEND TRAVEL SECTION */}

      <div className="bg-gray-50 py-16 px-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Auto Image */}

          <div className="w-full h-[360px] rounded-xl overflow-hidden shadow-lg">

            <img
              src={weekendImages[currentImage]}
              alt="weekend travel"
              className="w-full h-full object-cover transition-all duration-700"
            />

          </div>

          {/* Text */}

          <div>
 
            <div className="mb-6 text-center">
              <h2 className="text-4xl font-bold">
                Perfect Weekend Getaways
              </h2>

              <div className="w-24 h-1 bg-[#ff9900] mt-3 rounded mx-auto"></div>
            </div>

            <p className="text-gray-700 text-lg mb-4">
              Corporate professionals and office employees often have
              very limited time during weekdays because of busy work
              schedules and long office hours.
            </p>

            <p className="text-gray-700 text-lg mb-4">
              Weekends become the perfect opportunity to take a short
              break from the routine and explore nearby destinations
              with friends, family, or colleagues.
            </p>

            <p className="text-gray-700 text-lg">
              With comfortable bus journeys, you can travel to scenic
              hill stations, historical cities, cultural towns and
              relaxing nature retreats without taking long leaves
              from work.
            </p>

          </div>

        </div>

      </div>
      <BusFAQ />
      <BusTestimonials />
      <div className="w-full">
        <img
          src="https://www.anttravels.com/images/bg-bottom.png"
          alt="footer background"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default PopularDestinations;