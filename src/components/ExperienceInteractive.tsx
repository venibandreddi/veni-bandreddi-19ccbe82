import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "./AnimatedCounter";
import { Briefcase, TrendingUp, Users, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

const experiences = [
  {
    company: "EliteUS Software Solutions LLC",
    role: "Business Development Trainee",
    location: "Edison, New Jersey",
    period: "Aug 2025 – Present",
    icon: Briefcase,
    achievements: [
      "Support outreach efforts to prospective clients through strategic proposal development",
      "Collaborate remotely with cross-functional teams on project execution",
      "Maintain strict confidentiality standards in client engagement processes",
    ],
    impact: { label: "Client Engagement", value: 85 },
  },
  {
    company: "SUKUMAR WRITINGS PVT. LTD.",
    role: "Digital Marketing Specialist",
    location: "Hyderabad, India",
    period: "Feb 2020 – Present",
    icon: TrendingUp,
    achievements: [
      "Increased online visibility by 40% through targeted multi-platform campaigns",
      "Improved organic website traffic by 30% using SEO best practices",
      "Managed film promotions creating trailers, posters, and promotional content",
      "Monitored performance via Google Analytics, Meta Business Suite, and YouTube Studio",
    ],
    metrics: [
      { label: "Visibility Increase", value: 40 },
      { label: "Traffic Growth", value: 30 },
    ],
  },
  {
    company: "Disability Resource Center - EMU",
    role: "Computer Lab Assistant",
    location: "Ypsilanti, Michigan",
    period: "Feb 2023 – Apr 2025",
    icon: Users,
    achievements: [
      "Evaluated and instructed students with disabilities on adaptive technology",
      "Scheduled and conducted exams providing necessary assistance and support",
      "Collaborated with DRC to create inclusive educational environments",
      "Enhanced campus accessibility through technology integration",
    ],
    impact: { label: "Student Support", value: 92 },
  },
  {
    company: "Artemis Foundation",
    role: "HR Intern",
    location: "Hyderabad, India",
    period: "May 2021 – Aug 2021",
    icon: Heart,
    achievements: [
      "Managed HR Information System (HRIS) to streamline employee data",
      "Assisted in planning and coordinating training sessions and workshops",
      "Supported recruiting, onboarding, and employee engagement programs",
    ],
    impact: { label: "Process Efficiency", value: 78 },
  },
];

const ImpactMeter = ({ impact, index }: { impact: { label: string; value: number }; index: number }) => {
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
        setProgress(impact.value);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, impact.value, index]);

  return (
    <div ref={ref} className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-primary">{impact.label}</span>
        <span className="text-sm font-bold gradient-text">
          <AnimatedCounter end={impact.value} suffix="%" duration={1500} />
        </span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

const ExperienceInteractive = () => {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text animate-slide-up">
          Professional Experience
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Driving results through strategic initiatives and cross-functional collaboration
        </p>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold gradient-text mb-1">{exp.company}</h3>
                    <p className="text-lg text-primary font-semibold mb-1">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location} • {exp.period}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {"metrics" in exp ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.metrics.map((metric, metricIndex) => (
                      <ImpactMeter key={metricIndex} impact={metric} index={metricIndex} />
                    ))}
                  </div>
                ) : (
                  <ImpactMeter impact={exp.impact} index={0} />
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceInteractive;
