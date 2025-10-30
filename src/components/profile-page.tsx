import { ArrowLeft, Camera, Moon, Sun, Mail, User as UserIcon, TrendingUp, Wallet, PieChart, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

interface ProfilePageProps {
  onBack: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onLogout: () => void;
  user: { name: string; email: string };
}

export function ProfilePage({ onBack, theme, onThemeToggle, onLogout, user: userData }: ProfilePageProps) {
  // Use provided user data or fallback to default
  const user = {
    name: userData.name || "Guest User",
    email: userData.email || "guest@example.com",
    profilePicture: "", // Empty for fallback to initials
    joinDate: "January 2024",
    memberSince: "10 months"
  };

  // Mock portfolio summary data
  const portfolioSummary = {
    totalValue: 1245680.50,
    totalInvested: 1050000.00,
    totalGain: 195680.50,
    gainPercentage: 18.64,
    numberOfHoldings: 8,
    todaysChange: 12450.30,
    todaysChangePercent: 1.01
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={user.profilePicture} alt={user.name} />
                    <AvatarFallback className="text-3xl" style={{ fontWeight: 600 }}>
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-0 right-0 h-10 w-10 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>{user.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2 justify-center">
                    <Mail className="h-4 w-4" />
                    {user.email}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center">
                    <Calendar className="h-4 w-4" />
                    Member since {user.joinDate}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={user.name} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} />
                </div>

                <Button className="w-full">Save Changes</Button>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    <span>Theme</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onThemeToggle}
                  >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                  </Button>
                </div>

                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Portfolio Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
                <CardDescription>Your investment performance summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Total Portfolio Value */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Wallet className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Value</p>
                          <p className="text-2xl" style={{ fontWeight: 700 }}>
                            ₹{portfolioSummary.totalValue.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Total Gain/Loss */}
                  <Card className={portfolioSummary.totalGain >= 0 ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"}>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg ${portfolioSummary.totalGain >= 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                          <TrendingUp className={`h-6 w-6 ${portfolioSummary.totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Gain</p>
                          <p className={`text-2xl ${portfolioSummary.totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`} style={{ fontWeight: 700 }}>
                            {portfolioSummary.totalGain >= 0 ? '+' : ''}₹{portfolioSummary.totalGain.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                          <p className={`text-sm ${portfolioSummary.totalGain >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {portfolioSummary.gainPercentage >= 0 ? '+' : ''}{portfolioSummary.gainPercentage.toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Total Invested */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <PieChart className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Invested</p>
                          <p className="text-2xl" style={{ fontWeight: 700 }}>
                            ₹{portfolioSummary.totalInvested.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Number of Holdings */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-muted rounded-lg">
                          <UserIcon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Active Holdings</p>
                          <p className="text-2xl" style={{ fontWeight: 700 }}>
                            {portfolioSummary.numberOfHoldings}
                          </p>
                          <p className="text-sm text-muted-foreground">Stocks</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-6" />

                {/* Today's Performance */}
                <div>
                  <h4 className="mb-4" style={{ fontWeight: 600 }}>Today's Performance</h4>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Day Change</p>
                          <p className={`text-xl ${portfolioSummary.todaysChange >= 0 ? 'text-green-500' : 'text-red-500'}`} style={{ fontWeight: 700 }}>
                            {portfolioSummary.todaysChange >= 0 ? '+' : ''}₹{portfolioSummary.todaysChange.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </p>
                        </div>
                        <Badge variant={portfolioSummary.todaysChangePercent >= 0 ? "default" : "destructive"} className="text-lg px-4 py-2">
                          {portfolioSummary.todaysChangePercent >= 0 ? '+' : ''}{portfolioSummary.todaysChangePercent.toFixed(2)}%
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Account Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Account Statistics</CardTitle>
                <CardDescription>Your investment activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>24</p>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>8</p>
                    <p className="text-sm text-muted-foreground">Active Stocks</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>12</p>
                    <p className="text-sm text-muted-foreground">Watchlist</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-3xl mb-1" style={{ fontWeight: 700 }}>95%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
