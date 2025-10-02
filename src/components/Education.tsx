import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Eastern Michigan University",
    degree: "Master's in Business Administration",
    concentration: "Marketing",
    location: "Ypsilanti, Michigan",
    period: "Jan 2023 – Apr 2025",
  },
  {
    school: "ICFAI Business School, IFHE University",
    degree: "Bachelor's in Business Administration",
    location: "Hyderabad, Telangana",
    period: "Aug 2019 – Jun 2022",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-primary">{edu.school}</h3>
                  <p className="text-lg font-semibold mb-1">{edu.degree}</p>
                  {edu.concentration && (
                    <p className="text-secondary font-medium mb-2">Concentration: {edu.concentration}</p>
                  )}
                  <p className="text-muted-foreground mb-1">{edu.location}</p>
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
