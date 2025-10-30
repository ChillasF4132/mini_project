import { BarChart3, Brain, Shield, ArrowRight, LineChart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface LandingPageProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export function LandingPage({ onGetStarted, onLearnMore }: LandingPageProps) {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Track your portfolio performance with live updates and comprehensive market data visualization."
    },
    {
      icon: LineChart,
      title: "In-Depth Stock Analysis",
      description: "Access detailed stock information, historical charts, and key financial metrics at your fingertips."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and answers to your investment questions from our AI assistant."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your financial data is protected with enterprise-grade security and encrypted connections."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1748439281934-2803c6a3ee36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjB0ZWNobm9sb2d5JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MDE3MDcwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-[#004D40]/95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 py-24 relative z-10 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
              Invest with Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Your Portfolio, Perfected. Track, analyze, and grow your investments with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onLearnMore}
                className="border-white bg-white text-black hover:bg-white/90"
              >
                Beginner's Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4" style={{ fontWeight: 700 }}>
              Everything you need to invest smarter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed for both beginner and experienced investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
              Ready to take control of your investments?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of investors who trust InvestIQ for their portfolio management.
            </p>
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Start Investing Smarter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl" style={{ fontWeight: 700 }}>InvestIQ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 InvestIQ. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
