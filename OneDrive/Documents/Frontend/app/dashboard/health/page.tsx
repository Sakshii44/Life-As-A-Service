"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Droplets, Moon, Apple, Dumbbell, Brain, TrendingUp, Plus, Calendar } from "lucide-react"

export default function HealthPage() {
  const healthMetrics = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      icon: Heart,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Steps Today",
      value: "8,547",
      unit: "steps",
      status: "good",
      icon: Activity,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Water Intake",
      value: "6",
      unit: "glasses",
      status: "low",
      icon: Droplets,
      color: "text-cyan-600",
      bg: "bg-cyan-100",
    },
    {
      title: "Sleep Quality",
      value: "7.5",
      unit: "hours",
      status: "good",
      icon: Moon,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
  ]

  const dailyGoals = [
    { title: "Steps", current: 8547, target: 10000, unit: "steps", progress: 85 },
    { title: "Water", current: 6, target: 8, unit: "glasses", progress: 75 },
    { title: "Sleep", current: 7.5, target: 8, unit: "hours", progress: 94 },
    { title: "Exercise", current: 45, target: 60, unit: "minutes", progress: 75 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Health & Wellness</h1>
          <p className="text-gray-600">Monitor and optimize your physical and mental well-being</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Health Report
          </Button>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="w-4 h-4 mr-2" />
            Log Health Data
          </Button>
        </div>
      </div>

      {/* Health Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        {healthMetrics.map((metric, index) => (
          <Card key={index} className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${metric.bg} rounded-lg flex items-center justify-center`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <Badge
                  className={
                    metric.status === "normal" || metric.status === "good"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-orange-100 text-orange-800 border-orange-200"
                  }
                >
                  {metric.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 font-semibold mb-1">{metric.title}</h3>
              <p className="text-2xl font-bold text-gray-900">
                {metric.value}
                <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily Goals */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Daily Health Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyGoals.map((goal, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-gray-900 font-medium">{goal.title}</h4>
                  <span className="text-sm text-gray-600">
                    {goal.current}/{goal.target} {goal.unit}
                  </span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <p className="text-xs text-gray-500">{goal.progress}% complete</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Health Insights */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Brain className="w-5 h-5 text-indigo-600" />
              AI Health Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Great Sleep Pattern</h4>
                <p className="text-gray-700 text-sm">Your sleep consistency has improved by 15% this week.</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Hydration Alert</h4>
                <p className="text-gray-700 text-sm">You're behind on water intake. Aim for 2 more glasses today.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start bg-red-600 hover:bg-red-700">
              <Heart className="w-4 h-4 mr-2" />
              Log Mood
            </Button>
            <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
              <Apple className="w-4 h-4 mr-2" />
              Track Meal
            </Button>
            <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
              <Dumbbell className="w-4 h-4 mr-2" />
              Start Workout
            </Button>
            <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
              <Moon className="w-4 h-4 mr-2" />
              Sleep Tracker
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
