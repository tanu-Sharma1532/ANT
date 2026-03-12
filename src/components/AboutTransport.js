import React, { useState, useEffect } from "react";

/* Import your 6 images */
import img1 from "../assets/B1.jpeg";
import img2 from "../assets/B2.jpeg";
import img3 from "../assets/B3.jpeg";
import img4 from "../assets/B4.jpeg";
import img5 from "../assets/B5.jpeg";
import img6 from "../assets/B6.jpeg";

const AboutTransport = () => {

  const images = [img1, img2, img3, img4, img5, img6];

  const [currentImage, setCurrentImage] = useState(0);
  const [showMore, setShowMore] = useState(false);

  /* Auto change images */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="w-full bg-white py-16 px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}

        <div className="text-gray-700 text-lg leading-relaxed">

         <div className="text-center mb-6">
  <h2 className="text-3xl font-bold">
    About ANT Travels
  </h2>

  <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
</div>

          {/* FIRST 3 PARAGRAPHS */}

          <p className="mb-4">
            We are one of the oldest Transport Service providers based in ANT Travels
            and have been in the business for now over ten years.
          </p>

          <p className="mb-4">
            Our registered office is at Noida, where in addition to transportation
            services we own and manage an Educational Institution, have Multi Cuisine
            Restaurants and a State of the Art Computer Centre.
          </p>

          <p className="mb-4">
            On the transportation front we provide services to various multinational
            companies in New Delhi, Gurgaon & Noida on daily and contract basis.
            Apart from this we also provide Tourist and Pilgrimage Luxury Coach services.
          </p>

          {/* HIDDEN PARAGRAPHS */}

          {showMore && (
            <>
              <p className="mb-4">
                We have our own parking space along with three well-equipped service
                centers that provide all round maintenance and repair services
                ensuring smooth running of all our vehicles.
              </p>

              <p className="mb-4">
                All our vehicles are Air Conditioned and Non Air Conditioned current
                models with National Permits and equipped with Wireless Sets and
                Fire Safety Appliances and polite, caring drivers.
              </p>

              <p className="mb-4">
                We have been transacting business with Government Corporations such as
                <strong> ITDC & DTDC </strong> and private companies like
                <strong>
                  {" "}EXL Service.com (I) Pvt Ltd, Convergys (I) Services Pvt Ltd,
                  Cathay Pacific Airways Ltd, L&T, Coca Cola, Daksh E Service Pvt Ltd
                </strong>
                for several years.
              </p>

              <p>
                We look forward to an opportunity to provide
                <strong> SAFE, RELIABLE and PUNCTUAL </strong>
                transportation services and build a mutually beneficial association.
              </p>
            </>
          )}

          {/* SEE MORE BUTTON */}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-6 py-2 bg-black text-white rounded-md"
          >
            {showMore ? "See Less" : "See More"}
          </button>

        </div>


        {/* RIGHT AUTO IMAGE */}

        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">

          <img
            src={images[currentImage]}
            alt="ANT transport"
            className="w-full h-full object-cover transition-all duration-700"
          />

        </div>

      </div>

    </div>

  );
};

export default AboutTransport;