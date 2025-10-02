import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <Card className="p-8 md:p-12 shadow-card gradient-card">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
            I am a talented and ambitious professional pursuing an <span className="font-semibold text-primary">MBA in Marketing from Eastern Michigan University</span>, with a proven track record of delivering exceptional results across marketing, operations, and project management domains.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
            My journey combines strategic thinking with creative execution—from increasing online visibility by <span className="font-semibold text-secondary">40%</span> through targeted digital campaigns to optimizing ad spend and driving <span className="font-semibold text-secondary">20%+ engagement growth</span>. I thrive in dynamic environments where analytical rigor meets innovative problem-solving.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            Whether it's developing comprehensive marketing strategies, managing cross-functional teams, or leveraging data analytics to drive business growth, I bring <span className="font-semibold text-primary">versatility, leadership, and an unwavering commitment to excellence</span>. I'm ready to take on any challenge and transform it into an opportunity for success.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
