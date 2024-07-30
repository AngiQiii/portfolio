import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Skills from "../components/Skills/Skills";
import Navigation from "../components/Navigation/Navigation";
import MyWorkSection from "@/components/MyWorkSection/MyWorkSection";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Skills />
      <MyWorkSection />
      <ContactMe />
      <Footer />
    </>
  );
}
