import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          Let's Connect
        </h2>
        <Card className="p-10 shadow-glow-lg hover-lift gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <p className="text-lg text-foreground/90 mb-6">
              I'm always open to new opportunities, collaborations, and conversations. 
              Feel free to reach out—let's create something remarkable together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a 
              href="mailto:venibandreddi@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all group hover-lift border border-border/30 hover:border-primary/50"
            >
              <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform shadow-glow">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-primary">venibandreddi@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/veni-bandreddi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all group hover-lift border border-border/30 hover:border-primary/50"
            >
              <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform shadow-glow">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-semibold gradient-text">linkedin.com/in/veni-bandreddi</p>
              </div>
            </a>
          </div>
          
          <div className="flex justify-center">
            <Button 
              size="lg"
              className="bg-gradient-accent hover:opacity-90 text-primary-foreground shadow-glow-lg hover:shadow-glow transition-all hover-lift"
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
