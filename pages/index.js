import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import ContactUs from "../components/ContactUs";
import ServiceCard from "../components/common/Cards/ServiceCard";
import Testimonial from "../components/Testimonial";
import MainSlider from "../components/common/Sliders/MainSlider";
import BestOffersServices from "../components/BestOffersServices";
import Signup from "./Signup";

export default function Home() {
  return (
    <>
      <SeoHead title="Konnect Europe" />
      <Layout>
        <Hero />
        <MainSlider />
        <OurServices />
        <AboutUs />
        <BestOffersServices />
        <ContactUs />
        

      </Layout>
    </>
  );
}
