import React from "react";
import AnnounceMent from "../Components/AnnounceMent/AnnounceMent";
import Catagory from "../Components/Catagories/Catagory";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Nabvar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import Products from "../Components/Products/Products";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <AnnounceMent />
      <Navbar />
      <Slider />
      <Catagory />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
