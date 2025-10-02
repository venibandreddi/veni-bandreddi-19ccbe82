import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Let's Connect
        </h2>
        <Card className="p-10 shadow-glow gradient-card">
          <div className="text-center mb-8">
            <p className="text-lg text-foreground/90 mb-6">
              I'm always open to new opportunities, collaborations, and conversations. 
              Feel free to reach out—let's create something remarkable together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:venibandreddi@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-primary/5 transition-colors group"
            >
              <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-primary">venibandreddi@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:+17343838389"
              className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-secondary/5 transition-colors group"
            >
              <div className="bg-secondary text-secondary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold text-secondary">(734) 383-8389</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/veni-bandreddi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-background hover:bg-accent/5 transition-colors group"
            >
              <div className="bg-accent text-accent-foreground p-3 rounded-lg group-hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-semibold text-accent">linkedin.com/in/veni-bandreddi</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
              <div className="bg-primary/10 text-primary p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Michigan, United States</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="shadow-glow"
              asChild
            >
              <a href="/Veni_Bandreddi_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Full Resume
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
