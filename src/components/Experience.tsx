import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    company: "EliteUS Software Solutions LLC",
    role: "Business Development Trainee",
    location: "Edison, New Jersey",
    period: "Aug 2025 – Present",
    achievements: [
      "Supported outreach efforts to prospective clients by preparing introductory decks and updating proposal templates",
      "Attended team meetings and shadowed senior staff during client engagement and sales processes",
      "Collaborated remotely with team members maintaining company confidentiality standards",
    ],
  },
  {
    company: "Sukumar Writings Pvt. Ltd.",
    role: "Digital Marketing Specialist",
    location: "Hyderabad, India",
    period: "Feb 2020 – Present",
    achievements: [
      "Increased online visibility by 40% within six months through targeted campaigns on Instagram, YouTube, and Twitter",
      "Improved organic website traffic by 30% using SEO best practices and content optimization",
      "Managed film promotions creating trailers, posters, and behind-the-scenes content",
      "Monitored performance via Google Analytics, Meta Business Suite, and YouTube Studio to optimize ROI",
    ],
  },
  {
    company: "Eastern Michigan University - Disability Resource Center",
    role: "Computer Lab Assistant - CATE Lab",
    location: "Ypsilanti, Michigan",
    period: "Feb 2023 – Apr 2025",
    achievements: [
      "Evaluated and instructed students with disabilities on using adaptive technology",
      "Scheduled and conducted exams providing necessary assistance and support",
      "Collaborated with DRC to create inclusive and accessible educational environments",
      "Enhanced campus accessibility and integrated technology for improved learning experiences",
    ],
  },
  {
    company: "Artemis Foundation (Non-Profit)",
    role: "HR Intern",
    location: "Hyderabad, India",
    period: "May 2021 – Aug 2021",
    achievements: [
      "Managed and maintained HR Information System (HRIS) to streamline employee data",
      "Assisted in planning and coordinating training sessions and workshops",
      "Supported HR team with recruiting, onboarding, and daily operations",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-glow transition-all duration-300 gradient-card"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.company}</h3>
                  <p className="text-xl font-semibold text-secondary mb-2">{exp.role}</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-muted-foreground">
                    <span>{exp.location}</span>
                    <span className="hidden md:block">•</span>
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
