import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import Skills from "../components/Skills/Skills";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Skills />
    </>
  );
}
