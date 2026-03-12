import logo from "../assets/ANT_LOGO.png";

function Navbar() {
  const links = [
    "Home",
    "Bus Ticket",
    "Bus Hire",
    "Car Hire",
    "Traveller Hire",
    "Gallery",
    "Online Payment",
    "Send Enquiry",
    "Contact Us",
  ];

  return (
    <nav className="bg-[#131921] text-white w-full shadow-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8"> {/* reduced py */}

        {/* Left Section */}
        <div className="flex items-center gap-12">

          {/* Logo - increased height and width further */}
          <div className="flex -my-4"> {/* increased negative margin to -my-4 */}
            <img
              src={logo}
              alt="ANT Tourist"
              className="h-32 w-40 object-cover" /* increased from h-24 w-30 to h-32 w-40 */
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center text-sm font-medium gap-2">
            {links.map((item, idx) => (
              <div key={idx} className="flex items-center">
                {/* Added href="#" to fix ESLint errors */}
                <a
                  className="px-2 py-0.5 hover:text-[#ff9900] transition-all duration-300 font-medium"
                >
                  {item}
                </a>
                {idx !== links.length - 1 && <span className="text-gray-400">|</span>} 
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <button className="bg-[#ff9900] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#f08804] transition-all duration-300 shadow-md hover:scale-105">
          Book Now
        </button>

      </div>
    </nav>
  );
}

export default Navbar;