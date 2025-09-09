"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Plus, Target, AlertTriangle } from "lucide-react"

export default function InvestmentsPage() {
  const portfolioStats = {
    totalValue: 850000,
    totalInvested: 720000,
    totalGains: 130000,
    totalReturns: 18.06,
    todayChange: 2.34,
    todayValue: 19890,
  }

  const investments = [
    {
      name: "Mutual Funds",
      value: 450000,
      invested: 380000,
      returns: 18.42,
      allocation: 52.9,
      change: 2.1,
      color: "blue",
    },
    {
      name: "Stocks",
      value: 280000,
      invested: 250000,
      returns: 12.0,
      allocation: 32.9,
      change: -1.2,
      color: "green",
    },
    {
      name: "Fixed Deposits",
      value: 80000,
      invested: 75000,
      returns: 6.67,
      allocation: 9.4,
      change: 0.0,
      color: "indigo",
    },
    {
      name: "Gold",
      value: 40000,
      invested: 35000,
      returns: 14.29,
      allocation: 4.7,
      change: 1.8,
      color: "orange",
    },
  ]

  const topHoldings = [
    { name: "HDFC Top 100 Fund", type: "Mutual Fund", value: 125000, returns: 22.5, allocation: 14.7 },
    { name: "Reliance Industries", type: "Stock", value: 85000, returns: 15.8, allocation: 10.0 },
    { name: "TCS", type: "Stock", value: 72000, returns: 18.2, allocation: 8.5 },
    { name: "SBI Bluechip Fund", type: "Mutual Fund", value: 95000, returns: 19.3, allocation: 11.2 },
    { name: "ICICI Bank", type: "Stock", value: 58000, returns: 12.4, allocation: 6.8 },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatPercentage = (value: number) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Investment Portfolio</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your investments, analyze performance, and make informed decisions with AI insights
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Portfolio Value</h3>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(portfolioStats.totalValue)}</p>
            <p className="text-gray-600 text-sm">current value</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Returns</h3>
            <p className="text-2xl font-bold text-blue-600">{formatPercentage(portfolioStats.totalReturns)}</p>
            <p className="text-gray-600 text-sm">overall gain</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <BarChart3 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Gains</h3>
            <p className="text-2xl font-bold text-indigo-600">{formatCurrency(portfolioStats.totalGains)}</p>
            <p className="text-gray-600 text-sm">profit earned</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-2">
              {portfolioStats.todayChange > 0 ? (
                <TrendingUp className="w-8 h-8 text-green-600" />
              ) : (
                <TrendingDown className="w-8 h-8 text-red-600" />
              )}
            </div>
            <h3 className="text-gray-900 font-semibold">Today's Change</h3>
            <p className={`text-2xl font-bold ${portfolioStats.todayChange > 0 ? "text-green-600" : "text-red-600"}`}>
              {formatPercentage(portfolioStats.todayChange)}
            </p>
            <p className="text-gray-600 text-sm">{formatCurrency(portfolioStats.todayValue)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Asset Allocation */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-600" />
                  Asset Allocation
                </CardTitle>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Investment
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {investments.map((investment, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 bg-${investment.color}-500 rounded-full`}></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{investment.name}</h3>
                          <p className="text-sm text-gray-600">{investment.allocation}% of portfolio</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{formatCurrency(investment.value)}</p>
                        <div className="flex items-center gap-1">
                          {investment.change > 0 ? (
                            <TrendingUp className="w-3 h-3 text-green-600" />
                          ) : investment.change < 0 ? (
                            <TrendingDown className="w-3 h-3 text-red-600" />
                          ) : (
                            <div className="w-3 h-3" />
                          )}
                          <span
                            className={`text-sm ${
                              investment.change > 0
                                ? "text-green-600"
                                : investment.change < 0
                                  ? "text-red-600"
                                  : "text-gray-600"
                            }`}
                          >
                            {formatPercentage(investment.change)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Returns</span>
                        <span className="text-gray-900 font-medium">{formatPercentage(investment.returns)}</span>
                      </div>
                      <Progress value={investment.allocation} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Invested: {formatCurrency(investment.invested)}</span>
                        <span className="text-gray-500">
                          Gain: {formatCurrency(investment.value - investment.invested)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Holdings */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Top Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topHoldings.map((holding, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{holding.name}</h4>
                      <p className="text-xs text-gray-600">{holding.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-sm">{formatCurrency(holding.value)}</p>
                      <p className="text-xs text-green-600">{formatPercentage(holding.returns)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Investment Goals */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Investment Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Retirement Fund</span>
                    <span className="text-gray-900">₹8.5L / ₹50L</span>
                  </div>
                  <Progress value={17} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">17% complete</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">House Down Payment</span>
                    <span className="text-gray-900">₹2.8L / ₹10L</span>
                  </div>
                  <Progress value={28} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">28% complete</p>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Emergency Fund</span>
                    <span className="text-gray-900">₹1.5L / ₹3L</span>
                  </div>
                  <Progress value={50} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">50% complete</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <h4 className="font-semibold text-gray-900 text-sm">Rebalance Portfolio</h4>
                  </div>
                  <p className="text-gray-700 text-xs">Consider increasing equity allocation by 5%</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-blue-600" />
                    <h4 className="font-semibold text-gray-900 text-sm">SIP Increase</h4>
                  </div>
                  <p className="text-gray-700 text-xs">Increase monthly SIP by ₹5,000 for better returns</p>
                </div>
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <h4 className="font-semibold text-gray-900 text-sm">Risk Alert</h4>
                  </div>
                  <p className="text-gray-700 text-xs">High concentration in tech stocks detected</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Start SIP
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <BarChart3 className="w-4 h-4 mr-2" />
                Portfolio Analysis
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Target className="w-4 h-4 mr-2" />
                Set Goals
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
