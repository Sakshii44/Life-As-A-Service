"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp, Heart, Brain, Target } from "lucide-react"

interface Suggestion {
  id: string
  type: "health" | "productivity" | "mood" | "finance" | "learning"
  title: string
  description: string
  priority: "low" | "medium" | "high"
  actionable: boolean
}

export function AISuggestions() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    {
      id: "1",
      type: "health",
      title: "Hydration Reminder",
      description: "You have consumed less water today. Aim for 8 glasses to maintain optimal health.",
      priority: "medium",
      actionable: true,
    },
    {
      id: "2",
      type: "productivity",
      title: "Focus Time",
      description:
        "Based on your schedule, the next 2 hours are ideal for deep work. Consider turning off notifications.",
      priority: "high",
      actionable: true,
    },
    {
      id: "3",
      type: "mood",
      title: "Mood Boost",
      description: "Your mood score has been lower this week. Try a 10-minute meditation or call a friend.",
      priority: "medium",
      actionable: true,
    },
    {
      id: "4",
      type: "finance",
      title: "Savings Opportunity",
      description: "You spent 20% more on dining out this month. Consider meal planning to save ₹2,000.",
      priority: "low",
      actionable: true,
    },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case "health":
        return <Heart className="w-5 h-5 text-red-400" />
      case "productivity":
        return <Target className="w-5 h-5 text-blue-400" />
      case "mood":
        return <Brain className="w-5 h-5 text-purple-400" />
      case "finance":
        return <TrendingUp className="w-5 h-5 text-green-400" />
      case "learning":
        return <Lightbulb className="w-5 h-5 text-yellow-400" />
      default:
        return <Lightbulb className="w-5 h-5 text-gray-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const handleActionClick = (suggestionId: string) => {
    // Handle suggestion action
    console.log("Acting on suggestion:", suggestionId)
    // Remove suggestion after action
    setSuggestions((prev) => prev.filter((s) => s.id !== suggestionId))
  }

  return (
    <Card className="bg-black/20 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          AI Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                {getIcon(suggestion.type)}
                <h4 className="text-white font-medium">{suggestion.title}</h4>
              </div>
              <Badge className={`${getPriorityColor(suggestion.priority)} text-white text-xs`}>
                {suggestion.priority}
              </Badge>
            </div>

            <p className="text-gray-300 text-sm mb-3">{suggestion.description}</p>

            {suggestion.actionable && (
              <Button
                size="sm"
                onClick={() => handleActionClick(suggestion.id)}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              >
                Take Action
              </Button>
            )}
          </div>
        ))}

        {suggestions.length === 0 && (
          <div className="text-center py-8">
            <Lightbulb className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400">No new suggestions at the moment.</p>
            <p className="text-gray-500 text-sm">Keep using your AI assistant to get personalized recommendations!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
