import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 gradient-hero">
      <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Veni Naidu Bandreddi
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90">
          Marketing Strategist | Digital Specialist | Business Analyst
        </p>
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
          Transforming data into decisions and strategies into success. MBA candidate with proven expertise in digital marketing, operations, and project management.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="/Veni_Bandreddi_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            asChild
          >
            <a href="https://www.linkedin.com/in/veni-bandreddi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
