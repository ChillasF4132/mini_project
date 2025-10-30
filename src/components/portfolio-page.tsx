import { TrendingUp, TrendingDown, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { InvestmentAdvisor } from "./investment-advisor";

const portfolioHoldings = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    quantity: 150,
    avgCost: 165.50,
    currentPrice: 245.80,
    dayChange: 3.45,
    dayChangePercent: 1.42
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corp.",
    quantity: 75,
    avgCost: 340.20,
    currentPrice: 485.65,
    dayChange: 5.80,
    dayChangePercent: 1.21
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    quantity: 100,
    avgCost: 138.75,
    currentPrice: 178.90,
    dayChange: 2.15,
    dayChangePercent: 1.22
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    quantity: 80,
    avgCost: 142.60,
    currentPrice: 198.45,
    dayChange: 2.90,
    dayChangePercent: 1.48
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corp.",
    quantity: 50,
    avgCost: 485.30,
    currentPrice: 875.20,
    dayChange: 12.50,
    dayChangePercent: 1.45
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    quantity: 60,
    avgCost: 325.80,
    currentPrice: 512.35,
    dayChange: 6.75,
    dayChangePercent: 1.33
  }
];

interface PortfolioPageProps {
  onStockClick: (symbol: string) => void;
  user: { name: string; email: string };
}

export function PortfolioPage({ onStockClick, user }: PortfolioPageProps) {
  const totalValue = portfolioHoldings.reduce(
    (sum, stock) => sum + stock.quantity * stock.currentPrice,
    0
  );
  const totalGainLoss = portfolioHoldings.reduce(
    (sum, stock) => sum + stock.quantity * (stock.currentPrice - stock.avgCost),
    0
  );
  const totalGainLossPercent = (totalGainLoss / (totalValue - totalGainLoss)) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-4">Portfolio</h1>
        
        {/* Investment Advisor */}
        <InvestmentAdvisor onStockClick={onStockClick} userName={user.name || "Investor"} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Value</p>
              <p className="text-2xl" style={{ fontWeight: 700 }}>
                ₹{totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Gain/Loss</p>
              <p
                className="text-2xl"
                style={{
                  fontWeight: 700,
                  color: totalGainLoss >= 0 ? '#29D39A' : '#D32F2F'
                }}
              >
                {totalGainLoss >= 0 ? '+' : ''}₹{totalGainLoss.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Return</p>
              <p
                className="text-2xl"
                style={{
                  fontWeight: 700,
                  color: totalGainLossPercent >= 0 ? '#29D39A' : '#D32F2F'
                }}
              >
                {totalGainLossPercent >= 0 ? '+' : ''}{totalGainLossPercent.toFixed(2)}%
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Holdings</CardTitle>
          <div className="flex gap-2">
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Buy
            </Button>
            <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
              Sell
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Avg Cost</TableHead>
                  <TableHead className="text-right">Current Price</TableHead>
                  <TableHead className="text-right">Day's Change</TableHead>
                  <TableHead className="text-right">Total Value</TableHead>
                  <TableHead className="text-right">Gain/Loss</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portfolioHoldings.map((stock) => {
                  const totalValue = stock.quantity * stock.currentPrice;
                  const gainLoss = stock.quantity * (stock.currentPrice - stock.avgCost);
                  const gainLossPercent = ((stock.currentPrice - stock.avgCost) / stock.avgCost) * 100;
                  const isDayPositive = stock.dayChange > 0;
                  const isGainPositive = gainLoss >= 0;

                  return (
                    <TableRow
                      key={stock.symbol}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => onStockClick(stock.symbol)}
                    >
                      <TableCell style={{ fontWeight: 600 }}>{stock.symbol}</TableCell>
                      <TableCell>{stock.name}</TableCell>
                      <TableCell className="text-right">{stock.quantity}</TableCell>
                      <TableCell className="text-right">₹{stock.avgCost.toFixed(2)}</TableCell>
                      <TableCell className="text-right">₹{stock.currentPrice.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          {isDayPositive ? (
                            <TrendingUp className="h-3 w-3" style={{ color: '#29D39A' }} />
                          ) : (
                            <TrendingDown className="h-3 w-3" style={{ color: '#D32F2F' }} />
                          )}
                          <span style={{ color: isDayPositive ? '#29D39A' : '#D32F2F' }}>
                            {isDayPositive ? '+' : ''}{stock.dayChangePercent.toFixed(2)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        ₹{totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div style={{ color: isGainPositive ? '#29D39A' : '#D32F2F' }}>
                          <div style={{ fontWeight: 600 }}>
                            {isGainPositive ? '+' : ''}₹{Math.abs(gainLoss).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                          <div className="text-sm">
                            ({isGainPositive ? '+' : ''}{gainLossPercent.toFixed(2)}%)
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
