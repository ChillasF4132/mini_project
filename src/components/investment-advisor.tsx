import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface StockRecommendation {
  symbol: string;
  name: string;
  sector: string;
  currentPrice: number;
  recommendedAllocation: number;
  expectedReturn: string;
  riskLevel: "Low" | "Medium" | "High";
  reason: string;
}

export function InvestmentAdvisor({ onStockClick, userName = "Investor" }: { onStockClick: (symbol: string) => void; userName?: string }) {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState<"short" | "long" | "">("");
  const [recommendations, setRecommendations] = useState<StockRecommendation[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const generateRecommendations = () => {
    const investmentAmount = parseFloat(amount);
    
    if (!investmentAmount || investmentAmount <= 0 || !duration) {
      return;
    }

    let stockRecommendations: StockRecommendation[] = [];

    if (duration === "short") {
      // Short-term (3-12 months): Focus on growth stocks, momentum plays, and liquid stocks
      stockRecommendations = [
        {
          symbol: "NVDA",
          name: "NVIDIA Corp.",
          sector: "Technology - Semiconductors",
          currentPrice: 875.20,
          recommendedAllocation: 25,
          expectedReturn: "15-25%",
          riskLevel: "High",
          reason: "Strong AI momentum with high volatility, suitable for short-term gains"
        },
        {
          symbol: "TSLA",
          name: "Tesla Inc.",
          sector: "Automotive - EV",
          currentPrice: 298.45,
          recommendedAllocation: 20,
          expectedReturn: "12-20%",
          riskLevel: "High",
          reason: "High beta stock with strong price momentum and news-driven volatility"
        },
        {
          symbol: "RELIANCE",
          name: "Reliance Industries",
          sector: "Conglomerate",
          currentPrice: 2845.60,
          recommendedAllocation: 20,
          expectedReturn: "8-15%",
          riskLevel: "Medium",
          reason: "Diversified business model with upcoming expansion plans"
        },
        {
          symbol: "INFY",
          name: "Infosys Ltd.",
          sector: "IT Services",
          currentPrice: 1856.30,
          recommendedAllocation: 15,
          expectedReturn: "10-18%",
          riskLevel: "Medium",
          reason: "Strong quarterly results expected, good liquidity for short-term trading"
        },
        {
          symbol: "TCS",
          name: "Tata Consultancy Services",
          sector: "IT Services",
          currentPrice: 4238.75,
          recommendedAllocation: 20,
          expectedReturn: "8-12%",
          riskLevel: "Low",
          reason: "Stable performer with consistent earnings, lower risk anchor"
        }
      ];
    } else {
      // Long-term (1+ years): Focus on fundamentally strong companies with growth potential
      stockRecommendations = [
        {
          symbol: "AAPL",
          name: "Apple Inc.",
          sector: "Technology - Consumer Electronics",
          currentPrice: 245.80,
          recommendedAllocation: 20,
          expectedReturn: "40-60%",
          riskLevel: "Medium",
          reason: "Strong brand ecosystem, consistent innovation, and services growth"
        },
        {
          symbol: "MSFT",
          name: "Microsoft Corp.",
          sector: "Technology - Software",
          currentPrice: 485.65,
          recommendedAllocation: 20,
          expectedReturn: "45-70%",
          riskLevel: "Medium",
          reason: "Cloud computing leader with AI integration, strong fundamentals"
        },
        {
          symbol: "GOOGL",
          name: "Alphabet Inc.",
          sector: "Technology - Internet",
          currentPrice: 178.90,
          recommendedAllocation: 15,
          expectedReturn: "35-55%",
          riskLevel: "Medium",
          reason: "Dominant search engine with growing cloud and AI capabilities"
        },
        {
          symbol: "HDFCBANK",
          name: "HDFC Bank",
          sector: "Banking & Finance",
          currentPrice: 1698.40,
          recommendedAllocation: 15,
          expectedReturn: "30-50%",
          riskLevel: "Low",
          reason: "India's leading private bank with strong asset quality and growth"
        },
        {
          symbol: "RELIANCE",
          name: "Reliance Industries",
          sector: "Conglomerate",
          currentPrice: 2845.60,
          recommendedAllocation: 15,
          expectedReturn: "35-60%",
          riskLevel: "Low",
          reason: "Diversified conglomerate with energy, retail, and telecom verticals"
        },
        {
          symbol: "BHARTIARTL",
          name: "Bharti Airtel",
          sector: "Telecom",
          currentPrice: 1645.25,
          recommendedAllocation: 15,
          expectedReturn: "40-65%",
          riskLevel: "Medium",
          reason: "Market leader in telecom with 5G expansion and digital services"
        }
      ];
    }

    // Calculate actual amounts based on allocation percentages
    const recommendationsWithAmounts = stockRecommendations.map(stock => ({
      ...stock,
      recommendedAmount: (investmentAmount * stock.recommendedAllocation) / 100
    }));

    setRecommendations(recommendationsWithAmounts as any);
    setShowRecommendations(true);
  };

  const handleReset = () => {
    setAmount("");
    setDuration("");
    setRecommendations([]);
    setShowRecommendations(false);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "#29D39A";
      case "Medium":
        return "#FFA726";
      case "High":
        return "#D32F2F";
      default:
        return "#666";
    }
  };

  return (
    <Card className="mb-6" style={{ borderColor: '#1A237E' }}>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" style={{ color: '#1A237E' }} />
          <CardTitle>Investment Advisor</CardTitle>
        </div>
        <CardDescription>
          Hello {userName}! Get personalized stock recommendations based on your investment amount and time horizon
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showRecommendations ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Investment Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount to invest"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="1000"
              />
            </div>

            <div className="space-y-3">
              <Label>Investment Duration</Label>
              <RadioGroup value={duration} onValueChange={(value) => setDuration(value as "short" | "long")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="short" id="short" />
                  <Label htmlFor="short" className="cursor-pointer">
                    <div>
                      <div style={{ fontWeight: 600 }}>Short-term (3-12 months)</div>
                      <div className="text-sm text-muted-foreground">
                        Higher risk, growth-focused stocks for quick returns
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="long" id="long" />
                  <Label htmlFor="long" className="cursor-pointer">
                    <div>
                      <div style={{ fontWeight: 600 }}>Long-term (1+ years)</div>
                      <div className="text-sm text-muted-foreground">
                        Balanced risk, fundamentally strong companies for wealth creation
                      </div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button
              onClick={generateRecommendations}
              disabled={!amount || !duration}
              className="w-full bg-primary hover:bg-primary/90"
              style={{ backgroundColor: '#1A237E' }}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Get Recommendations
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4 p-4 bg-muted rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Investment Amount</p>
                <p className="text-xl" style={{ fontWeight: 700 }}>
                  ₹{parseFloat(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p style={{ fontWeight: 600 }}>
                  {duration === "short" ? "Short-term (3-12 months)" : "Long-term (1+ years)"}
                </p>
              </div>
              <Button variant="outline" onClick={handleReset}>
                New Search
              </Button>
            </div>

            <div className="space-y-3">
              <h3 style={{ fontWeight: 600 }}>Recommended Portfolio Allocation</h3>
              {recommendations.map((stock, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  onClick={() => onStockClick(stock.symbol)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ fontWeight: 700 }}>{stock.symbol}</span>
                        <Badge variant="outline" style={{ 
                          borderColor: getRiskColor(stock.riskLevel),
                          color: getRiskColor(stock.riskLevel)
                        }}>
                          {stock.riskLevel} Risk
                        </Badge>
                      </div>
                      <p className="text-sm mb-1">{stock.name}</p>
                      <p className="text-sm text-muted-foreground">{stock.sector}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 pt-3 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Allocation</p>
                      <p style={{ fontWeight: 600 }}>{stock.recommendedAllocation}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p style={{ fontWeight: 600 }}>
                        ₹{((stock as any).recommendedAmount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Price</p>
                      <p style={{ fontWeight: 600 }}>₹{stock.currentPrice.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expected Return</p>
                      <p style={{ fontWeight: 600, color: '#29D39A' }}>
                        <TrendingUp className="h-3 w-3 inline mr-1" />
                        {stock.expectedReturn}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-muted rounded text-sm">
                    <span style={{ fontWeight: 600 }}>Why this stock: </span>
                    {stock.reason}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <p className="text-sm" style={{ fontWeight: 600 }}>📊 Important Note:</p>
              <p className="text-sm text-muted-foreground mt-1">
                These recommendations are for educational purposes only and should not be considered as financial advice. 
                Past performance does not guarantee future results. Please consult with a certified financial advisor before making investment decisions.
                Consider your risk tolerance, financial goals, and investment horizon before investing.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
