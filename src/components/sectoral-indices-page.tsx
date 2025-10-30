import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface SectoralIndicesPageProps {
  onIndexClick: (symbol: string) => void;
}

export function SectoralIndicesPage({ onIndexClick }: SectoralIndicesPageProps) {
  const broadIndices = [
    {
      symbol: "NIFTY50",
      name: "Nifty 50",
      value: 25678.90,
      change: 187.45,
      changePercent: 0.73,
      high: 25789.60,
      low: 25456.30,
      open: 25567.80,
    },
    {
      symbol: "SENSEX",
      name: "BSE Sensex",
      value: 84567.35,
      change: 356.80,
      changePercent: 0.42,
      high: 84789.50,
      low: 84234.60,
      open: 84456.70,
    },
    {
      symbol: "NIFTYNEXT50",
      name: "Nifty Next 50",
      value: 56789.45,
      change: 298.75,
      changePercent: 0.53,
      high: 56923.80,
      low: 56456.30,
      open: 56678.90,
    },
    {
      symbol: "NIFTY100",
      name: "Nifty 100",
      value: 23456.80,
      change: 134.90,
      changePercent: 0.58,
      high: 23567.40,
      low: 23234.50,
      open: 23389.60,
    },
    {
      symbol: "NIFTY500",
      name: "Nifty 500",
      value: 20789.60,
      change: 98.70,
      changePercent: 0.48,
      high: 20856.30,
      low: 20678.90,
      open: 20734.50,
    },
    {
      symbol: "NIFTYMIDCAP",
      name: "Nifty Midcap 100",
      value: 50234.85,
      change: 289.60,
      changePercent: 0.58,
      high: 50367.90,
      low: 49934.50,
      open: 50123.40,
    },
  ];

  const sectoralIndices = [
    {
      symbol: "BANKNIFTY",
      name: "Bank Nifty",
      value: 52890.75,
      change: 412.35,
      changePercent: 0.79,
      high: 53123.60,
      low: 52456.80,
      open: 52678.90,
      sector: "Banking",
    },
    {
      symbol: "NIFTYIT",
      name: "Nifty IT",
      value: 38756.90,
      change: 345.80,
      changePercent: 0.90,
      high: 38923.50,
      low: 38456.70,
      open: 38612.40,
      sector: "Information Technology",
    },
    {
      symbol: "NIFTYPHARMA",
      name: "Nifty Pharma",
      value: 20678.45,
      change: 134.90,
      changePercent: 0.66,
      high: 20789.60,
      low: 20456.30,
      open: 20589.70,
      sector: "Pharmaceuticals",
    },
    {
      symbol: "NIFTYAUTO",
      name: "Nifty Auto",
      value: 19567.80,
      change: 223.45,
      changePercent: 1.15,
      high: 19678.90,
      low: 19345.60,
      open: 19456.70,
      sector: "Automobile",
    },
    {
      symbol: "NIFTYFMCG",
      name: "Nifty FMCG",
      value: 58234.90,
      change: 112.60,
      changePercent: 0.19,
      high: 58367.40,
      low: 58034.50,
      open: 58156.80,
      sector: "FMCG",
    },
    {
      symbol: "NIFTYMETAL",
      name: "Nifty Metal",
      value: 8456.75,
      change: 67.90,
      changePercent: 0.81,
      high: 8534.60,
      low: 8367.80,
      open: 8423.50,
      sector: "Metals",
    },
    {
      symbol: "NIFTYREALTY",
      name: "Nifty Realty",
      value: 756.90,
      change: 14.85,
      changePercent: 2.00,
      high: 763.40,
      low: 745.60,
      open: 748.90,
      sector: "Real Estate",
    },
    {
      symbol: "NIFTYENERGY",
      name: "Nifty Energy",
      value: 34567.80,
      change: 198.45,
      changePercent: 0.58,
      high: 34689.50,
      low: 34345.60,
      open: 34456.70,
      sector: "Energy",
    },
    {
      symbol: "NIFTYPSU",
      name: "Nifty PSU Bank",
      value: 6567.85,
      change: 104.90,
      changePercent: 1.62,
      high: 6623.40,
      low: 6456.70,
      open: 6512.80,
      sector: "PSU Banking",
    },
    {
      symbol: "NIFTYPVTBANK",
      name: "Nifty Private Bank",
      value: 27234.90,
      change: 278.60,
      changePercent: 1.03,
      high: 27367.80,
      low: 26923.40,
      open: 27089.50,
      sector: "Private Banking",
    },
    {
      symbol: "NIFTYMEDIA",
      name: "Nifty Media",
      value: 1978.60,
      change: 15.45,
      changePercent: 0.79,
      high: 1998.70,
      low: 1956.80,
      open: 1967.40,
      sector: "Media & Entertainment",
    },
    {
      symbol: "NIFTYHEALTHCARE",
      name: "Nifty Healthcare",
      value: 12789.45,
      change: 89.70,
      changePercent: 0.71,
      high: 12867.80,
      low: 12678.90,
      open: 12734.50,
      sector: "Healthcare",
    },
  ];

  const thematicIndices = [
    {
      symbol: "NIFTYDIVIDEND",
      name: "Nifty Dividend Opportunities 50",
      value: 5345.90,
      change: 40.75,
      changePercent: 0.77,
      high: 5378.60,
      low: 5289.40,
      open: 5312.80,
    },
    {
      symbol: "NIFTYINDIA",
      name: "Nifty India Consumption",
      value: 9234.80,
      change: 67.50,
      changePercent: 0.74,
      high: 9289.40,
      low: 9156.30,
      open: 9189.70,
    },
    {
      symbol: "NIFTYINFRA",
      name: "Nifty Infrastructure",
      value: 7456.90,
      change: 105.80,
      changePercent: 1.44,
      high: 7512.60,
      low: 7367.80,
      open: 7389.50,
    },
    {
      symbol: "NIFTYCOMMODITIES",
      name: "Nifty Commodities",
      value: 6567.80,
      change: 52.90,
      changePercent: 0.81,
      high: 6623.40,
      low: 6489.50,
      open: 6534.70,
    },
  ];

  const renderIndexTable = (indices: any[], showSector: boolean = false) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Index</th>
            {showSector && <th className="text-left p-4">Sector</th>}
            <th className="text-right p-4">Value</th>
            <th className="text-right p-4">Change</th>
            <th className="text-right p-4">% Change</th>
            <th className="text-right p-4">Open</th>
            <th className="text-right p-4">High</th>
            <th className="text-right p-4">Low</th>
          </tr>
        </thead>
        <tbody>
          {indices.map((index) => (
            <tr
              key={index.symbol}
              className="border-b cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => onIndexClick(index.symbol)}
            >
              <td className="p-4">
                <div>
                  <div style={{ fontWeight: 600 }}>{index.symbol}</div>
                  <div className="text-sm text-muted-foreground">{index.name}</div>
                </div>
              </td>
              {showSector && (
                <td className="p-4">
                  <Badge variant="secondary">{index.sector}</Badge>
                </td>
              )}
              <td className="text-right p-4" style={{ fontWeight: 600 }}>
                {index.value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="text-right p-4">
                <span className={index.change >= 0 ? "text-accent" : "text-destructive"}>
                  {index.change >= 0 ? "+" : ""}{index.change.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </td>
              <td className="text-right p-4">
                <Badge
                  variant="outline"
                  className={index.changePercent >= 0 ? "text-accent border-accent" : "text-destructive border-destructive"}
                >
                  {index.changePercent >= 0 ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {index.changePercent >= 0 ? "+" : ""}{index.changePercent}%
                </Badge>
              </td>
              <td className="text-right p-4 text-muted-foreground">
                {index.open.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="text-right p-4 text-muted-foreground">
                {index.high.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className="text-right p-4 text-muted-foreground">
                {index.low.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Sectoral Indices</h1>
        <p className="text-muted-foreground">
          Track market performance across different sectors and indices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Nifty 50</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>25,678.90</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+0.73% (+187.45)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">BSE Sensex</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>84,567.35</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+0.42% (+356.80)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Bank Nifty</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>52,890.75</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+0.79% (+412.35)</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Top Gainer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>Realty</div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>+2.00%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="broad" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="broad">Broad Market</TabsTrigger>
          <TabsTrigger value="sectoral">Sectoral Indices</TabsTrigger>
          <TabsTrigger value="thematic">Thematic Indices</TabsTrigger>
        </TabsList>

        <TabsContent value="broad">
          <Card>
            <CardHeader>
              <CardTitle>Broad Market Indices</CardTitle>
            </CardHeader>
            <CardContent>
              {renderIndexTable(broadIndices)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sectoral">
          <Card>
            <CardHeader>
              <CardTitle>Sectoral Indices</CardTitle>
            </CardHeader>
            <CardContent>
              {renderIndexTable(sectoralIndices, true)}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thematic">
          <Card>
            <CardHeader>
              <CardTitle>Thematic Indices</CardTitle>
            </CardHeader>
            <CardContent>
              {renderIndexTable(thematicIndices)}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
