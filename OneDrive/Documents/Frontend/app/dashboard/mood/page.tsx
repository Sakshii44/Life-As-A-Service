"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Camera, Mic, TrendingUp, Activity, Sun, Cloud, Smile, Frown, Meh, Star } from "lucide-react"

export default function MoodPage() {
  const [currentMood, setCurrentMood] = useState(7)

  const moodHistory = [
    { date: "Today", mood: 7, energy: 8, stress: 3, notes: "Productive day, feeling optimistic" },
    { date: "Yesterday", mood: 6, energy: 6, stress: 5, notes: "Bit tired but managed well" },
    { date: "2 days ago", mood: 8, energy: 9, stress: 2, notes: "Great workout, excellent mood" },
  ]

  const moodInsights = [
    {
      title: "Weekly Pattern Detected",
      description: "Your mood tends to be highest on weekends and lowest on Wednesdays",
      confidence: 87,
    },
    {
      title: "Stress Trigger Identified",
      description: "Work meetings after 4 PM correlate with 23% lower mood scores",
      confidence: 92,
    },
  ]

  const getMoodIcon = (mood: number) => {
    if (mood >= 8) return <Smile className="w-6 h-6 text-green-600" />
    if (mood >= 6) return <Meh className="w-6 h-6 text-orange-500" />
    return <Frown className="w-6 h-6 text-red-600" />
  }

  const getWeatherIcon = (mood: number) => {
    if (mood >= 8) return <Sun className="w-8 h-8 text-orange-500" />
    return <Cloud className="w-8 h-8 text-gray-500" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">{getWeatherIcon(currentMood)}</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mood & Emotional Intelligence</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track, analyze, and improve your emotional well-being with AI-powered insights
        </p>
      </div>

      {/* Current Mood */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">{getMoodIcon(currentMood)}</div>
            <h3 className="text-gray-900 font-semibold mb-2">Current Mood</h3>
            <p className="text-3xl font-bold text-gray-900">{currentMood}/10</p>
            <p className="text-gray-600 text-sm">Above average</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Activity className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Energy Level</h3>
            <p className="text-3xl font-bold text-blue-600">8/10</p>
            <p className="text-gray-600 text-sm">High energy</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Stress Level</h3>
            <p className="text-3xl font-bold text-red-600">3/10</p>
            <p className="text-gray-600 text-sm">Low stress</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Mental Clarity</h3>
            <p className="text-3xl font-bold text-indigo-600">9/10</p>
            <p className="text-gray-600 text-sm">Very clear</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mood Recording */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Record Your Mood
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Mood Slider */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-gray-900 font-medium">How are you feeling right now?</label>
                    <span className="text-2xl font-bold text-gray-900">{currentMood}/10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={currentMood}
                    onChange={(e) => setCurrentMood(Number.parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>Very Low</span>
                    <span>Neutral</span>
                    <span>Very High</span>
                  </div>
                </div>

                {/* Recording Options */}
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 border-gray-300 hover:bg-gray-50 flex-col bg-transparent">
                    <Camera className="w-6 h-6 mb-2 text-gray-600" />
                    <span className="text-sm">Video Mood</span>
                  </Button>
                  <Button variant="outline" className="h-20 border-gray-300 hover:bg-gray-50 flex-col bg-transparent">
                    <Mic className="w-6 h-6 mb-2 text-gray-600" />
                    <span className="text-sm">Voice Note</span>
                  </Button>
                  <Button variant="outline" className="h-20 border-gray-300 hover:bg-gray-50 flex-col bg-transparent">
                    <Brain className="w-6 h-6 mb-2 text-gray-600" />
                    <span className="text-sm">AI Analysis</span>
                  </Button>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700">
                  <Heart className="w-4 h-4 mr-2" />
                  Save Mood Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moodInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="text-gray-900 font-medium text-sm mb-2">{insight.title}</h4>
                    <p className="text-gray-600 text-xs mb-2">{insight.description}</p>
                    <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Mood Boosters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                <Star className="w-4 h-4 mr-2" />
                Gratitude Practice
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Activity className="w-4 h-4 mr-2" />
                Quick Exercise
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Brain className="w-4 h-4 mr-2" />
                Meditation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mood History */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Recent Mood History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {moodHistory.map((entry, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  {getMoodIcon(entry.mood)}
                  <div>
                    <p className="text-gray-900 font-medium">{entry.date}</p>
                    <p className="text-gray-600 text-sm">{entry.notes}</p>
                  </div>
                </div>
                <div className="ml-auto grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500 text-xs">Mood</p>
                    <p className="font-bold text-gray-900">{entry.mood}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Energy</p>
                    <p className="font-bold text-blue-600">{entry.energy}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Stress</p>
                    <p className="font-bold text-red-600">{entry.stress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
