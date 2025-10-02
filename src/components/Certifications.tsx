import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Google Project Management Foundations",
    provider: "Google via Coursera",
    type: "certification",
  },
  {
    title: "Business Analysis Foundations",
    provider: "Coursera",
    type: "certification",
  },
  {
    title: "Entrepreneurship Essentials",
    provider: "Professional Development",
    type: "workshop",
  },
  {
    title: "Digital Marketing Strategies",
    provider: "Professional Training",
    type: "workshop",
  },
  {
    title: "Data Analytics & Visualization",
    provider: "Professional Development",
    type: "workshop",
  },
  {
    title: "Leadership & Team Management",
    provider: "Professional Training",
    type: "workshop",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          Certifications & Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm group animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`${cert.type === 'certification' ? 'bg-gradient-accent' : 'bg-secondary'} text-white p-2 rounded-lg shadow-glow group-hover:scale-110 transition-transform`}>
                  {cert.type === 'certification' ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <BookOpen className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <Badge 
                    variant={cert.type === 'certification' ? 'default' : 'secondary'}
                    className="mb-2 text-xs"
                  >
                    {cert.type === 'certification' ? 'Certification' : 'Workshop'}
                  </Badge>
                </div>
              </div>
              <h3 className="text-lg font-bold gradient-text mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.provider}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
