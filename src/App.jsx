import React from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Component/Banner";
import Popular from "./Component/Popular";
import About from "./Component/About";
import Streamin from "./Component/Streamin";
import Sale from "./Component/Sale";
import Accesories from "./Component/Accesories";
import Team from "./Component/Team";
import FAQ from "./Component/FAQ";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Popular />
      {/* <Streamin /> */}
      <Sale />
      <Accesories />
      {/* <Team />
      <FAQ />
      <Footer /> */}
    </>
  );
};

export default App;
