import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Veni Naidu Bandreddi</h3>
            <p className="text-background/80">
              Marketing Strategist & Digital Specialist
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-background/80 hover:text-background transition-colors">
                About
              </a>
              <a href="#experience" className="text-background/80 hover:text-background transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-background/80 hover:text-background transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:venibandreddi@gmail.com"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4" />
                venibandreddi@gmail.com
              </a>
              <a 
                href="tel:+17343838389"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                (734) 383-8389
              </a>
              <a 
                href="https://www.linkedin.com/in/veni-bandreddi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Veni Naidu Bandreddi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
