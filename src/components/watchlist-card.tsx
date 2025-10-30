import { TrendingUp, TrendingDown, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const watchlistStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 245.80, change: 3.45, changePercent: 1.42 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 178.90, change: 2.15, changePercent: 1.22 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 485.65, change: 5.80, changePercent: 1.21 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 385.60, change: 4.90, changePercent: 1.29 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 198.45, change: 2.90, changePercent: 1.48 }
];

interface WatchlistCardProps {
  onStockClick: (symbol: string) => void;
}

export function WatchlistCard({ onStockClick }: WatchlistCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Watchlist</CardTitle>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {watchlistStocks.map((stock) => {
            const isPositive = stock.change > 0;
            return (
              <div
                key={stock.symbol}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => onStockClick(stock.symbol)}
              >
                <div className="flex-1">
                  <p style={{ fontWeight: 600 }}>{stock.symbol}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {stock.name}
                  </p>
                </div>
                <div className="text-right">
                  <p style={{ fontWeight: 600 }}>₹{stock.price}</p>
                  <div className="flex items-center gap-1 justify-end">
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3" style={{ color: '#29D39A' }} />
                    ) : (
                      <TrendingDown className="h-3 w-3" style={{ color: '#D32F2F' }} />
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: isPositive ? '#29D39A' : '#D32F2F'
                      }}
                    >
                      {isPositive ? '+' : ''}{stock.changePercent}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
