"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Mail, Smartphone, Monitor, Settings, CheckCircle, Clock, AlertTriangle } from "lucide-react"

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Daily Health Report Ready",
      message: "Your comprehensive health analysis for today is now available",
      time: "5 minutes ago",
      type: "health",
      read: false,
      priority: "normal",
    },
    {
      id: 2,
      title: "AI Assistant Update",
      message: "New features added to your AI assistant including voice recognition improvements",
      time: "1 hour ago",
      type: "system",
      read: false,
      priority: "high",
    },
    {
      id: 3,
      title: "Weekly Goal Achievement",
      message: "Congratulations! You've completed 95% of your weekly productivity goals",
      time: "2 hours ago",
      type: "achievement",
      read: true,
      priority: "normal",
    },
    {
      id: 4,
      title: "Security Alert",
      message: "New login detected from iPhone in San Francisco, CA",
      time: "3 hours ago",
      type: "security",
      read: true,
      priority: "high",
    },
    {
      id: 5,
      title: "Mood Tracking Reminder",
      message: "Don't forget to log your mood for today to maintain your tracking streak",
      time: "5 hours ago",
      type: "reminder",
      read: true,
      priority: "low",
    },
  ])

  const notificationSettings = {
    email: {
      enabled: true,
      types: {
        health: true,
        productivity: true,
        security: true,
        marketing: false,
        system: true,
      },
    },
    push: {
      enabled: true,
      types: {
        health: true,
        productivity: true,
        security: true,
        marketing: false,
        system: true,
      },
    },
    desktop: {
      enabled: true,
      types: {
        health: false,
        productivity: true,
        security: true,
        marketing: false,
        system: true,
      },
    },
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "health":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "system":
        return <Settings className="w-5 h-5 text-blue-600" />
      case "achievement":
        return <CheckCircle className="w-5 h-5 text-indigo-600" />
      case "security":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      case "reminder":
        return <Clock className="w-5 h-5 text-orange-600" />
      default:
        return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "normal":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "low":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600">Manage your notification preferences and view recent alerts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={markAllAsRead} className="border-gray-300 bg-transparent">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All Read
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Notification Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Bell className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total</h3>
            <p className="text-2xl font-bold text-blue-600">{notifications.length}</p>
            <p className="text-gray-600 text-sm">notifications</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Unread</h3>
            <p className="text-2xl font-bold text-green-600">{notifications.filter((n) => !n.read).length}</p>
            <p className="text-gray-600 text-sm">new messages</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">High Priority</h3>
            <p className="text-2xl font-bold text-red-600">
              {notifications.filter((n) => n.priority === "high").length}
            </p>
            <p className="text-gray-600 text-sm">urgent alerts</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Today</h3>
            <p className="text-2xl font-bold text-indigo-600">{notifications.length}</p>
            <p className="text-gray-600 text-sm">received today</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Notifications */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                      notification.read ? "bg-gray-50 border-gray-200" : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className={`font-medium ${notification.read ? "text-gray-700" : "text-gray-900"}`}>
                            {notification.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <Badge className={getPriorityColor(notification.priority)}>{notification.priority}</Badge>
                            {!notification.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                          </div>
                        </div>
                        <p className={`text-sm mb-2 ${notification.read ? "text-gray-600" : "text-gray-700"}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notification Settings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Notification Channels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={notificationSettings.email.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Push Notifications</p>
                    <p className="text-sm text-gray-600">Mobile and browser notifications</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={notificationSettings.push.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="font-medium text-gray-900">Desktop</p>
                    <p className="text-sm text-gray-600">System notifications on desktop</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={notificationSettings.desktop.enabled} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-3">Notification Types</h4>
              <div className="space-y-3">
                {["health", "productivity", "security", "system"].map((type) => (
                  <div key={type} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 capitalize">{type}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={
                          notificationSettings.email.types[type as keyof typeof notificationSettings.email.types]
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
