import Hero from "@/components/Hero";
import DietaryProgram from "@/components/DietaryProgram";
import FanFavorites from "@/components/FanFavorites";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <DietaryProgram />
      <FanFavorites />
      <Story />
      <Testimonials />
      <LocationSection />
      <FAQAccordion />
    </>
  );
}
