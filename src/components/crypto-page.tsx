import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "./ui/badge";

interface CryptoPageProps {
  onCryptoClick: (symbol: string) => void;
}

export function CryptoPage({ onCryptoClick }: CryptoPageProps) {
  const cryptoData = [
    {
      symbol: "BTC",
      name: "Bitcoin",
      price: 5845720.00,
      change: 3.25,
      marketCap: 11467300000000,
      volume: 4856200000000,
      holdings: 0.5,
    },
    {
      symbol: "ETH",
      name: "Ethereum",
      price: 278940.50,
      change: 2.85,
      marketCap: 3352800000000,
      volume: 2345600000000,
      holdings: 2.3,
    },
    {
      symbol: "BNB",
      name: "Binance Coin",
      price: 38950.75,
      change: 1.95,
      marketCap: 567840000000,
      volume: 124560000000,
      holdings: 5.0,
    },
    {
      symbol: "SOL",
      name: "Solana",
      price: 16785.30,
      change: 4.67,
      marketCap: 684520000000,
      volume: 198450000000,
      holdings: 10.5,
    },
    {
      symbol: "XRP",
      name: "Ripple",
      price: 63.85,
      change: 2.48,
      marketCap: 356790000000,
      volume: 145670000000,
      holdings: 1000,
    },
    {
      symbol: "ADA",
      name: "Cardano",
      price: 48.70,
      change: 1.92,
      marketCap: 167890000000,
      volume: 68450000000,
      holdings: 500,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Cryptocurrency</h1>
        <p className="text-muted-foreground">
          Track and manage your crypto portfolio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Crypto Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>₹12,45,678.90</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+5.67% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>₹51,12,450.00</div>
            <p className="text-xs text-muted-foreground">
              Across all cryptocurrencies
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Top Gainer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>SOL</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+5.89%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Cryptocurrency</th>
                  <th className="text-right p-4">Price</th>
                  <th className="text-right p-4">24h Change</th>
                  <th className="text-right p-4">Market Cap</th>
                  <th className="text-right p-4">Volume</th>
                  <th className="text-right p-4">Holdings</th>
                  <th className="text-right p-4">Value</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.map((crypto) => (
                  <tr
                    key={crypto.symbol}
                    className="border-b cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => onCryptoClick(crypto.symbol)}
                  >
                    <td className="p-4">
                      <div>
                        <div style={{ fontWeight: 600 }}>{crypto.symbol}</div>
                        <div className="text-sm text-muted-foreground">{crypto.name}</div>
                      </div>
                    </td>
                    <td className="text-right p-4">₹{crypto.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className="text-right p-4">
                      <Badge
                        variant="outline"
                        className={crypto.change >= 0 ? "text-accent border-accent" : "text-destructive border-destructive"}
                      >
                        {crypto.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {crypto.change >= 0 ? "+" : ""}{crypto.change}%
                      </Badge>
                    </td>
                    <td className="text-right p-4 text-muted-foreground">
                      ₹{(crypto.marketCap / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}Cr
                    </td>
                    <td className="text-right p-4 text-muted-foreground">
                      ₹{(crypto.volume / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}Cr
                    </td>
                    <td className="text-right p-4">{crypto.holdings}</td>
                    <td className="text-right p-4" style={{ fontWeight: 600 }}>
                      ₹{(crypto.price * crypto.holdings).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
