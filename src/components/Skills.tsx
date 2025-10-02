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
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-card hover:shadow-glow transition-all duration-300 gradient-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm px-3 py-1"
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
