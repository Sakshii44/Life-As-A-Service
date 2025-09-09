"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, Clock, Users, CheckCircle, Plus, Play, TrendingUp, Calendar, FileText, Video } from "lucide-react"

export default function WorkPage() {
  const workStats = {
    todayHours: 6.5,
    productivity: 87,
    tasksCompleted: 12,
    meetingsToday: 3,
  }

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      client: "TechCorp Inc.",
      progress: 75,
      deadline: "Next Friday",
      priority: "high",
      team: 4,
      tasks: 24,
      completedTasks: 18,
    },
    {
      id: 2,
      name: "Mobile App Development",
      client: "StartupXYZ",
      progress: 45,
      deadline: "2 weeks",
      priority: "medium",
      team: 6,
      tasks: 32,
      completedTasks: 14,
    },
  ]

  const todaysTasks = [
    {
      id: 1,
      title: "Review design mockups",
      project: "Website Redesign",
      priority: "high",
      completed: false,
      dueTime: "10:00 AM",
    },
    {
      id: 2,
      title: "Client presentation prep",
      project: "Mobile App Development",
      priority: "high",
      completed: true,
      dueTime: "2:00 PM",
    },
    {
      id: 3,
      title: "Code review",
      project: "Website Redesign",
      priority: "medium",
      completed: false,
      dueTime: "4:00 PM",
    },
  ]

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
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Work Management Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          AI-powered project management, time tracking, and productivity optimization
        </p>
      </div>

      {/* Work Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Today</h3>
            <p className="text-2xl font-bold text-blue-600">{workStats.todayHours}h</p>
            <p className="text-gray-600 text-sm">work time</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Productivity</h3>
            <p className="text-2xl font-bold text-green-600">{workStats.productivity}%</p>
            <p className="text-gray-600 text-sm">efficiency score</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Tasks</h3>
            <p className="text-2xl font-bold text-indigo-600">{workStats.tasksCompleted}</p>
            <p className="text-gray-600 text-sm">completed today</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Meetings</h3>
            <p className="text-2xl font-bold text-purple-600">{workStats.meetingsToday}</p>
            <p className="text-gray-600 text-sm">scheduled today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Projects */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                  Active Projects
                </CardTitle>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-gray-900 font-semibold mb-1">{project.name}</h3>
                        <p className="text-gray-600 text-sm">{project.client}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-500 text-sm">Progress</p>
                        <p className="text-gray-900 font-bold">{project.progress}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Deadline</p>
                        <p className="text-gray-900 font-medium">{project.deadline}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Team</p>
                        <p className="text-gray-900 font-medium">{project.team} members</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Tasks</p>
                        <p className="text-gray-900 font-medium">
                          {project.completedTasks}/{project.tasks}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Start Working
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Tasks */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Today's Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaysTasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        task.completed ? "bg-green-500 border-green-500" : "border-gray-300"
                      }`}
                    >
                      {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium text-sm ${task.completed ? "text-gray-500 line-through" : "text-gray-900"}`}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{task.project}</span>
                        <span>{task.dueTime}</span>
                        <Badge className={getPriorityColor(task.priority)} variant="outline">
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
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
                Start Focus Session
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Video className="w-4 h-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <FileText className="w-4 h-4 mr-2" />
                Create Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
