import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const mockData = [
  { value: 325000 },
  { value: 328500 },
  { value: 326800 },
  { value: 332400 },
  { value: 330200 },
  { value: 335600 },
  { value: 340890 }
];

export function PortfolioSummaryCard() {
  const totalValue = 340890;
  const dailyChange = 5290;
  const dailyChangePercent = 1.58;
  const isPositive = dailyChange > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Value</p>
            <p className="text-3xl" style={{ fontWeight: 700 }}>
              ₹{totalValue.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {isPositive ? (
              <TrendingUp className="h-5 w-5" style={{ color: '#29D39A' }} />
            ) : (
              <TrendingDown className="h-5 w-5" style={{ color: '#D32F2F' }} />
            )}
            <span
              className="text-lg"
              style={{
                color: isPositive ? '#29D39A' : '#D32F2F',
                fontWeight: 600
              }}
            >
              ₹{Math.abs(dailyChange).toLocaleString()} ({dailyChangePercent}%)
            </span>
            <span className="text-sm text-muted-foreground">Today</span>
          </div>

          <div className="h-24 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#29D39A"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <p className="text-xs text-muted-foreground">7-day performance</p>
        </div>
      </CardContent>
    </Card>
  );
}
