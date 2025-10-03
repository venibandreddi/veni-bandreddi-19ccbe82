import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text animate-slide-up">
          About Me
        </h2>
        <Card className="p-8 md:p-12 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
            As a talented and ambitious professional with an <span className="font-semibold gradient-text">MBA in Marketing from Eastern Michigan University</span>, I bring a proven track record of delivering exceptional results across marketing, operations, and project management domains.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
            My expertise lies in <span className="font-semibold text-primary">data-driven strategies, digital marketing, and business development</span>. I've increased online visibility by <span className="font-semibold text-primary">40%</span> through targeted campaigns, optimized ad spend to reduce waste by <span className="font-semibold text-primary">15%</span>, and driven <span className="font-semibold text-primary">20%+ engagement growth</span> across multiple platforms.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            I thrive in environments where <span className="font-semibold gradient-text">creativity and analytical thinking intersect</span>. Whether developing comprehensive marketing strategies, leading cross-functional teams, or leveraging advanced analytics, I combine versatility, leadership, and an unwavering commitment to excellence. I'm ready to achieve big results and transform any challenge into an opportunity for success.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
