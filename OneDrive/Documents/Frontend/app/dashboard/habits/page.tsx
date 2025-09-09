"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Plus, Target, TrendingUp, Calendar, Flame, Award } from "lucide-react"

export default function HabitsPage() {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Meditation",
      frequency: "Daily",
      streak: 15,
      completed: true,
      category: "Wellness",
      target: 30,
      color: "blue",
    },
    {
      id: 2,
      name: "Exercise",
      frequency: "Daily",
      streak: 8,
      completed: false,
      category: "Fitness",
      target: 21,
      color: "green",
    },
    {
      id: 3,
      name: "Read for 30 minutes",
      frequency: "Daily",
      streak: 22,
      completed: true,
      category: "Learning",
      target: 30,
      color: "purple",
    },
    {
      id: 4,
      name: "Drink 8 glasses of water",
      frequency: "Daily",
      streak: 5,
      completed: false,
      category: "Health",
      target: 14,
      color: "cyan",
    },
  ])

  const habitStats = {
    totalHabits: habits.length,
    completedToday: habits.filter((h) => h.completed).length,
    longestStreak: Math.max(...habits.map((h) => h.streak)),
    averageCompletion: Math.round((habits.filter((h) => h.completed).length / habits.length) * 100),
  }

  const toggleHabit = (id: number) => {
    setHabits(habits.map((habit) => (habit.id === id ? { ...habit, completed: !habit.completed } : habit)))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <Target className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Habit Tracker</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Build lasting habits with AI-powered insights and personalized recommendations
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Habits</h3>
            <p className="text-2xl font-bold text-blue-600">{habitStats.totalHabits}</p>
            <p className="text-gray-600 text-sm">active habits</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Today</h3>
            <p className="text-2xl font-bold text-green-600">
              {habitStats.completedToday}/{habitStats.totalHabits}
            </p>
            <p className="text-gray-600 text-sm">completed</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Flame className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Best Streak</h3>
            <p className="text-2xl font-bold text-orange-600">{habitStats.longestStreak}</p>
            <p className="text-gray-600 text-sm">days</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Success Rate</h3>
            <p className="text-2xl font-bold text-indigo-600">{habitStats.averageCompletion}%</p>
            <p className="text-gray-600 text-sm">completion</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Habits List */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900">Today's Habits</CardTitle>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Habit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {habits.map((habit) => (
                  <div key={habit.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleHabit(habit.id)}
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                            habit.completed ? "bg-green-500 border-green-500" : "border-gray-300 hover:border-green-500"
                          }`}
                        >
                          {habit.completed && <CheckCircle className="w-5 h-5 text-white" />}
                        </button>
                        <div>
                          <h3
                            className={`font-semibold ${habit.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
                          >
                            {habit.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="border-gray-300 text-gray-600">
                              {habit.category}
                            </Badge>
                            <span className="text-sm text-gray-500">{habit.frequency}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span className="font-bold text-orange-600">{habit.streak}</span>
                        </div>
                        <p className="text-xs text-gray-500">day streak</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Progress to goal</span>
                        <span className="text-gray-900">
                          {habit.streak}/{habit.target} days
                        </span>
                      </div>
                      <Progress value={(habit.streak / habit.target) * 100} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Add New Habit */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Create New Habit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Habit name..." className="border-gray-300" />
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Select category</option>
                <option>Health</option>
                <option>Fitness</option>
                <option>Learning</option>
                <option>Wellness</option>
                <option>Productivity</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <Button className="w-full bg-green-600 hover:bg-green-700">Create Habit</Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Award className="w-4 h-4 mr-2" />
                Achievements
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
