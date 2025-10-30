import { ArrowLeft, TrendingUp, DollarSign, Target, PieChart, Shield, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface BeginnerGuideProps {
  onBack: () => void;
  onGetStarted: () => void;
}

export function BeginnerGuide({ onBack, onGetStarted }: BeginnerGuideProps) {
  const investingSteps = [
    {
      icon: Target,
      title: "Set Your Financial Goals",
      description: "Define what you're investing for - retirement, a house, education, or wealth building. Having clear goals helps determine your investment strategy and time horizon."
    },
    {
      icon: DollarSign,
      title: "Start with an Emergency Fund",
      description: "Before investing, save 3-6 months of expenses in an easily accessible account. This protects your investments from being liquidated during emergencies."
    },
    {
      icon: PieChart,
      title: "Diversify Your Portfolio",
      description: "Don't put all your eggs in one basket. Spread investments across different sectors, asset classes, and geographic regions to reduce risk."
    },
    {
      icon: TrendingUp,
      title: "Think Long-Term",
      description: "Successful investing is a marathon, not a sprint. Stay invested through market ups and downs, and avoid trying to time the market."
    }
  ];

  const tips = [
    {
      icon: BookOpen,
      title: "Educate Yourself",
      points: [
        "Learn about different investment types: stocks, bonds, ETFs, and mutual funds",
        "Understand basic financial metrics like P/E ratio, dividend yield, and market cap",
        "Follow reputable financial news sources and educational content",
        "Consider reading classic investing books like 'The Intelligent Investor'"
      ]
    },
    {
      icon: Shield,
      title: "Risk Management",
      points: [
        "Only invest money you can afford to lose",
        "Don't invest based on tips or trends without research",
        "Understand your risk tolerance and invest accordingly",
        "Review and rebalance your portfolio regularly"
      ]
    },
    {
      icon: Lightbulb,
      title: "Smart Investing Tips",
      points: [
        "Start small and increase investments as you learn",
        "Consider dollar-cost averaging - invest fixed amounts regularly",
        "Minimize fees by choosing low-cost index funds or ETFs",
        "Take advantage of tax-advantaged accounts when possible",
        "Avoid emotional decisions - stick to your investment plan"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>
            Beginner's Guide to Investing
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Start your investment journey with confidence. Learn the fundamentals and best practices for building wealth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Getting Started Steps */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            Getting Started: 4 Essential Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {investingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-sm mb-2" style={{ fontWeight: 600 }}>
                          Step {index + 1}
                        </div>
                        <CardTitle>{step.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Tips and Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            Tips & Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tip.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Common Investment Types */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            Common Investment Types for Beginners
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Index Funds & ETFs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Low-cost funds that track market indexes like the S&P 500. Great for beginners due to instant diversification and minimal management.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm" style={{ fontWeight: 600 }}>
                  Recommended for Beginners
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Individual Stocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Shares of individual companies. Requires more research and carries higher risk, but offers potential for higher returns and ownership in companies you believe in.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm" style={{ fontWeight: 600 }}>
                  Moderate Experience Required
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bonds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Fixed-income securities that provide regular interest payments. Generally lower risk than stocks but with lower potential returns. Good for conservative portfolios.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm" style={{ fontWeight: 600 }}>
                  Low Risk
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mutual Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Professionally managed portfolios of stocks and bonds. Offers diversification and professional management, but typically has higher fees than ETFs.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm" style={{ fontWeight: 600 }}>
                  Beginner Friendly
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl mb-4" style={{ fontWeight: 700 }}>
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-xl mb-6 text-primary-foreground/90">
                Join InvestIQ and put these principles into practice with our easy-to-use platform.
              </p>
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Get Started for Free
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
