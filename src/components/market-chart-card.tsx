import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Generate mock data with actual times
const generateMockData = () => {
  const data = [];
  const now = new Date();
  now.setHours(9, 30, 0, 0); // Start at 9:30 AM
  
  for (let i = 0; i < 13; i++) {
    const time = new Date(now);
    time.setMinutes(time.getMinutes() + i * 30);
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      value: 5480 + Math.random() * 50
    });
  }
  return data;
};

const mockData = generateMockData();

export function MarketChartCard() {
  const currentValue = 5520.45;
  const change = 47.60;
  const changePercent = 0.87;
  const isPositive = change > 0;

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>S&P 500</CardTitle>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-2xl" style={{ fontWeight: 700 }}>
                {currentValue.toLocaleString()}
              </p>
              <span
                className="text-lg"
                style={{
                  color: isPositive ? '#29D39A' : '#D32F2F',
                  fontWeight: 600
                }}
              >
                {isPositive ? '+' : ''}{change} ({isPositive ? '+' : ''}{changePercent}%)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#29D39A" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#29D39A" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="time"
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis
                stroke="#9ca3af"
                fontSize={12}
                domain={['dataMin - 10', 'dataMax + 10']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#29D39A"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
