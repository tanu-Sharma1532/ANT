import logo from "../assets/ANT_LOGO.png";

function Footer() {
  return (
    <footer className="bg-[#131921] text-gray-300 pt-16 pb-8">

      <div className="max-w-[1400px] mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + About */}

        <div>
          <img
            src={logo}
            alt="ANT Travels"
            className="h-32 w-auto mb-6"  // increased logo size
          />

          <p className="text-sm leading-relaxed text-gray-400">
            ANT Travels provides reliable car, bus and traveller rental
            services across Delhi, Noida and NCR. We ensure safe,
            comfortable and punctual travel for all customers.
          </p>
        </div>


        {/* Useful Links */}

        <div>
          <div className="mb-4">
  <h3 className="text-white text-xl font-semibold">
    Useful Links
  </h3>

  <div className="w-16 h-1 bg-[#ff9900] mt-2 rounded"></div>
</div>

          <ul className="space-y-2 text-sm">
            <li><a  className="hover:text-[#ff9900]">Blog</a></li>
            <li><a  className="hover:text-[#ff9900]">About Us</a></li>
            <li><a  className="hover:text-[#ff9900]">Distance Chart</a></li>
            <li><a  className="hover:text-[#ff9900]">Travel Tips</a></li>
            <li><a  className="hover:text-[#ff9900]">Photo Gallery</a></li>
            <li><a  className="hover:text-[#ff9900]">Wedding Transport</a></li>
          </ul>
        </div>


        {/* Book A Car */}

        <div>
          <div className="mb-4">
  <h3 className="text-white text-xl font-semibold">
    Book a Car
  </h3>

  <div className="w-16 h-1 bg-[#ff9900] mt-2 rounded"></div>
</div>

          <ul className="space-y-2 text-sm">
            <li><a  className="hover:text-[#ff9900]">Swift Dzire Car Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Toyota Etios Car Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Honda City Car Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Toyota Innova Car Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Toyota Fortuner Car Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Toyota Innova Crysta</a></li>
          </ul>
        </div>


        {/* Car / Coach Hire */}

        <div>
         <div className="mb-4">
  <h3 className="text-white text-xl font-semibold">
   Car / Coach Hire
  </h3>

  <div className="w-16 h-1 bg-[#ff9900] mt-2 rounded"></div>
</div>

          <ul className="space-y-2 text-sm">
            <li><a  className="hover:text-[#ff9900]">Bus Hire for Wedding</a></li>
            <li><a  className="hover:text-[#ff9900]">Car Hire for Wedding</a></li>
            <li><a  className="hover:text-[#ff9900]">Mini Bus Hire</a></li>
            <li><a  className="hover:text-[#ff9900]">Car Hire for Outstation</a></li>
            <li><a  className="hover:text-[#ff9900]">9 Seater Traveller</a></li>
            <li><a  className="hover:text-[#ff9900]">17 Seater Traveller</a></li>
          </ul>
        </div>


        {/* Payments */}

        <div>
          <div className="mb-4">
  <h3 className="text-white text-xl font-semibold">
    Payment Details
  </h3>

  <div className="w-16 h-1 bg-[#ff9900] mt-2 rounded"></div>
</div>

          <ul className="space-y-2 text-sm">
            <li><a  className="hover:text-[#ff9900]">Online Payment</a></li>
            <li><a  className="hover:text-[#ff9900]">Bank Details</a></li>
            <li><a  className="hover:text-[#ff9900]">Feed Back</a></li>
            <li><a  className="hover:text-[#ff9900]">Disclaimer</a></li>
            <li><a  className="hover:text-[#ff9900]">Cancellation & Refund</a></li>
            <li><a  className="hover:text-[#ff9900]">Terms & Conditions</a></li>
            <li><a  className="hover:text-[#ff9900]">Privacy Policy</a></li>
            <li><a  className="hover:text-[#ff9900]">Download Invoice</a></li>
          </ul>
        </div>

      </div>


      {/* Bottom */}

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ANT Travels. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;