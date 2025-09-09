"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Target, Brain, Download, Filter, Calendar } from "lucide-react"

export default function AnalyticsPage() {
  const overviewStats = [
    {
      title: "Overall Life Score",
      value: "8.4",
      change: "+0.3",
      trend: "up",
      icon: Target,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Productivity Index",
      value: "92%",
      change: "+5%",
      trend: "up",
      icon: Activity,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Health Score",
      value: "87%",
      change: "-2%",
      trend: "down",
      icon: Activity,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Goal Achievement",
      value: "75%",
      change: "+8%",
      trend: "up",
      icon: Target,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
  ]

  const insights = [
    {
      type: "positive",
      title: "Peak Performance Window",
      description: "Your most productive hours are between 9 AM - 11 AM. Schedule important tasks during this time.",
      confidence: 94,
    },
    {
      type: "warning",
      title: "Sleep Pattern Alert",
      description: "Your sleep schedule has been inconsistent. This may impact your mood and productivity.",
      confidence: 87,
    },
    {
      type: "positive",
      title: "Goal Progress",
      description: "You're 23% ahead of your monthly targets. Great job maintaining consistency!",
      confidence: 91,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Life Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into your life optimization journey</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge
                  variant={stat.trend === "up" ? "default" : "destructive"}
                  className={
                    stat.trend === "up"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-red-100 text-red-800 border-red-200"
                  }
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <h3 className="text-gray-900 font-semibold mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Weekly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Chart visualization would be rendered here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-500">Pie chart would be rendered here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            AI Insights & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  insight.type === "positive"
                    ? "bg-green-50 border-green-200"
                    : insight.type === "warning"
                      ? "bg-orange-50 border-orange-200"
                      : "bg-blue-50 border-blue-200"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{insight.title}</h4>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {insight.confidence}% confidence
                  </Badge>
                </div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Review
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Target className="w-4 h-4 mr-2" />
              Set New Goals
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Brain className="w-4 h-4 mr-2" />
              Get AI Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
