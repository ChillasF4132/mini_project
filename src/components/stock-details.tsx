import { useState } from "react";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  ComposedChart,
  ReferenceLine,
  Dot
} from "recharts";

const stockData: Record<string, any> = {
  AAPL: {
    name: "Apple Inc.",
    price: 245.80,
    change: 3.45,
    changePercent: 1.42,
    marketCap: "3.85T",
    peRatio: "32.15",
    dividend: "0.48%",
    high52: "258.90",
    low52: "182.40",
    volume: "58.7M"
  },
  MSFT: {
    name: "Microsoft Corp.",
    price: 485.65,
    change: 5.80,
    changePercent: 1.21,
    marketCap: "3.61T",
    peRatio: "37.85",
    dividend: "0.75%",
    high52: "498.75",
    low52: "365.20",
    volume: "26.4M"
  },
  GOOGL: {
    name: "Alphabet Inc.",
    price: 178.90,
    change: 2.15,
    changePercent: 1.22,
    marketCap: "2.23T",
    peRatio: "26.80",
    dividend: "0.00%",
    high52: "189.45",
    low52: "138.60",
    volume: "31.2M"
  }
};

const generateChartData = (timeRange: string) => {
  const dataPoints: Record<string, number> = {
    '1D': 13,
    '5D': 5,
    '1M': 20,
    '6M': 26,
    '1Y': 52,
    'Max': 100
  };

  const points = dataPoints[timeRange] || 20;
  const data = [];
  let basePrice = 170;
  
  // Calculate time intervals based on range
  const now = new Date();
  const getDate = (index: number) => {
    const date = new Date(now);
    switch (timeRange) {
      case '1D':
        // Hours throughout the day
        date.setHours(9 + index, 30, 0, 0);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      case '5D':
        // Days
        date.setDate(date.getDate() - (points - 1 - index));
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      case '1M':
        // Days
        date.setDate(date.getDate() - (points - 1 - index));
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      case '6M':
        // Weeks
        date.setDate(date.getDate() - (points - 1 - index) * 7);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      case '1Y':
        // Weeks
        date.setDate(date.getDate() - (points - 1 - index) * 7);
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      case 'Max':
        // Months
        date.setMonth(date.getMonth() - (points - 1 - index));
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      default:
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  for (let i = 0; i < points; i++) {
    const variance = (Math.random() - 0.5) * 10;
    basePrice += variance;
    const value = parseFloat(Math.max(basePrice, 150).toFixed(2));
    data.push({
      time: getDate(i),
      value: value,
      high: parseFloat(Math.max(basePrice + Math.random() * 3, 150).toFixed(2)),
      low: parseFloat(Math.max(basePrice - Math.random() * 3, 150).toFixed(2)),
      open: parseFloat(Math.max(basePrice + (Math.random() - 0.5) * 2, 150).toFixed(2)),
      close: parseFloat(Math.max(basePrice, 150).toFixed(2))
    });
  }

  return data;
};

interface StockDetailsProps {
  symbol: string;
  onBack: () => void;
}

// Custom dot component that changes color based on average
const CustomDot = (props: any) => {
  const { cx, cy, payload, averageValue } = props;
  const isAboveAverage = payload.value >= averageValue;
  
  return (
    <circle
      cx={cx}
      cy={cy}
      r={3}
      fill={isAboveAverage ? "#29D39A" : "#D32F2F"}
      stroke="white"
      strokeWidth={1}
    />
  );
};

export function StockDetails({ symbol, onBack }: StockDetailsProps) {
  const [timeRange, setTimeRange] = useState('1M');
  const [chartType, setChartType] = useState<'line' | 'candlestick'>('line');
  
  const stock = stockData[symbol] || stockData.AAPL;
  const isPositive = stock.change > 0;
  const chartData = generateChartData(timeRange);
  
  // Calculate average value
  const averageValue = parseFloat((chartData.reduce((sum, item) => sum + item.value, 0) / chartData.length).toFixed(2));

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-muted-foreground mb-1">{stock.name}</p>
            <h1>{symbol}</h1>
          </div>
        </div>

        <div className="flex items-baseline gap-4">
          <p className="text-4xl" style={{ fontWeight: 700 }}>
            ₹{stock.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-2">
            {isPositive ? (
              <TrendingUp className="h-5 w-5" style={{ color: '#29D39A' }} />
            ) : (
              <TrendingDown className="h-5 w-5" style={{ color: '#D32F2F' }} />
            )}
            <span
              className="text-xl"
              style={{
                color: isPositive ? '#29D39A' : '#D32F2F',
                fontWeight: 600
              }}
            >
              {isPositive ? '+' : ''}{stock.change.toFixed(2)} ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
            </span>
            <span className="text-sm text-muted-foreground">Today</span>
          </div>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Price Chart</CardTitle>
            <div className="flex gap-2">
              <Tabs value={chartType} onValueChange={(v) => setChartType(v as 'line' | 'candlestick')}>
                <TabsList>
                  <TabsTrigger value="line">Line</TabsTrigger>
                  <TabsTrigger value="candlestick">Candlestick</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Tabs value={timeRange} onValueChange={setTimeRange}>
              <TabsList>
                <TabsTrigger value="1D">1D</TabsTrigger>
                <TabsTrigger value="5D">5D</TabsTrigger>
                <TabsTrigger value="1M">1M</TabsTrigger>
                <TabsTrigger value="6M">6M</TabsTrigger>
                <TabsTrigger value="1Y">1Y</TabsTrigger>
                <TabsTrigger value="Max">Max</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mb-2 flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Average: ₹{averageValue.toFixed(2)}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#29D39A]"></div>
                <span className="text-xs text-muted-foreground">Above Avg</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-[#D32F2F]"></div>
                <span className="text-xs text-muted-foreground">Below Avg</span>
              </div>
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'line' ? (
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="time"
                    stroke="#9ca3af"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    fontSize={12}
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tickFormatter={(value) => `₹${value.toFixed(2)}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => {
                      const isAbove = value >= averageValue;
                      return [
                        `₹${value.toFixed(2)} ${isAbove ? '(Above Avg)' : '(Below Avg)'}`,
                        'Price'
                      ];
                    }}
                    labelFormatter={(label) => `Date: ${label}`}
                  />
                  <ReferenceLine 
                    y={averageValue} 
                    stroke="#9ca3af" 
                    strokeDasharray="5 5" 
                    label={{ 
                      value: `Avg: ₹${averageValue.toFixed(2)}`, 
                      position: 'right',
                      fill: '#9ca3af',
                      fontSize: 12
                    }} 
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#1A237E"
                    strokeWidth={2}
                    dot={(props) => <CustomDot {...props} averageValue={averageValue} />}
                  />
                </LineChart>
              ) : (
                <ComposedChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="time"
                    stroke="#9ca3af"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    fontSize={12}
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tickFormatter={(value) => `₹${value.toFixed(2)}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Price']}
                  />
                  <ReferenceLine 
                    y={averageValue} 
                    stroke="#9ca3af" 
                    strokeDasharray="5 5"
                    label={{ 
                      value: `Avg: ₹${averageValue.toFixed(2)}`, 
                      position: 'right',
                      fill: '#9ca3af',
                      fontSize: 12
                    }} 
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#1A237E"
                    shape={(props: any) => {
                      const { x, y, width, height, payload } = props;
                      const isAbove = payload.value >= averageValue;
                      return (
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          fill={isAbove ? "#29D39A" : "#D32F2F"}
                        />
                      );
                    }}
                  />
                </ComposedChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Market Cap</p>
              <p style={{ fontWeight: 600 }}>₹{stock.marketCap}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">P/E Ratio</p>
              <p style={{ fontWeight: 600 }}>{stock.peRatio}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Dividend Yield</p>
              <p style={{ fontWeight: 600 }}>{stock.dividend}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">52-Week High</p>
              <p style={{ fontWeight: 600 }}>₹{stock.high52}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">52-Week Low</p>
              <p style={{ fontWeight: 600 }}>₹{stock.low52}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Volume</p>
              <p style={{ fontWeight: 600 }}>{stock.volume}</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button className="flex-1 bg-accent hover:bg-accent/90">
              Buy {symbol}
            </Button>
            <Button variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
              Sell {symbol}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
