import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Users, FileText, Trophy } from "lucide-react";

const projects = [
  {
    title: "Apex Computing Marketplace Simulation – MGMT 696 Capstone Project",
    role: "Strategic Leadership",
    location: "Eastern Michigan University",
    period: "Jan 2025 – Apr 2025",
    icon: Trophy,
    description: "Executed strategic leadership of a virtual tech company across 8 competitive quarters, achieving #1 overall performance in financial, marketing, and operational metrics.",
    achievements: [
      "30% ROI, outperforming all competitors",
      "15% boost in gross margin through analytics",
      "20% increase in customer satisfaction",
      "Double-digit revenue growth via market penetration",
    ],
    tags: ["Strategic Leadership", "Data Analytics", "Market Strategy", "Financial Management"],
  },
  {
    title: "Advertising Simulation with Stukent Mimic Pro",
    role: "Simternship - Virtual Intern",
    location: "Eastern Michigan University",
    period: "Jan 2023 – Apr 2023",
    icon: TrendingUp,
    description: "Developed and executed comprehensive digital advertising campaigns within the Stukent platform, utilizing strategic keyword selection, audience targeting, and landing page optimization.",
    achievements: [
      "15% reduction in wasted ad spend",
      "20% increase in follower engagement",
      "10% rise in website referrals",
    ],
    tags: ["Digital Marketing", "Campaign Management", "Analytics", "ROI Optimization"],
  },
  {
    title: "Employee Records Management Research",
    role: "Research Project",
    location: "ICFAI Business School",
    period: "Jul 2021 – Aug 2021",
    icon: FileText,
    description: "Conducted comprehensive research on employee records management systems and best practices for organizational efficiency.",
    achievements: [
      "Analyzed current HR systems",
      "Identified optimization opportunities",
      "Proposed strategic improvements",
    ],
    tags: ["HR Management", "Research", "Process Analysis"],
  },
  {
    title: "Mining Industry EIC Report",
    role: "Business Analysis",
    location: "ICFAI Business School",
    period: "2021",
    icon: Lightbulb,
    description: "Developed an Environmental Impact and Compliance (EIC) report for the mining industry, analyzing regulatory requirements and sustainability practices.",
    achievements: [
      "Comprehensive industry analysis",
      "Regulatory compliance assessment",
      "Sustainability recommendations",
    ],
    tags: ["Business Analysis", "Compliance", "Research"],
  },
  {
    title: "Airbnb Marketing Strategy Study",
    role: "Marketing Research",
    location: "Academic Project",
    period: "2022",
    icon: Users,
    description: "Conducted an in-depth marketing study analyzing Airbnb's strategies, market positioning, and growth tactics.",
    achievements: [
      "Market analysis and segmentation",
      "Competitive positioning study",
      "Strategic recommendations",
    ],
    tags: ["Marketing Strategy", "Market Research", "Analysis"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
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
                    <h3 className="text-xl font-bold gradient-text mb-1">{project.title}</h3>
                    <p className="text-sm text-secondary font-medium mb-1">{project.role}</p>
                    <p className="text-xs text-muted-foreground">{project.location} • {project.period}</p>
                  </div>
                </div>
                <p className="text-foreground/90 mb-4">{project.description}</p>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary mb-2">Key Achievements:</p>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
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

export default Projects;
