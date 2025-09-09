"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Brain, Target, Clock, TrendingUp, Play, Plus, Calendar, Award } from "lucide-react"

export default function StudyPage() {
  const [activeSession, setActiveSession] = useState(null)

  const studyStats = {
    todayHours: 3.5,
    weeklyGoal: 25,
    weeklyProgress: 18.5,
    focusScore: 87,
    completedTopics: 12,
  }

  const studyPlans = [
    {
      id: 1,
      subject: "React Development",
      totalHours: 40,
      completedHours: 28,
      difficulty: "Intermediate",
      deadline: "2 weeks",
      priority: "high",
    },
    {
      id: 2,
      subject: "Data Structures",
      totalHours: 60,
      completedHours: 15,
      difficulty: "Advanced",
      deadline: "1 month",
      priority: "medium",
    },
    {
      id: 3,
      subject: "Machine Learning",
      totalHours: 80,
      completedHours: 5,
      difficulty: "Advanced",
      deadline: "3 months",
      priority: "low",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "intermediate":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Study Planner</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Personalized learning paths, intelligent scheduling, and adaptive study techniques
        </p>
      </div>

      {/* Study Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Today</h3>
            <p className="text-2xl font-bold text-blue-600">{studyStats.todayHours}h</p>
            <p className="text-gray-600 text-sm">study time</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Weekly Goal</h3>
            <p className="text-2xl font-bold text-green-600">{studyStats.weeklyProgress}h</p>
            <p className="text-gray-600 text-sm">of {studyStats.weeklyGoal}h</p>
            <Progress value={(studyStats.weeklyProgress / studyStats.weeklyGoal) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Focus Score</h3>
            <p className="text-2xl font-bold text-indigo-600">{studyStats.focusScore}%</p>
            <p className="text-gray-600 text-sm">concentration</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Completed</h3>
            <p className="text-2xl font-bold text-purple-600">{studyStats.completedTopics}</p>
            <p className="text-gray-600 text-sm">topics this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Study Plans */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Study Plans
                </CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Plan
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {studyPlans.map((plan) => (
                  <div key={plan.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-2">{plan.subject}</h3>
                        <div className="flex gap-2">
                          <Badge className={getDifficultyColor(plan.difficulty)}>{plan.difficulty}</Badge>
                          <Badge className={getPriorityColor(plan.priority)}>{plan.priority} priority</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">Deadline</p>
                        <p className="text-gray-900 font-medium">{plan.deadline}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="text-gray-900">
                          {plan.completedHours}h / {plan.totalHours}h
                        </span>
                      </div>
                      <Progress value={(plan.completedHours / plan.totalHours) * 100} className="h-2" />
                      <p className="text-gray-500 text-sm">
                        {Math.round((plan.completedHours / plan.totalHours) * 100)}% complete
                      </p>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Play className="w-4 h-4 mr-2" />
                      Start Study Session
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                AI Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Peak Performance</h4>
                  <p className="text-gray-700 text-xs">Your best study hours are 9-11 AM</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Study Technique</h4>
                  <p className="text-gray-700 text-xs">Try the Pomodoro technique for better focus</p>
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
              <Button className="w-full justify-start bg-indigo-600 hover:bg-indigo-700">
                <Play className="w-4 h-4 mr-2" />
                Quick Study
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Session
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
