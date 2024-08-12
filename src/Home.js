import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Contact from "./Contact";
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
  const data = {
    name: "Shubhanshu",
    paragraph: "Welcome to Tiwari's Ecommerce, where convenience meets quality and affordability! We are committed to providing you with a seamless online shopping experience, offering a diverse range of products to cater to your every need.",
    title: "Tiwari's Ecommerce: Your One-Stop Online Shopping Destination"
  };

  return(
    <>
     <HeroSection myData={data} />
     <FeatureProduct/>
     <Services/>
     <Trusted/>
     <Contact/>
    </>
   
  ) 
 
};

export default Home;