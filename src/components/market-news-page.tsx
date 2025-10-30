import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { TrendingUp, Newspaper, Globe, LineChart } from "lucide-react";

export function MarketNewsPage() {
  const topStories = [
    {
      id: 1,
      title: "Nifty 50 closes at all-time high, Sensex gains 500 points",
      summary: "Indian benchmark indices reached new peaks driven by strong FII inflows and positive global cues. Banking and IT sectors led the rally.",
      source: "Economic Times",
      category: "Market",
      timestamp: "30 minutes ago",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 2,
      title: "RBI maintains repo rate at 6.5%, signals vigilant stance",
      summary: "The Monetary Policy Committee voted unanimously to keep the policy rate unchanged while focusing on inflation management.",
      source: "Mint",
      category: "Policy",
      timestamp: "2 hours ago",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
    {
      id: 3,
      title: "Reliance Q3 results beat estimates with 15% profit growth",
      summary: "Reliance Industries reported strong quarterly earnings with revenue of ₹2.35 lakh crore, driven by retail and digital services.",
      source: "Business Standard",
      category: "Earnings",
      timestamp: "4 hours ago",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    },
  ];

  const sectorNews = [
    {
      sector: "Technology",
      news: [
        {
          title: "IT companies see strong demand from BFSI sector",
          source: "Bloomberg Quint",
          timestamp: "1 hour ago",
        },
        {
          title: "TCS announces ₹17,000 crore share buyback",
          source: "Reuters",
          timestamp: "3 hours ago",
        },
      ],
    },
    {
      sector: "Banking",
      news: [
        {
          title: "HDFC Bank Q3 net profit rises 20% YoY to ₹16,372 crore",
          source: "Moneycontrol",
          timestamp: "2 hours ago",
        },
        {
          title: "SBI reduces MCLR by 10 basis points across tenures",
          source: "Financial Express",
          timestamp: "5 hours ago",
        },
      ],
    },
    {
      sector: "Auto",
      news: [
        {
          title: "Maruti Suzuki reports highest-ever monthly sales",
          source: "Economic Times",
          timestamp: "3 hours ago",
        },
        {
          title: "Tata Motors EV sales surge 50% in Q3",
          source: "Business Today",
          timestamp: "6 hours ago",
        },
      ],
    },
  ];

  const globalNews = [
    {
      title: "US Fed maintains interest rates, eyes inflation data",
      region: "United States",
      timestamp: "4 hours ago",
      impact: "positive",
    },
    {
      title: "European markets rally on strong manufacturing data",
      region: "Europe",
      timestamp: "6 hours ago",
      impact: "positive",
    },
    {
      title: "China's GDP growth exceeds expectations at 5.2%",
      region: "China",
      timestamp: "8 hours ago",
      impact: "positive",
    },
    {
      title: "Oil prices decline amid global supply concerns",
      region: "Global",
      timestamp: "5 hours ago",
      impact: "negative",
    },
  ];

  const ipoNews = [
    {
      company: "Tech Solutions Ltd",
      size: "₹1,200 Cr",
      dates: "Jan 20 - Jan 24, 2025",
      priceRange: "₹180 - ₹195",
      status: "Upcoming",
    },
    {
      company: "Green Energy Corp",
      size: "₹850 Cr",
      dates: "Jan 15 - Jan 19, 2025",
      priceRange: "₹95 - ₹105",
      status: "Open",
    },
    {
      company: "Digital Payments Inc",
      size: "₹2,500 Cr",
      dates: "Jan 8 - Jan 12, 2025",
      priceRange: "₹320 - ₹350",
      status: "Listed",
      listingGain: "+18%",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Market News</h1>
        <p className="text-muted-foreground">
          Stay updated with latest market news, earnings, and global events
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {topStories.map((story) => (
                <div
                  key={story.id}
                  className="flex gap-4 pb-6 border-b last:border-0 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{story.category}</Badge>
                      <span className="text-xs text-muted-foreground">{story.timestamp}</span>
                    </div>
                    <h3 className="mb-2" style={{ fontWeight: 600 }}>
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{story.summary}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Newspaper className="h-3 w-3" />
                      <span>{story.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalNews.map((news, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{news.region}</Badge>
                      <Badge
                        variant="outline"
                        className={
                          news.impact === "positive"
                            ? "text-accent border-accent"
                            : "text-destructive border-destructive"
                        }
                      >
                        {news.impact === "positive" ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <Globe className="h-3 w-3 mr-1" />
                        )}
                        {news.impact}
                      </Badge>
                    </div>
                    <p className="text-sm mb-1">{news.title}</p>
                    <span className="text-xs text-muted-foreground">{news.timestamp}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IPO Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ipoNews.map((ipo, index) => (
                  <div key={index} className="pb-4 border-b last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <span style={{ fontWeight: 600 }}>{ipo.company}</span>
                      <Badge variant={ipo.status === "Open" ? "default" : "secondary"}>
                        {ipo.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>Size: {ipo.size}</div>
                      <div>Price: {ipo.priceRange}</div>
                      <div>Dates: {ipo.dates}</div>
                      {ipo.listingGain && (
                        <div className="text-accent">Listing Gain: {ipo.listingGain}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sector-wise News</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="Technology" className="w-full">
            <TabsList>
              {sectorNews.map((sector) => (
                <TabsTrigger key={sector.sector} value={sector.sector}>
                  {sector.sector}
                </TabsTrigger>
              ))}
            </TabsList>

            {sectorNews.map((sector) => (
              <TabsContent key={sector.sector} value={sector.sector}>
                <div className="space-y-4">
                  {sector.news.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="mb-2" style={{ fontWeight: 600 }}>
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{item.source}</span>
                            <span>•</span>
                            <span>{item.timestamp}</span>
                          </div>
                        </div>
                        <LineChart className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
