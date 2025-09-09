"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dumbbell, Activity, Heart, Trophy, Play, Calendar, TrendingUp, Flame, Target } from "lucide-react"

export default function FitnessPage() {
  const [activeWorkout, setActiveWorkout] = useState(null)
  const [workoutTimer, setWorkoutTimer] = useState(0)

  const fitnessStats = {
    todaySteps: 8547,
    stepGoal: 10000,
    caloriesBurned: 420,
    activeMinutes: 45,
    heartRate: 72,
    workoutsThisWeek: 4,
  }

  const workoutPrograms = [
    {
      id: 1,
      name: "HIIT Cardio Blast",
      duration: "25 min",
      difficulty: "High",
      calories: "300-400",
      equipment: "None",
      category: "Cardio",
    },
    {
      id: 2,
      name: "Strength Building",
      duration: "45 min",
      difficulty: "Medium",
      calories: "250-350",
      equipment: "Dumbbells",
      category: "Strength",
    },
    {
      id: 3,
      name: "Yoga Flow",
      duration: "30 min",
      difficulty: "Low",
      calories: "150-200",
      equipment: "Yoga Mat",
      category: "Flexibility",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
            <Dumbbell className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Fitness Coach</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Personalized workout plans, real-time form analysis, and intelligent fitness tracking
        </p>
      </div>

      {/* Daily Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Steps</h3>
            <p className="text-2xl font-bold text-blue-600">{fitnessStats.todaySteps.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">of {fitnessStats.stepGoal.toLocaleString()}</p>
            <Progress value={(fitnessStats.todaySteps / fitnessStats.stepGoal) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Calories</h3>
            <p className="text-2xl font-bold text-orange-500">{fitnessStats.caloriesBurned}</p>
            <p className="text-gray-600 text-sm">burned today</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Heart Rate</h3>
            <p className="text-2xl font-bold text-red-600">{fitnessStats.heartRate}</p>
            <p className="text-gray-600 text-sm">bpm resting</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Workouts</h3>
            <p className="text-2xl font-bold text-indigo-600">{fitnessStats.workoutsThisWeek}</p>
            <p className="text-gray-600 text-sm">this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Workout Programs */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-red-600" />
                Workout Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workoutPrograms.map((program) => (
                  <div key={program.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1">{program.name}</h3>
                        <Badge className={getDifficultyColor(program.difficulty)}>{program.difficulty}</Badge>
                      </div>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        {program.category}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="text-gray-900 font-medium">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Calories</p>
                        <p className="text-gray-900 font-medium">{program.calories}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Equipment</p>
                        <p className="text-gray-900 font-medium">{program.equipment}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                      <Play className="w-4 h-4 mr-2" />
                      Start Workout
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Goal */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Today's Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Active Minutes</span>
                    <span className="text-sm text-gray-600">45/60 min</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Calories Burned</span>
                    <span className="text-sm text-gray-600">420/500 cal</span>
                  </div>
                  <Progress value={84} className="h-2" />
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
              <Button className="w-full justify-start bg-red-600 hover:bg-red-700">
                <Play className="w-4 h-4 mr-2" />
                Quick Workout
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Workout
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Progress
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
