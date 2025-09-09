"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Plus, Calendar, TrendingUp, Award, Clock, CheckCircle, Star } from "lucide-react"

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete 50 Workouts",
      description: "Maintain fitness routine throughout the year",
      category: "Health",
      progress: 76,
      current: 38,
      target: 50,
      deadline: "2024-12-31",
      priority: "high",
      status: "active",
    },
    {
      id: 2,
      title: "Save ₹5,00,000",
      description: "Build emergency fund for financial security",
      category: "Finance",
      progress: 45,
      current: 225000,
      target: 500000,
      deadline: "2024-12-31",
      priority: "high",
      status: "active",
    },
    {
      id: 3,
      title: "Learn React Development",
      description: "Master React and build 3 projects",
      category: "Learning",
      progress: 60,
      current: 60,
      target: 100,
      deadline: "2024-06-30",
      priority: "medium",
      status: "active",
    },
    {
      id: 4,
      title: "Read 24 Books",
      description: "Expand knowledge through reading",
      category: "Personal",
      progress: 33,
      current: 8,
      target: 24,
      deadline: "2024-12-31",
      priority: "low",
      status: "active",
    },
  ])

  const goalStats = {
    totalGoals: goals.length,
    activeGoals: goals.filter((g) => g.status === "active").length,
    completedGoals: goals.filter((g) => g.progress === 100).length,
    averageProgress: Math.round(goals.reduce((acc, goal) => acc + goal.progress, 0) / goals.length),
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Health":
        return "text-red-600"
      case "Finance":
        return "text-green-600"
      case "Learning":
        return "text-blue-600"
      case "Personal":
        return "text-purple-600"
      default:
        return "text-gray-600"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
            <Target className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Goal Setting & Tracking</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Set ambitious goals, track progress, and achieve your dreams with AI-powered insights
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Goals</h3>
            <p className="text-2xl font-bold text-blue-600">{goalStats.totalGoals}</p>
            <p className="text-gray-600 text-sm">set this year</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Active</h3>
            <p className="text-2xl font-bold text-orange-600">{goalStats.activeGoals}</p>
            <p className="text-gray-600 text-sm">in progress</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Completed</h3>
            <p className="text-2xl font-bold text-green-600">{goalStats.completedGoals}</p>
            <p className="text-gray-600 text-sm">achieved</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Progress</h3>
            <p className="text-2xl font-bold text-indigo-600">{goalStats.averageProgress}%</p>
            <p className="text-gray-600 text-sm">average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Goals List */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900">Your Goals</CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Goal
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                        <p className="text-gray-600 mb-3">{goal.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(goal.priority)}>{goal.priority} priority</Badge>
                          <Badge variant="outline" className="border-gray-300 text-gray-600">
                            {goal.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 text-orange-500" />
                          <span className="font-bold text-gray-900">{goal.progress}%</span>
                        </div>
                        <p className="text-xs text-gray-500">completed</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-gray-900">
                          {goal.category === "Finance"
                            ? `${formatCurrency(goal.current)} / ${formatCurrency(goal.target)}`
                            : `${goal.current} / ${goal.target}`}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-3" />
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Deadline</span>
                        <span className="text-gray-900">{new Date(goal.deadline).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Update Progress
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Create New Goal */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Create New Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Goal title..." className="border-gray-300" />
              <textarea
                placeholder="Description..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                rows={3}
              />
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Select category</option>
                <option>Health</option>
                <option>Finance</option>
                <option>Learning</option>
                <option>Personal</option>
                <option>Career</option>
              </select>
              <Input type="date" className="border-gray-300" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Goal</Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                <TrendingUp className="w-4 h-4 mr-2" />
                Progress Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Set Milestones
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Award className="w-4 h-4 mr-2" />
                View Achievements
              </Button>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">AI Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">On Track</h4>
                <p className="text-gray-700 text-xs">Your fitness goal is progressing well. Keep up the momentum!</p>
              </div>
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Needs Attention</h4>
                <p className="text-gray-700 text-xs">
                  Reading goal is behind schedule. Consider setting daily targets.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
