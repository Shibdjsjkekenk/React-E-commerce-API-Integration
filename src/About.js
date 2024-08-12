import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Shubhanshu Tiwari",
    paragraph: "At Tiwari's Ecommerce, we believe in simplifying your life by bringing a comprehensive selection of products right to your fingertips. Whether you're looking for trendy fashion apparel, cutting-edge electronics, home and living essentials, or even the latest beauty and wellness products, we've got it all covered."
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;