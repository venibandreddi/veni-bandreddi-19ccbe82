import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "./AnimatedCounter";
import { TrendingUp, Code, Users, Briefcase } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

const skillsData = [
  { name: "Marketing Strategy", level: 95, category: "Marketing" },
  { name: "Data Analysis", level: 90, category: "Technical" },
  { name: "Strategic Planning", level: 92, category: "Management" },
  { name: "Digital Marketing", level: 93, category: "Marketing" },
  { name: "Project Management", level: 88, category: "Management" },
  { name: "Graphic Design", level: 85, category: "Creative" },
  { name: "Video Editing", level: 82, category: "Creative" },
  { name: "Financial Analysis", level: 87, category: "Technical" },
  { name: "Operations Management", level: 89, category: "Management" },
  { name: "Team Leadership", level: 90, category: "Management" },
];

const tools = [
  { name: "Excel", icon: "📊", proficiency: 95 },
  { name: "Power BI", icon: "📈", proficiency: 88 },
  { name: "SQL", icon: "💾", proficiency: 85 },
  { name: "Canva", icon: "🎨", proficiency: 92 },
  { name: "Photoshop", icon: "🖼️", proficiency: 87 },
  { name: "Microsoft Suite", icon: "📁", proficiency: 93 },
];

const SkillBar = ({ skill, index }: { skill: typeof skillsData[0]; index: number }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div ref={ref} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm font-bold gradient-text">
          <AnimatedCounter end={skill.level} suffix="%" duration={1500} />
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

const SkillsInteractive = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text animate-slide-up">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Data-driven proficiency across marketing, analytics, and creative domains
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Core Skills */}
          <Card className="p-8 shadow-card hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg shadow-glow">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Core Competencies</h3>
            </div>
            <div className="space-y-4">
              {skillsData.slice(0, 5).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </Card>

          {/* Additional Skills */}
          <Card className="p-8 shadow-card hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-purple text-primary-foreground p-3 rounded-lg shadow-glow">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Specialized Skills</h3>
            </div>
            <div className="space-y-4">
              {skillsData.slice(5).map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index + 5} />
              ))}
            </div>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="p-8 shadow-card hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg shadow-glow">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold gradient-text">Tools & Technologies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                <div className="relative inline-block mb-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-accent/10 border-2 border-primary/30 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                    {tool.icon}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-glow">
                    <AnimatedCounter end={tool.proficiency} duration={2000} />
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsInteractive;
