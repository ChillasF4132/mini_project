import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const newsItems = [
  {
    title: "Fed Signals Potential Rate Cuts in Q4 2025",
    source: "Financial Times",
    time: "2 hours ago",
    url: "#"
  },
  {
    title: "Tech Stocks Rally on Strong Earnings Reports",
    source: "Bloomberg",
    time: "4 hours ago",
    url: "#"
  },
  {
    title: "Oil Prices Surge Amid Supply Concerns",
    source: "Reuters",
    time: "5 hours ago",
    url: "#"
  },
  {
    title: "Tesla Announces New Manufacturing Facility",
    source: "CNBC",
    time: "6 hours ago",
    url: "#"
  },
  {
    title: "Global Markets React to Economic Data",
    source: "Wall Street Journal",
    time: "8 hours ago",
    url: "#"
  }
];

export function NewsFeedCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="mb-1 group-hover:text-primary transition-colors" style={{ fontWeight: 600 }}>
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
