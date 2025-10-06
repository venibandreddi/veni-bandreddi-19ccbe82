import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Eastern Michigan University",
    degree: "Master's in Business Administration",
    concentration: "Marketing",
    period: "Jan 2023 – Apr 2025",
  },
  {
    school: "ICFAI Business School, IFHE University",
    degree: "Bachelor's in Business Administration",
    period: "Aug 2019 – Jun 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg shadow-glow group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 gradient-text">{edu.school}</h3>
                  <p className="text-lg font-semibold mb-1">{edu.degree}</p>
                  {edu.concentration && (
                    <p className="text-secondary font-medium mb-2">Concentration: {edu.concentration}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
