import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface MutualFundsPageProps {
  onFundClick: (symbol: string) => void;
}

export function MutualFundsPage({ onFundClick }: MutualFundsPageProps) {
  const equityFunds = [
    {
      symbol: "AXIS-BLUECHIP",
      name: "Axis Bluechip Fund",
      nav: 58.90,
      change: 0.95,
      returns1Y: 21.34,
      returns3Y: 18.90,
      returns5Y: 16.85,
      aum: 52340,
      category: "Large Cap",
      rating: 5,
      invested: 50000,
    },
    {
      symbol: "ICICI-TECH",
      name: "ICICI Prudential Technology Fund",
      nav: 156.75,
      change: 1.85,
      returns1Y: 28.45,
      returns3Y: 25.60,
      returns5Y: 22.90,
      aum: 14567,
      category: "Sectoral",
      rating: 4,
      invested: 30000,
    },
    {
      symbol: "MIRAE-EMERGING",
      name: "Mirae Asset Emerging Bluechip Fund",
      nav: 98.45,
      change: 1.12,
      returns1Y: 19.85,
      returns3Y: 21.45,
      returns5Y: 19.80,
      aum: 39870,
      category: "Large & Mid Cap",
      rating: 5,
      invested: 40000,
    },
    {
      symbol: "PARAG-FLEXI",
      name: "Parag Parikh Flexi Cap Fund",
      nav: 72.60,
      change: 1.38,
      returns1Y: 23.70,
      returns3Y: 22.45,
      returns5Y: 20.90,
      aum: 64230,
      category: "Flexi Cap",
      rating: 5,
      invested: 60000,
    },
  ];

  const debtFunds = [
    {
      symbol: "HDFC-LIQUID",
      name: "HDFC Liquid Fund",
      nav: 5123.45,
      change: 0.03,
      returns1Y: 6.85,
      returns3Y: 6.50,
      returns5Y: 6.20,
      aum: 89450,
      category: "Liquid",
      rating: 4,
      invested: 100000,
    },
    {
      symbol: "ICICI-GILTSEC",
      name: "ICICI Prudential Gilt Fund",
      nav: 75.90,
      change: 0.08,
      returns1Y: 7.95,
      returns3Y: 7.20,
      returns5Y: 6.90,
      aum: 26780,
      category: "Gilt",
      rating: 4,
      invested: 50000,
    },
  ];

  const hybridFunds = [
    {
      symbol: "HDFC-BALANCED",
      name: "HDFC Balanced Advantage Fund",
      nav: 289.70,
      change: 0.92,
      returns1Y: 14.90,
      returns3Y: 13.85,
      returns5Y: 12.60,
      aum: 76340,
      category: "Balanced",
      rating: 5,
      invested: 70000,
    },
    {
      symbol: "ICICI-AGGRESSIVE",
      name: "ICICI Prudential Equity & Debt Fund",
      nav: 218.45,
      change: 1.05,
      returns1Y: 17.25,
      returns3Y: 15.90,
      returns5Y: 14.80,
      aum: 52890,
      category: "Aggressive Hybrid",
      rating: 4,
      invested: 50000,
    },
  ];

  const totalInvested = [...equityFunds, ...debtFunds, ...hybridFunds].reduce(
    (sum, fund) => sum + fund.invested,
    0
  );

  const totalCurrentValue = [...equityFunds, ...debtFunds, ...hybridFunds].reduce(
    (sum, fund) => sum + fund.invested * (1 + fund.returns1Y / 100),
    0
  );

  const renderFundTable = (funds: any[]) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Fund Name</th>
            <th className="text-left p-4">Category</th>
            <th className="text-right p-4">NAV</th>
            <th className="text-right p-4">1D Change</th>
            <th className="text-right p-4">1Y Returns</th>
            <th className="text-right p-4">3Y Returns</th>
            <th className="text-right p-4">5Y Returns</th>
            <th className="text-right p-4">AUM (Cr)</th>
            <th className="text-right p-4">Rating</th>
            <th className="text-right p-4">Invested</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((fund) => (
            <tr
              key={fund.symbol}
              className="border-b cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => onFundClick(fund.symbol)}
            >
              <td className="p-4">
                <div>
                  <div style={{ fontWeight: 600 }}>{fund.symbol}</div>
                  <div className="text-sm text-muted-foreground">{fund.name}</div>
                </div>
              </td>
              <td className="p-4">
                <Badge variant="secondary">{fund.category}</Badge>
              </td>
              <td className="text-right p-4">
                ₹{fund.nav.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="text-right p-4">
                <Badge
                  variant="outline"
                  className={fund.change >= 0 ? "text-accent border-accent" : "text-destructive border-destructive"}
                >
                  {fund.change >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {fund.change >= 0 ? "+" : ""}{fund.change}%
                </Badge>
              </td>
              <td className="text-right p-4 text-accent">{fund.returns1Y}%</td>
              <td className="text-right p-4 text-muted-foreground">{fund.returns3Y}%</td>
              <td className="text-right p-4 text-muted-foreground">{fund.returns5Y}%</td>
              <td className="text-right p-4 text-muted-foreground">
                ₹{fund.aum.toLocaleString('en-IN')}
              </td>
              <td className="text-right p-4">
                <div className="flex justify-end gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < fund.rating ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
              </td>
              <td className="text-right p-4" style={{ fontWeight: 600 }}>
                ₹{fund.invested.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Mutual Funds</h1>
        <p className="text-muted-foreground">
          Track and manage your mutual fund investments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              ₹{totalInvested.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">Across all funds</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              ₹{totalCurrentValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+{((totalCurrentValue - totalInvested) / totalInvested * 100).toFixed(2)}%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Gains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-accent" style={{ fontWeight: 700 }}>
              ₹{(totalCurrentValue - totalInvested).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">Unrealized gains</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Funds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              {equityFunds.length + debtFunds.length + hybridFunds.length}
            </div>
            <p className="text-xs text-muted-foreground">Active investments</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="equity" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="equity">Equity Funds</TabsTrigger>
          <TabsTrigger value="debt">Debt Funds</TabsTrigger>
          <TabsTrigger value="hybrid">Hybrid Funds</TabsTrigger>
        </TabsList>

        <TabsContent value="equity">
          <Card>
            <CardHeader>
              <CardTitle>Equity Mutual Funds</CardTitle>
            </CardHeader>
            <CardContent>{renderFundTable(equityFunds)}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debt">
          <Card>
            <CardHeader>
              <CardTitle>Debt Mutual Funds</CardTitle>
            </CardHeader>
            <CardContent>{renderFundTable(debtFunds)}</CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hybrid">
          <Card>
            <CardHeader>
              <CardTitle>Hybrid Mutual Funds</CardTitle>
            </CardHeader>
            <CardContent>{renderFundTable(hybridFunds)}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
