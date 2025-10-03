import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="inline-block mb-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-slide-up">
          <p className="text-sm font-medium text-primary">Welcome to my portfolio</p>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          I am <span className="gradient-text">Veni Bandreddi</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Badge variant="outline" className="text-base px-4 py-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all">
            Marketing Strategist
          </Badge>
          <Badge variant="outline" className="text-base px-4 py-2 border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all">
            Business Professional
          </Badge>
          <Badge variant="outline" className="text-base px-4 py-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all">
            Data-Driven Leader
          </Badge>
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
          A marketing strategist and business professional with an <span className="font-semibold gradient-text">MBA in Marketing from Eastern Michigan University</span>. I blend <span className="font-semibold text-primary">data-driven insights with creative strategy</span> to drive <span className="font-semibold text-secondary">measurable results</span>.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all hover-lift"
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover-lift"
          >
            <a href="/Veni_Bandreddi_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-secondary/30 hover:border-secondary hover:bg-secondary/10 transition-all hover-lift"
          >
            <a href="https://www.linkedin.com/in/veni-bandreddi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
export default Hero;
