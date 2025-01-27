import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import WorkExperienceSection from "@/components/WorkExperienceSection/WorkExperienceSection";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <Education />
      <Skills />
      <ContactSection />
    </>
  );
}
