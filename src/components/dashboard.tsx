import { PortfolioSummaryCard } from "./portfolio-summary-card";
import { WatchlistCard } from "./watchlist-card";
import { MarketChartCard } from "./market-chart-card";
import { NewsFeedCard } from "./news-feed-card";

interface DashboardProps {
  onStockClick: (symbol: string) => void;
  user: { name: string; email: string };
}

export function Dashboard({ onStockClick, user }: DashboardProps) {
  const displayName = user.name || "Guest";
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Hi, {displayName}</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your investments today
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Portfolio Summary and Watchlist */}
        <div className="space-y-6">
          <PortfolioSummaryCard />
          <WatchlistCard onStockClick={onStockClick} />
        </div>

        {/* Right Column - Market Chart and News */}
        <div className="lg:col-span-2 space-y-6">
          <MarketChartCard />
          <NewsFeedCard />
        </div>
      </div>
    </div>
  );
}
