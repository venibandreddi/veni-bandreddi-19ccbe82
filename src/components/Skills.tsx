import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, TrendingUp, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Marketing & Strategy",
    icon: TrendingUp,
    skills: ["Marketing Strategy", "Digital Marketing", "SEO & Content Optimization", "Social Media Management", "Brand Development"],
  },
  {
    title: "Operations & Management",
    icon: Briefcase,
    skills: ["Operations Management", "Strategic Planning", "Project Management", "Team Leadership", "Process Optimization"],
  },
  {
    title: "Technical & Design",
    icon: Code,
    skills: ["Data Analysis", "Graphic Design", "Video Editing", "Financial Analysis", "Excel (PivotTables, VLOOKUP)"],
  },
  {
    title: "Tools & Platforms",
    icon: Users,
    skills: ["Canva", "Adobe Photoshop", "Microsoft Office Suite", "Google Analytics", "Meta Business Suite", "YouTube Studio"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
