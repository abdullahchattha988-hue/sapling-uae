import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSlider />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    <IndustriesSection />
    <FaqSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
