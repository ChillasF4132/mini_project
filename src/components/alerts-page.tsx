import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Bell, TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";

export function AlertsPage() {
  const priceAlerts = [
    {
      id: 1,
      symbol: "RELIANCE",
      name: "Reliance Industries",
      type: "above",
      targetPrice: 2500,
      currentPrice: 2456.75,
      status: "active",
      createdAt: "2025-01-10",
    },
    {
      id: 2,
      symbol: "TCS",
      name: "Tata Consultancy Services",
      type: "below",
      targetPrice: 3500,
      currentPrice: 3678.90,
      status: "active",
      createdAt: "2025-01-08",
    },
    {
      id: 3,
      symbol: "INFY",
      name: "Infosys Ltd",
      type: "above",
      targetPrice: 1450,
      currentPrice: 1467.30,
      status: "triggered",
      createdAt: "2025-01-05",
      triggeredAt: "2025-01-12",
    },
  ];

  const newsAlerts = [
    {
      id: 1,
      title: "RBI announces new monetary policy",
      description: "Reserve Bank of India maintains repo rate at 6.5%",
      category: "Policy",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Reliance Q3 results announced",
      description: "Reliance Industries reports 12% YoY growth in net profit",
      category: "Earnings",
      timestamp: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "IT sector outlook positive",
      description: "Analysts upgrade IT sector ratings based on strong demand",
      category: "Market",
      timestamp: "1 day ago",
      read: true,
    },
    {
      id: 4,
      title: "New IPO launch next week",
      description: "ABC Technologies files for ₹2,000 Cr IPO",
      category: "IPO",
      timestamp: "2 days ago",
      read: true,
    },
  ];

  const performanceAlerts = [
    {
      id: 1,
      type: "gain",
      message: "Your portfolio gained 2.5% today - Best performance this month!",
      timestamp: "Today, 3:30 PM",
    },
    {
      id: 2,
      type: "warning",
      message: "TCS has dropped 3% below your average purchase price",
      timestamp: "Today, 11:15 AM",
    },
    {
      id: 3,
      type: "milestone",
      message: "Congratulations! Your portfolio crossed ₹10 Lakh mark",
      timestamp: "Yesterday, 2:45 PM",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Alerts & Notifications</h1>
        <p className="text-muted-foreground">
          Stay updated with price alerts, news, and portfolio updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Active Price Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              {priceAlerts.filter(a => a.status === "active").length}
            </div>
            <p className="text-xs text-muted-foreground">Monitoring stock prices</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Unread News</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              {newsAlerts.filter(n => !n.read).length}
            </div>
            <p className="text-xs text-muted-foreground">New notifications</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Triggered Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              {priceAlerts.filter(a => a.status === "triggered").length}
            </div>
            <p className="text-xs text-muted-foreground">In last 7 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="price" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="price">Price Alerts</TabsTrigger>
          <TabsTrigger value="news">News & Updates</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="price">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Price Alerts</CardTitle>
                <Button size="sm">+ Create Alert</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {priceAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ fontWeight: 600 }}>{alert.symbol}</span>
                        <Badge variant={alert.status === "active" ? "default" : "secondary"}>
                          {alert.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">{alert.name}</div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>
                          Alert when price is{" "}
                          <span className={alert.type === "above" ? "text-accent" : "text-destructive"}>
                            {alert.type}
                          </span>{" "}
                          ₹{alert.targetPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-muted-foreground">
                          Current: ₹{alert.currentPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={alert.status === "active"} />
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>News & Market Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {newsAlerts.map((news) => (
                  <div
                    key={news.id}
                    className={`p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                      !news.read ? "bg-accent/5" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Bell className={`h-4 w-4 ${!news.read ? "text-accent" : "text-muted-foreground"}`} />
                        <Badge variant="outline">{news.category}</Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{news.timestamp}</span>
                    </div>
                    <div style={{ fontWeight: 600 }} className="mb-1">
                      {news.title}
                    </div>
                    <p className="text-sm text-muted-foreground">{news.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-4 border rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      {alert.type === "gain" && (
                        <div className="p-2 rounded-full bg-accent/10">
                          <TrendingUp className="h-5 w-5 text-accent" />
                        </div>
                      )}
                      {alert.type === "warning" && (
                        <div className="p-2 rounded-full bg-destructive/10">
                          <AlertCircle className="h-5 w-5 text-destructive" />
                        </div>
                      )}
                      {alert.type === "milestone" && (
                        <div className="p-2 rounded-full bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="mb-1">{alert.message}</p>
                        <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
