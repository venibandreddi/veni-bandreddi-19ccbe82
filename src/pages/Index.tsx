import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import SkillsInteractive from "@/components/SkillsInteractive";
import ExperienceInteractive from "@/components/ExperienceInteractive";
import ProjectsInteractive from "@/components/ProjectsInteractive";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <SkillsInteractive />
      <ExperienceInteractive />
      <ProjectsInteractive />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
