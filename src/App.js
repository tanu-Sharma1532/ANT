import AboutTransport from "./components/AboutTransport";
import BestOperatorNoida from "./components/BestOperatorNoida";
import BusBookingBanner from "./components/BusBookingBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OffersSlider from "./components/OfferSlider";
import PopularDestinations from "./components/PopularDestinations";

function App() {
  return (
    <div>
      <Navbar />
      <AboutTransport/>
      <BusBookingBanner />
      <OffersSlider />
      <BestOperatorNoida/>
      <PopularDestinations />
      <Footer/>
    </div>
  );
}

export default App;