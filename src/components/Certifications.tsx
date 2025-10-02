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
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Certifications & Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 gradient-card"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`${cert.type === 'certification' ? 'bg-accent' : 'bg-secondary'} text-white p-2 rounded-lg`}>
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
              <h3 className="text-lg font-bold text-primary mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.provider}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
