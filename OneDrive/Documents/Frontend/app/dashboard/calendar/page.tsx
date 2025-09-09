"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  Plus,
  Brain,
  Zap,
  Target,
  Users,
  MapPin,
  Bell,
  Video,
  Coffee,
  Briefcase,
  Heart,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react"

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [viewMode, setViewMode] = useState("month")
  const [showAIScheduler, setShowAIScheduler] = useState(false)

  const events = [
    {
      id: 1,
      title: "Team Standup",
      time: "09:00 AM",
      duration: "30 min",
      type: "meeting",
      attendees: 5,
      location: "Conference Room A",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Client Presentation",
      time: "02:00 PM",
      duration: "1 hour",
      type: "meeting",
      attendees: 3,
      location: "Virtual",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Workout Session",
      time: "06:00 PM",
      duration: "45 min",
      type: "personal",
      location: "Gym",
      color: "bg-red-500",
    },
  ]

  const aiSuggestions = [
    {
      type: "optimization",
      title: "Schedule Optimization",
      description: "Move your workout to 7 AM for better energy levels throughout the day",
      impact: "High",
      timesSaved: "30 min",
    },
    {
      type: "conflict",
      title: "Potential Conflict",
      description: "Your commute time overlaps with the 2 PM meeting. Consider virtual attendance.",
      impact: "Medium",
      timesSaved: "45 min",
    },
    {
      type: "break",
      title: "Break Recommendation",
      description: "Add a 15-minute break between your 3-hour work block for better productivity",
      impact: "Medium",
      timesSaved: "0 min",
    },
  ]

  const productivityInsights = {
    focusTime: { today: 4.5, average: 3.8, trend: "up" },
    meetings: { today: 3, average: 4.2, trend: "down" },
    breaks: { today: 2, recommended: 4, trend: "needs_improvement" },
    efficiency: { score: 87, lastWeek: 82, trend: "up" },
  }

  const upcomingDeadlines = [
    { task: "Project Proposal", due: "Tomorrow", priority: "high", progress: 75 },
    { task: "Client Presentation", due: "Friday", priority: "high", progress: 60 },
    { task: "Code Review", due: "Next Monday", priority: "medium", progress: 90 },
    { task: "Team Report", due: "Next Week", priority: "low", progress: 30 },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return <Users className="w-4 h-4" />
      case "focus":
        return <Brain className="w-4 h-4" />
      case "personal":
        return <Coffee className="w-4 h-4" />
      case "health":
        return <Heart className="w-4 h-4" />
      case "learning":
        return <BookOpen className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar & Tasks</h1>
          <p className="text-gray-600">Manage your schedule and optimize your time</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAIScheduler(!showAIScheduler)}
            className="border-gray-300"
          >
            <Brain className="w-4 h-4 mr-2" />
            AI Scheduler
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      {/* Productivity Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-black/20 backdrop-blur-lg border-white/10">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Focus Time</h3>
            <p className="text-2xl font-bold text-purple-400">{productivityInsights.focusTime.today}h</p>
            <p className="text-gray-400 text-sm">
              +{productivityInsights.focusTime.today - productivityInsights.focusTime.average}h from avg
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/20 backdrop-blur-lg border-white/10">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Meetings</h3>
            <p className="text-2xl font-bold text-blue-400">{productivityInsights.meetings.today}</p>
            <p className="text-gray-400 text-sm">
              -{productivityInsights.meetings.average - productivityInsights.meetings.today} from avg
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/20 backdrop-blur-lg border-white/10">
          <CardContent className="p-6 text-center">
            <Coffee className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Breaks</h3>
            <p className="text-2xl font-bold text-green-400">{productivityInsights.breaks.today}</p>
            <p className="text-gray-400 text-sm">
              {productivityInsights.breaks.recommended - productivityInsights.breaks.today} more needed
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/20 backdrop-blur-lg border-white/10">
          <CardContent className="p-6 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <h3 className="text-white font-semibold">Efficiency</h3>
            <p className="text-2xl font-bold text-yellow-400">{productivityInsights.efficiency.score}%</p>
            <p className="text-gray-400 text-sm">
              +{productivityInsights.efficiency.score - productivityInsights.efficiency.lastWeek}% this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Calendar */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  {selectedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-900 hover:bg-gray-100">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-900 hover:bg-gray-100">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                  <div className="flex gap-1 ml-4">
                    {["day", "week", "month"].map((mode) => (
                      <Button
                        key={mode}
                        variant={viewMode === mode ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode(mode)}
                        className={
                          viewMode === mode ? "bg-blue-600 hover:bg-blue-700" : "text-gray-900 hover:bg-gray-100"
                        }
                      >
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-center text-gray-600 text-sm font-medium p-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square p-2 text-center text-sm cursor-pointer rounded-lg transition-colors ${
                      i === 15 ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {i - 5 > 0 && i - 5 <= 31 ? i - 5 : ""}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="bg-black/20 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <div className={`w-1 h-12 ${event.color} rounded-full`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {getEventIcon(event.type)}
                        <h4 className="text-white font-medium">{event.title}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time} ({event.duration})
                        </span>
                        {event.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        )}
                        {event.attendees && (
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.attendees} people
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`${
                          event.type === "meeting" && event.attendees > 0
                            ? "border-red-500/30 text-red-400"
                            : "border-green-500/30 text-green-400"
                        }`}
                      >
                        {event.type === "meeting" && event.attendees > 0 ? "Meeting" : "Personal"}
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                        <MoreHorizontal className="w-4 h-4" />
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
          {/* AI Suggestions */}
          <Card className="bg-black/20 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{suggestion.title}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          suggestion.impact === "High"
                            ? "border-red-500/30 text-red-400"
                            : "border-yellow-500/30 text-yellow-400"
                        }`}
                      >
                        {suggestion.impact}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs mb-2">{suggestion.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 text-xs">Saves: {suggestion.timesSaved}</span>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-xs">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card className="bg-black/20 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-red-400" />
                Upcoming Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-3 bg-white/5 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-medium text-sm">{deadline.task}</h4>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          deadline.priority === "high"
                            ? "border-red-500/30 text-red-400"
                            : deadline.priority === "medium"
                              ? "border-yellow-500/30 text-yellow-400"
                              : "border-green-500/30 text-green-400"
                        }`}
                      >
                        {deadline.due}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{deadline.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${deadline.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-black/20 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 justify-start">
                <Video className="w-4 h-4 mr-2" />
                Schedule Video Call
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
              >
                <Bell className="w-4 h-4 mr-2" />
                Set Reminder
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
              >
                <Brain className="w-4 h-4 mr-2" />
                AI Time Block
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Work Session
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Scheduler Modal */}
      {showAIScheduler && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-gradient-to-br from-slate-900 to-purple-900 border-white/10 max-w-2xl w-full">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                AI Smart Scheduler
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">What would you like to schedule?</label>
                <Input
                  placeholder="e.g., 2-hour deep work session for project planning"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Priority Level</label>
                  <select className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Duration</label>
                  <select className="w-full p-2 bg-white/10 border border-white/20 rounded-lg text-white">
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="ai-optimize" className="rounded" defaultChecked />
                <label htmlFor="ai-optimize" className="text-white text-sm">
                  Let AI find the optimal time slot based on your productivity patterns
                </label>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <Brain className="w-4 h-4 mr-2" />
                  Schedule with AI
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowAIScheduler(false)}
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
