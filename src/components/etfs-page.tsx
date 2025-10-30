import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface ETFsPageProps {
  onETFClick: (symbol: string) => void;
}

export function ETFsPage({ onETFClick }: ETFsPageProps) {
  const etfsData = [
    {
      symbol: "SPY",
      name: "SPDR S&P 500 ETF",
      price: 46895.50,
      change: 1.15,
      aum: 52467800000000,
      volume: 10678450000000,
      units: 100,
      category: "Large Cap",
      expenseRatio: 0.09,
    },
    {
      symbol: "QQQ",
      name: "Invesco QQQ Trust",
      price: 44562.80,
      change: 1.85,
      aum: 26789300000000,
      volume: 7234560000000,
      units: 80,
      category: "Technology",
      expenseRatio: 0.20,
    },
    {
      symbol: "VTI",
      name: "Vanguard Total Stock Market",
      price: 24678.90,
      change: 0.92,
      aum: 41567200000000,
      volume: 5789120000000,
      units: 150,
      category: "Total Market",
      expenseRatio: 0.03,
    },
    {
      symbol: "IWM",
      name: "iShares Russell 2000",
      price: 21456.75,
      change: 0.67,
      aum: 8934500000000,
      volume: 4234560000000,
      units: 120,
      category: "Small Cap",
      expenseRatio: 0.19,
    },
    {
      symbol: "EEM",
      name: "iShares MSCI Emerging Markets",
      price: 4234.90,
      change: 1.78,
      aum: 3123450000000,
      volume: 2987340000000,
      units: 200,
      category: "Emerging Markets",
      expenseRatio: 0.68,
    },
    {
      symbol: "GLD",
      name: "SPDR Gold Shares",
      price: 19876.50,
      change: 0.85,
      aum: 6789450000000,
      volume: 1567890000000,
      units: 50,
      category: "Commodities",
      expenseRatio: 0.40,
    },
  ];

  const totalValue = etfsData.reduce((sum, etf) => sum + (etf.price * etf.units), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Exchange-Traded Funds (ETFs)</h1>
        <p className="text-muted-foreground">
          Diversify your portfolio with ETF investments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total ETFs Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>₹{totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+2.34% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total ETFs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>{etfsData.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {new Set(etfsData.map(e => e.category)).size} categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Best Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>EEM</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+2.34%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>ETF Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">ETF</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-right p-4">Change</th>
                  <th className="text-right p-4">AUM</th>
                  <th className="text-right p-4">Expense Ratio</th>
                  <th className="text-right p-4">Units</th>
                  <th className="text-right p-4">Value</th>
                </tr>
              </thead>
              <tbody>
                {etfsData.map((etf) => (
                  <tr
                    key={etf.symbol}
                    className="border-b cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => onETFClick(etf.symbol)}
                  >
                    <td className="p-4">
                      <div>
                        <div style={{ fontWeight: 600 }}>{etf.symbol}</div>
                        <div className="text-sm text-muted-foreground">{etf.name}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary">{etf.category}</Badge>
                    </td>
                    <td className="text-right p-4">₹{etf.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="text-right p-4">
                      <Badge
                        variant="outline"
                        className={etf.change >= 0 ? "text-accent border-accent" : "text-destructive border-destructive"}
                      >
                        {etf.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {etf.change >= 0 ? "+" : ""}{etf.change}%
                      </Badge>
                    </td>
                    <td className="text-right p-4 text-muted-foreground">
                      ₹{(etf.aum / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}Cr
                    </td>
                    <td className="text-right p-4 text-muted-foreground">{etf.expenseRatio}%</td>
                    <td className="text-right p-4">{etf.units}</td>
                    <td className="text-right p-4" style={{ fontWeight: 600 }}>
                      ₹{(etf.price * etf.units).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
