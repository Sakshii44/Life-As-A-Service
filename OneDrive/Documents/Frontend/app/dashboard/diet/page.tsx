"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Apple, Camera, Plus, Search, ChefHat, Flame, Droplets, Target, TrendingUp } from "lucide-react"

export default function DietPage() {
  const [selectedMeal, setSelectedMeal] = useState("breakfast")

  const dailyNutrition = {
    calories: { consumed: 1650, goal: 2000, remaining: 350 },
    protein: { consumed: 85, goal: 120, remaining: 35 },
    carbs: { consumed: 180, goal: 250, remaining: 70 },
    fat: { consumed: 65, goal: 80, remaining: 15 },
  }

  const todaysMeals = {
    breakfast: {
      items: ["Oatmeal with berries", "Greek yogurt", "Green tea"],
      calories: 420,
      time: "8:00 AM",
    },
    lunch: {
      items: ["Grilled chicken salad", "Quinoa", "Olive oil dressing"],
      calories: 580,
      time: "12:30 PM",
    },
    dinner: {
      items: ["Salmon fillet", "Roasted vegetables", "Brown rice"],
      calories: 650,
      time: "7:00 PM",
    },
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <Apple className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Nutrition Coach</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Personalized nutrition tracking with AI-powered meal planning and health insights
        </p>
      </div>

      {/* Daily Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Calories</h3>
            <p className="text-2xl font-bold text-orange-500">{dailyNutrition.calories.consumed}</p>
            <p className="text-gray-600 text-sm">of {dailyNutrition.calories.goal}</p>
            <Progress
              value={(dailyNutrition.calories.consumed / dailyNutrition.calories.goal) * 100}
              className="h-2 mt-2"
            />
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Protein</h3>
            <p className="text-2xl font-bold text-blue-600">{dailyNutrition.protein.consumed}g</p>
            <p className="text-gray-600 text-sm">of {dailyNutrition.protein.goal}g</p>
            <Progress
              value={(dailyNutrition.protein.consumed / dailyNutrition.protein.goal) * 100}
              className="h-2 mt-2"
            />
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Apple className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Carbs</h3>
            <p className="text-2xl font-bold text-green-600">{dailyNutrition.carbs.consumed}g</p>
            <p className="text-gray-600 text-sm">of {dailyNutrition.carbs.goal}g</p>
            <Progress value={(dailyNutrition.carbs.consumed / dailyNutrition.carbs.goal) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Fat</h3>
            <p className="text-2xl font-bold text-cyan-600">{dailyNutrition.fat.consumed}g</p>
            <p className="text-gray-600 text-sm">of {dailyNutrition.fat.goal}g</p>
            <Progress value={(dailyNutrition.fat.consumed / dailyNutrition.fat.goal) * 100} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Meal Logging */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Apple className="w-5 h-5 text-green-600" />
                Today's Meals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Meal Type Selector */}
                <div className="flex gap-2">
                  {Object.keys(todaysMeals).map((meal) => (
                    <Button
                      key={meal}
                      variant={selectedMeal === meal ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMeal(meal)}
                      className={selectedMeal === meal ? "bg-green-600 hover:bg-green-700" : "border-gray-300"}
                    >
                      {meal.charAt(0).toUpperCase() + meal.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Current Meal Display */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-gray-900 font-medium capitalize">{selectedMeal}</h4>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                      {todaysMeals[selectedMeal as keyof typeof todaysMeals].calories} cal
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {todaysMeals[selectedMeal as keyof typeof todaysMeals].items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Logged at {todaysMeals[selectedMeal as keyof typeof todaysMeals].time}
                  </p>
                </div>

                {/* Add Food Options */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Button className="h-16 bg-blue-600 hover:bg-blue-700 flex-col">
                    <Camera className="w-6 h-6 mb-1" />
                    <span className="text-sm">Scan Food</span>
                  </Button>
                  <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col bg-transparent">
                    <Search className="w-6 h-6 mb-1 text-gray-600" />
                    <span className="text-sm">Search Database</span>
                  </Button>
                  <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col bg-transparent">
                    <Plus className="w-6 h-6 mb-1 text-gray-600" />
                    <span className="text-sm">Manual Entry</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Protein Boost</h4>
                  <p className="text-gray-700 text-xs">Add 35g more protein to reach your daily goal</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Hydration</h4>
                  <p className="text-gray-700 text-xs">Drink 2 more glasses of water today</p>
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
                <ChefHat className="w-4 h-4 mr-2" />
                Meal Plan
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                Nutrition Report
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
