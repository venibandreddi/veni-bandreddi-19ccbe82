import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "./AnimatedCounter";
import { Trophy, TrendingUp, BarChart3, Target } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const apexRevenueData = [
  { quarter: "Q3", revenue: 1.3 },
  { quarter: "Q4", revenue: 15 },
  { quarter: "Q5", revenue: 45 },
  { quarter: "Q6", revenue: 78 },
  { quarter: "Q7", revenue: 112 },
  { quarter: "Q8", revenue: 145 },
  { quarter: "Q9", revenue: 172 },
  { quarter: "Q10", revenue: 188 },
  { quarter: "Q11", revenue: 198 },
  { quarter: "Q12", revenue: 208 },
];

const marketShareData = [
  { segment: "Traveler", share: 28 },
  { segment: "Innovator", share: 32 },
  { segment: "Workhorse", share: 25 },
  { segment: "Costcutter", share: 15 },
];

const stukentPerformance = [
  { metric: "Ad Spend Reduction", value: 15 },
  { metric: "Engagement Growth", value: 20 },
  { metric: "Referral Increase", value: 10 },
];

const COLORS = ['hsl(174 100% 38%)', 'hsl(45 93% 47%)', 'hsl(270 50% 50%)', 'hsl(200 80% 50%)'];

const ProjectsInteractive = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text animate-slide-up">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Data-driven achievements showcasing strategic leadership and measurable impact
        </p>

        {/* Apex Computing - Main Project */}
        <Card className="p-8 mb-8 shadow-card hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-accent text-primary-foreground p-4 rounded-lg shadow-glow">
              <Trophy className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                Marketplace Business Simulation - Apex Computing
              </h3>
              <p className="text-sm text-muted-foreground mb-1">Capstone Project - Virtual Intern</p>
              <p className="text-xs text-muted-foreground">Eastern Michigan University • Jan 2025 – Apr 2025</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/30">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter end={208} prefix="$" suffix="M" />
              </div>
              <p className="text-xs text-muted-foreground">Revenue by Q12</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/30">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter end={18} suffix="%" />
              </div>
              <p className="text-xs text-muted-foreground">Gross Margin</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/30">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                <AnimatedCounter end={250} suffix="%" />
              </div>
              <p className="text-xs text-muted-foreground">Market Share Growth</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/10 border border-secondary/30">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                #<AnimatedCounter end={1} />
              </div>
              <p className="text-xs text-muted-foreground">Balanced Scorecard</p>
            </div>
          </div>

          {/* Revenue Growth Chart */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-primary">Revenue Growth Trajectory</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={apexRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 39% 12%)" />
                <XAxis dataKey="quarter" stroke="hsl(217 19% 60%)" />
                <YAxis stroke="hsl(217 19% 60%)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(222 39% 8%)', 
                    border: '1px solid hsl(174 100% 38%)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(174 100% 38%)" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(45 93% 47%)', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Market Share Distribution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Market Share Distribution</h4>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ segment, share }) => `${segment}: ${share}%`}
                    outerRadius={80}
                    fill="hsl(174 100% 38%)"
                    dataKey="share"
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Key Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-secondary text-lg">•</span>
                  <span>Founded and managed Apex Computing, scaling from $1.3M to $208M revenue across 12 quarters</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-secondary text-lg">•</span>
                  <span>Designed 12+ laptop brands across 4 market segments, driving 250%+ market share expansion</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-secondary text-lg">•</span>
                  <span>Managed $100M+ budgets with 15% higher ROI vs. competitors</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <span className="text-secondary text-lg">•</span>
                  <span>Ranked #1 in Balanced Scorecard across all performance categories</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline" className="text-xs">Strategic Leadership</Badge>
            <Badge variant="outline" className="text-xs">Data Analytics</Badge>
            <Badge variant="outline" className="text-xs">Market Strategy</Badge>
            <Badge variant="outline" className="text-xs">Financial Management</Badge>
          </div>
        </Card>

        {/* Stukent Project */}
        <Card className="p-8 mb-8 shadow-card hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-gradient-purple text-primary-foreground p-4 rounded-lg shadow-glow">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Advertising Simulation with Stukent Mimic Pro
              </h3>
              <p className="text-sm text-muted-foreground mb-1">Simternship - Virtual Intern</p>
              <p className="text-xs text-muted-foreground">Eastern Michigan University • Jan 2023 – Apr 2023</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Performance Improvements</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={stukentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 39% 12%)" />
                  <XAxis dataKey="metric" stroke="hsl(217 19% 60%)" tick={{ fontSize: 10 }} />
                  <YAxis stroke="hsl(217 19% 60%)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(222 39% 8%)', 
                      border: '1px solid hsl(174 100% 38%)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(174 100% 38%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Campaign Highlights</h4>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    <AnimatedCounter end={15} suffix="%" />
                  </div>
                  <p className="text-sm">Reduction in wasted ad spend</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    <AnimatedCounter end={20} suffix="%" />
                  </div>
                  <p className="text-sm">Increase in follower engagement</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <div className="text-2xl font-bold gradient-text mb-1">
                    <AnimatedCounter end={10} suffix="%" />
                  </div>
                  <p className="text-sm">Rise in website referrals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="outline" className="text-xs">Digital Marketing</Badge>
            <Badge variant="outline" className="text-xs">Campaign Management</Badge>
            <Badge variant="outline" className="text-xs">Analytics</Badge>
            <Badge variant="outline" className="text-xs">ROI Optimization</Badge>
          </div>
        </Card>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-accent text-primary-foreground p-3 rounded-lg">
                <BarChart3 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold gradient-text">Airbnb Marketing Strategy Study</h3>
            </div>
            <p className="text-sm text-foreground/80 mb-4">
              Conducted in-depth marketing analysis of Airbnb's strategies, market positioning, and growth tactics.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">Market Research</Badge>
              <Badge variant="outline" className="text-xs">Strategy Analysis</Badge>
            </div>
          </Card>

          <Card className="p-6 shadow-card hover-lift hover-glow gradient-card border border-border/50 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-purple text-primary-foreground p-3 rounded-lg">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold gradient-text">Mining Industry EIC Report</h3>
            </div>
            <p className="text-sm text-foreground/80 mb-4">
              Developed comprehensive Environmental Impact and Compliance report analyzing regulatory requirements and sustainability practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">Business Analysis</Badge>
              <Badge variant="outline" className="text-xs">Compliance</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsInteractive;
