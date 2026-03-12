import React, { useRef } from "react";

const offers = [
  {
    image: "https://st.redbus.in/Images/INDOFFER/IDFC/Android-iOS-IDFC500.png",
    title: "Get ₹500 off on bus bookings",
    valid: "Valid till 31 Mar",
    code: "IDFC500",
  },
  {
    image: "https://st.redbus.in/Images/INDOFFER/UPSRTC/Android-300_240%20ICICI%20copy%203.png",
    title: "Save ₹300 on ICICI payments",
    valid: "Valid till 28 Mar",
    code: "ICICI300",
  },
  {
    image: "https://st.redbus.in/Images/INDOFFER/GSRTC/298x200_1.png",
    title: "Flat ₹250 off on ANT buses",
    valid: "Valid till 30 Mar",
    code: "GSRTC250",
  },
  {
    image: "https://st.redbus.in/Images/INDOFFER/Sampleimages/296x200.png",
    title: "Special travel discount",
    valid: "Valid till 27 Mar",
    code: "TRAVEL100",
  },
  {
    image: "https://st.redbus.in/Images/INDOFFER/AXIS/Axisimages/Android-iOS-296x200.png",
    title: "Axis Bank users get 15% off",
    valid: "Valid till 31 Mar",
    code: "AXIS15",
  },
  {
    image: "https://st.redbus.in/Images/INDOFFER/NAMMA101/Android-iOS-296-200.png",
    title: "Enjoy 10% off on Karnataka routes",
    valid: "Valid till 31 Mar",
    code: "NAMMA101",
  },
];

const OffersSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="w-full py-10 bg-gray-100 relative">

     <div className="text-center mb-10">
  <h2 className="text-3xl font-bold">
    Bus Booking Offers
  </h2>

  <div className="w-24 h-1 bg-[#ff9900] mx-auto mt-3 rounded"></div>
</div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        {"<"}
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center z-10"
      >
        {">"}
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 px-12 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {offers.map((offer, index) => (
          <div
            key={index}
            className="min-w-[300px] h-[200px] rounded-lg overflow-hidden relative shadow-lg"
          >
            {/* Image */}
            <img
              src={offer.image}
              alt="offer"
              className="w-full h-full object-cover"
            />

            {/* Bus label */}
            <div className="absolute top-3 left-3 bg-white/80 text-black text-xs px-2 py-1 rounded">
              Bus
            </div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-semibold text-black text-lg">
                {offer.title}
              </h3>

              <p className="text-black text-sm">
                {offer.valid}
              </p>

              <button className="mt-1 bg-black text-white text-xs px-3 py-1 rounded">
                {offer.code}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersSlider;