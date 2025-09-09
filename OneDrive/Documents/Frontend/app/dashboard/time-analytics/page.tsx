"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, TrendingUp, BarChart3, PieChart, Calendar, Target, Activity, Zap } from "lucide-react"

export default function TimeAnalyticsPage() {
  const timeStats = {
    totalTracked: 42.5,
    productive: 32.8,
    focused: 18.2,
    meetings: 8.5,
    breaks: 6.0,
    efficiency: 87,
  }

  const dailyBreakdown = [
    { activity: "Deep Work", hours: 6.5, percentage: 38, color: "blue" },
    { activity: "Meetings", hours: 3.2, percentage: 19, color: "green" },
    { activity: "Communication", hours: 2.8, percentage: 16, color: "purple" },
    { activity: "Planning", hours: 1.5, percentage: 9, color: "indigo" },
    { activity: "Breaks", hours: 2.0, percentage: 12, color: "orange" },
    { activity: "Other", hours: 1.0, percentage: 6, color: "gray" },
  ]

  const weeklyTrends = [
    { day: "Mon", productive: 8.2, total: 9.5 },
    { day: "Tue", productive: 7.8, total: 9.0 },
    { day: "Wed", productive: 6.5, total: 8.5 },
    { day: "Thu", productive: 7.2, total: 8.8 },
    { day: "Fri", productive: 6.8, total: 8.2 },
    { day: "Sat", productive: 4.2, total: 6.0 },
    { day: "Sun", productive: 3.5, total: 5.0 },
  ]

  const insights = [
    {
      title: "Peak Performance Hours",
      description: "You're most productive between 9 AM - 11 AM",
      type: "positive",
      icon: TrendingUp,
    },
    {
      title: "Meeting Overload",
      description: "Wednesday has 40% more meetings than optimal",
      type: "warning",
      icon: Calendar,
    },
    {
      title: "Focus Improvement",
      description: "Deep work sessions increased by 15% this week",
      type: "positive",
      icon: Target,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Clock className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Time Analytics</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understand how you spend your time and optimize for maximum productivity
        </p>
      </div>

      {/* Time Stats */}
      <div className="grid md:grid-cols-6 gap-4">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Total</h3>
            <p className="text-lg font-bold text-blue-600">{timeStats.totalTracked}h</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Productive</h3>
            <p className="text-lg font-bold text-green-600">{timeStats.productive}h</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <Zap className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Focused</h3>
            <p className="text-lg font-bold text-purple-600">{timeStats.focused}h</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <Calendar className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Meetings</h3>
            <p className="text-lg font-bold text-indigo-600">{timeStats.meetings}h</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <Activity className="w-6 h-6 text-orange-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Breaks</h3>
            <p className="text-lg font-bold text-orange-600">{timeStats.breaks}h</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Efficiency</h3>
            <p className="text-lg font-bold text-red-600">{timeStats.efficiency}%</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Daily Breakdown */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-600" />
                Today's Time Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dailyBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 bg-${item.color}-500 rounded-full`}></div>
                        <span className="font-medium text-gray-900">{item.activity}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900">{item.hours}h</span>
                        <span className="text-gray-500 text-sm ml-2">({item.percentage}%)</span>
                      </div>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Trends */}
          <Card className="border-gray-200 shadow-sm mt-6">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                Weekly Productivity Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyTrends.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium text-gray-700">{day.day}</div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Productive: {day.productive}h</span>
                        <span className="text-gray-600">Total: {day.total}h</span>
                      </div>
                      <div className="relative">
                        <Progress value={(day.total / 10) * 100} className="h-2 bg-gray-200" />
                        <Progress value={(day.productive / 10) * 100} className="h-2 absolute top-0 bg-green-500" />
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
          {/* AI Insights */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">AI Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      insight.type === "positive" ? "bg-green-50 border-green-200" : "bg-orange-50 border-orange-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <insight.icon
                        className={`w-4 h-4 ${insight.type === "positive" ? "text-green-600" : "text-orange-600"}`}
                      />
                      <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
                    </div>
                    <p className="text-gray-700 text-xs">{insight.description}</p>
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
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <Clock className="w-4 h-4 mr-2" />
                Start Timer
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <BarChart3 className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Target className="w-4 h-4 mr-2" />
                Set Goals
              </Button>
            </CardContent>
          </Card>

          {/* Time Goals */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Time Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Deep Work</span>
                    <span className="text-gray-900">6.5h / 8h</span>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Meeting Limit</span>
                    <span className="text-gray-900">3.2h / 4h</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Break Time</span>
                    <span className="text-gray-900">2h / 2h</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
