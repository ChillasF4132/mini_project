import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface USStocksPageProps {
  onStockClick: (symbol: string) => void;
}

export function USStocksPage({ onStockClick }: USStocksPageProps) {
  const stocksData = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 20893.00,
      change: 1.42,
      marketCap: 327225000000000,
      volume: 4989950000000,
      shares: 50,
      sector: "Technology",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: 41280.25,
      change: 1.21,
      marketCap: 306885000000000,
      volume: 2244000000000,
      shares: 30,
      sector: "Technology",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 15206.50,
      change: 1.22,
      marketCap: 189550000000000,
      volume: 2652000000000,
      shares: 40,
      sector: "Technology",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 16868.25,
      change: 1.48,
      marketCap: 206890000000000,
      volume: 4267250000000,
      shares: 25,
      sector: "Consumer",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 32776.00,
      change: 1.29,
      marketCap: 122570000000000,
      volume: 5984000000000,
      shares: 20,
      sector: "Automotive",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      price: 74392.00,
      change: 1.45,
      marketCap: 183010000000000,
      volume: 5893250000000,
      shares: 15,
      sector: "Technology",
    },
  ];

  const totalValue = stocksData.reduce((sum, stock) => sum + (stock.price * stock.shares), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">US Stocks</h1>
        <p className="text-muted-foreground">
          Track your US stock market investments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total US Stocks Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>₹{totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+3.45% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>{stocksData.length}</div>
            <p className="text-xs text-muted-foreground">
              Across {new Set(stocksData.map(s => s.sector)).size} sectors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Top Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>NVDA</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+4.87%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>US Stock Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Stock</th>
                  <th className="text-left p-4">Sector</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-right p-4">Change</th>
                  <th className="text-right p-4">Market Cap</th>
                  <th className="text-right p-4">Shares</th>
                  <th className="text-right p-4">Value</th>
                </tr>
              </thead>
              <tbody>
                {stocksData.map((stock) => (
                  <tr
                    key={stock.symbol}
                    className="border-b cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => onStockClick(stock.symbol)}
                  >
                    <td className="p-4">
                      <div>
                        <div style={{ fontWeight: 600 }}>{stock.symbol}</div>
                        <div className="text-sm text-muted-foreground">{stock.name}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="secondary">{stock.sector}</Badge>
                    </td>
                    <td className="text-right p-4">₹{stock.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="text-right p-4">
                      <Badge
                        variant="outline"
                        className={stock.change >= 0 ? "text-accent border-accent" : "text-destructive border-destructive"}
                      >
                        {stock.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {stock.change >= 0 ? "+" : ""}{stock.change}%
                      </Badge>
                    </td>
                    <td className="text-right p-4 text-muted-foreground">
                      ₹{(stock.marketCap / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}Cr
                    </td>
                    <td className="text-right p-4">{stock.shares}</td>
                    <td className="text-right p-4" style={{ fontWeight: 600 }}>
                      ₹{(stock.price * stock.shares).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
