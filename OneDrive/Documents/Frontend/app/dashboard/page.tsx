"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { AIAssistant3D } from "@/components/ai-assistant-3d"
import { VoiceRecorder } from "@/components/voice-recorder"
import {
  Calendar,
  CheckCircle,
  Clock,
  Brain,
  Heart,
  TrendingUp,
  BarChart3,
  Plus,
  Settings,
  MessageSquare,
} from "lucide-react"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [aiResponse, setAiResponse] = useState("")
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleVoiceInput = (transcript: string) => {
    setAiResponse(`I heard: "${transcript}". How can I help you with that?`)
  }

  const todaysTasks = [
    { id: 1, title: "Morning meditation", completed: true, time: "07:00 AM", category: "Wellness" },
    { id: 2, title: "Team standup meeting", completed: true, time: "09:00 AM", category: "Work" },
    { id: 3, title: "Workout session", completed: false, time: "06:00 PM", category: "Fitness" },
    { id: 4, title: "Review project proposal", completed: false, time: "02:00 PM", category: "Work" },
    { id: 5, title: "Grocery shopping", completed: false, time: "07:30 PM", category: "Personal" },
  ]

  const upcomingEvents = [
    { id: 1, title: "Client presentation", date: "Tomorrow", time: "10:00 AM", type: "meeting" },
    { id: 2, title: "Doctor appointment", date: "Friday", time: "02:00 PM", type: "health" },
    { id: 3, title: "Weekend trip", date: "Saturday", time: "09:00 AM", type: "personal" },
  ]

  const healthMetrics = {
    steps: { current: 8547, goal: 10000 },
    water: { current: 6, goal: 8 },
    sleep: { current: 7.5, goal: 8 },
    mood: { current: 8.2, goal: 10 },
  }

  const quickStats = [
    { label: "Tasks Completed", value: "12/18", icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
    { label: "Focus Time", value: "4.2h", icon: Clock, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Health Score", value: "87%", icon: Heart, color: "text-red-600", bg: "bg-red-100" },
    { label: "Productivity", value: "92%", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-100" },
  ]

  if (!user) return null

  return (
    <div className="space-y-6">
      {/* Welcome Section with AI Assistant */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* AI Assistant - Prominent Position */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-professional-lg bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-600" />
                AI Life Assistant
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Voice Enabled</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* 3D Avatar */}
                <div className="h-80 rounded-lg overflow-hidden bg-gradient-to-b from-blue-100 to-indigo-100 border border-blue-200">
                  <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                    <Environment preset="studio" />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <AIAssistant3D />
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Canvas>
                </div>

                {/* Voice Interface */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Hello, {user.name}!</h3>
                    <p className="text-gray-600 mb-4">
                      I'm your AI assistant. Speak to me and I'll help optimize your day.
                    </p>
                  </div>

                  {/* Voice Controls */}
                  <div className="flex justify-center">
                    <VoiceRecorder onTranscript={handleVoiceInput} />
                  </div>

                  {/* AI Response */}
                  {aiResponse && (
                    <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">AI Assistant</p>
                          <p className="text-gray-700 text-sm">{aiResponse}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Quick Voice Commands */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Try saying:</p>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-600">"Schedule a meeting for tomorrow"</p>
                      <p className="text-xs text-gray-600">"How's my health today?"</p>
                      <p className="text-xs text-gray-600">"Show me my productivity stats"</p>
                      <p className="text-xs text-gray-600">"What should I focus on today?"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Time & Weather */}
        <div className="space-y-6">
          <Card className="border-gray-200 shadow-sm bg-gradient-to-br from-slate-50 to-gray-100">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
              </div>
              <div className="text-gray-600 mb-4">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="text-sm text-gray-500">
                Good {currentTime.getHours() < 12 ? "Morning" : currentTime.getHours() < 18 ? "Afternoon" : "Evening"}!
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat with AI
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <Calendar className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start border-gray-300 hover:bg-gray-50 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Today's Tasks
                </CardTitle>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.completed ? "bg-green-500 border-green-500" : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{task.time}</span>
                        <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {task.category}
                        </Badge>
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
          {/* Health Metrics */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-600" />
                Health Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Steps</span>
                    <span className="text-sm text-gray-600">
                      {healthMetrics.steps.current.toLocaleString()}/{healthMetrics.steps.goal.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={(healthMetrics.steps.current / healthMetrics.steps.goal) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Water Intake</span>
                    <span className="text-sm text-gray-600">
                      {healthMetrics.water.current}/{healthMetrics.water.goal} glasses
                    </span>
                  </div>
                  <Progress value={(healthMetrics.water.current / healthMetrics.water.goal) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Sleep</span>
                    <span className="text-sm text-gray-600">
                      {healthMetrics.sleep.current}h/{healthMetrics.sleep.goal}h
                    </span>
                  </div>
                  <Progress value={(healthMetrics.sleep.current / healthMetrics.sleep.goal) * 100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Mood Score</span>
                    <span className="text-sm text-gray-600">{healthMetrics.mood.current}/10</span>
                  </div>
                  <Progress value={(healthMetrics.mood.current / healthMetrics.mood.goal) * 100} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        event.type === "meeting"
                          ? "bg-blue-500"
                          : event.type === "health"
                            ? "bg-red-500"
                            : "bg-green-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                      <p className="text-gray-500 text-xs">
                        {event.date} at {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
