import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Target, Home, GraduationCap, Car, Plane, TrendingUp } from "lucide-react";

export function GoalsPage() {
  const goals = [
    {
      id: 1,
      name: "Dream Home",
      icon: Home,
      targetAmount: 10000000,
      currentAmount: 4567890,
      targetDate: "Dec 2028",
      monthlyContribution: 50000,
      category: "Property",
      risk: "Medium",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 2,
      name: "Children's Education",
      icon: GraduationCap,
      targetAmount: 5000000,
      currentAmount: 2345678,
      targetDate: "Jun 2030",
      monthlyContribution: 30000,
      category: "Education",
      risk: "Low",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: 3,
      name: "Retirement Fund",
      icon: Target,
      targetAmount: 50000000,
      currentAmount: 8765432,
      targetDate: "Dec 2045",
      monthlyContribution: 75000,
      category: "Retirement",
      risk: "Medium",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: 4,
      name: "New Car",
      icon: Car,
      targetAmount: 1500000,
      currentAmount: 876543,
      targetDate: "Mar 2026",
      monthlyContribution: 25000,
      category: "Vehicle",
      risk: "Low",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: 5,
      name: "World Tour",
      icon: Plane,
      targetAmount: 2000000,
      currentAmount: 456789,
      targetDate: "Dec 2027",
      monthlyContribution: 20000,
      category: "Travel",
      risk: "Medium",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
  ];

  const totalTargetAmount = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalCurrentAmount = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalMonthlyContribution = goals.reduce((sum, goal) => sum + goal.monthlyContribution, 0);

  const calculateProgress = (current: number, target: number) => {
    return (current / target) * 100;
  };

  const calculateMonthsRemaining = (targetDate: string) => {
    const target = new Date(targetDate);
    const now = new Date();
    const months = (target.getFullYear() - now.getFullYear()) * 12 + (target.getMonth() - now.getMonth());
    return Math.max(0, months);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2">Investment Goals</h1>
        <p className="text-muted-foreground">
          Track and manage your financial goals with smart planning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Goal Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              ₹{(totalTargetAmount / 10000000).toFixed(2)}Cr
            </div>
            <p className="text-xs text-muted-foreground">Across {goals.length} goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Amount Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              ₹{(totalCurrentAmount / 10000000).toFixed(2)}Cr
            </div>
            <div className="flex items-center gap-1 text-sm text-accent">
              <TrendingUp className="h-4 w-4" />
              <span>{((totalCurrentAmount / totalTargetAmount) * 100).toFixed(1)}% achieved</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Monthly Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              ₹{totalMonthlyContribution.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-muted-foreground">Total SIP amount</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">On Track Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl" style={{ fontWeight: 700 }}>
              {goals.filter(g => calculateProgress(g.currentAmount, g.targetAmount) >= 40).length}/{goals.length}
            </div>
            <p className="text-xs text-muted-foreground">Goals progressing well</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6 flex justify-end">
        <Button>+ Create New Goal</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          const monthsRemaining = calculateMonthsRemaining(goal.targetDate);
          const shortfall = goal.targetAmount - goal.currentAmount;
          const requiredMonthly = monthsRemaining > 0 ? shortfall / monthsRemaining : 0;

          return (
            <Card key={goal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${goal.bgColor}`}>
                      <Icon className={`h-6 w-6 ${goal.color}`} />
                    </div>
                    <div>
                      <CardTitle>{goal.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{goal.category}</Badge>
                        <Badge variant="outline">{goal.risk} Risk</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm" style={{ fontWeight: 600 }}>{progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Current Amount</div>
                      <div style={{ fontWeight: 600 }}>
                        ₹{goal.currentAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Target Amount</div>
                      <div style={{ fontWeight: 600 }}>
                        ₹{goal.targetAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Target Date</div>
                      <div className="text-sm" style={{ fontWeight: 600 }}>{goal.targetDate}</div>
                      <div className="text-xs text-muted-foreground">{monthsRemaining} months left</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Monthly SIP</div>
                      <div className="text-sm" style={{ fontWeight: 600 }}>
                        ₹{goal.monthlyContribution.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  {requiredMonthly > goal.monthlyContribution && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <div className="text-xs text-destructive mb-1">Action Required</div>
                      <div className="text-sm">
                        Increase SIP to ₹{requiredMonthly.toLocaleString('en-IN', { maximumFractionDigits: 0 })} to stay on track
                      </div>
                    </div>
                  )}

                  {requiredMonthly <= goal.monthlyContribution && progress < 100 && (
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="text-xs text-accent mb-1">On Track</div>
                      <div className="text-sm">
                        Your current SIP is sufficient to achieve this goal
                      </div>
                    </div>
                  )}

                  {progress >= 100 && (
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="text-xs text-accent mb-1">Goal Achieved! 🎉</div>
                      <div className="text-sm">
                        You've successfully reached your target amount
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
