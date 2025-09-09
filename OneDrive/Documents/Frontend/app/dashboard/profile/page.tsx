"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User, Mail, Phone, MapPin, Calendar, Award, TrendingUp, Target, Clock, Edit, Camera, Save } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    website: "",
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      setFormData({
        name: parsedUser.name || "",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "",
        location: parsedUser.location || "",
        bio: parsedUser.bio || "",
        website: parsedUser.website || "",
      })
    }
  }, [])

  const achievements = [
    {
      title: "Early Adopter",
      description: "Joined in the first month",
      icon: Award,
      color: "blue",
      earned: true,
    },
    {
      title: "Productivity Master",
      description: "Completed 100 tasks",
      icon: Target,
      color: "green",
      earned: true,
    },
    {
      title: "Health Champion",
      description: "30-day health streak",
      icon: TrendingUp,
      color: "red",
      earned: false,
    },
    {
      title: "AI Enthusiast",
      description: "Used AI assistant 500 times",
      icon: User,
      color: "purple",
      earned: true,
    },
  ]

  const stats = [
    {
      label: "Days Active",
      value: "127",
      icon: Calendar,
      color: "blue",
    },
    {
      label: "Tasks Completed",
      value: "1,247",
      icon: Target,
      color: "green",
    },
    {
      label: "Hours Tracked",
      value: "342",
      icon: Clock,
      color: "indigo",
    },
    {
      label: "Goals Achieved",
      value: "23",
      icon: Award,
      color: "purple",
    },
  ]

  const goals = [
    {
      title: "Complete 50 workouts",
      progress: 76,
      current: 38,
      target: 50,
      category: "Fitness",
    },
    {
      title: "Read 12 books this year",
      progress: 58,
      current: 7,
      target: 12,
      category: "Learning",
    },
    {
      title: "Save $10,000",
      progress: 45,
      current: 4500,
      target: 10000,
      category: "Finance",
    },
    {
      title: "Meditate 100 days",
      progress: 82,
      current: 82,
      target: 100,
      category: "Wellness",
    },
  ]

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem("user", JSON.stringify(updatedUser))
    setUser(updatedUser)
    setIsEditing(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (!user) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600">Manage your personal information and track your progress</p>
        </div>
        <Button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  {isEditing && (
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
                      <Camera className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  <Badge className="mt-2 bg-green-100 text-green-800 border-green-200">Premium Member</Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                  {isEditing ? (
                    <Input name="name" value={formData.name} onChange={handleInputChange} className="border-gray-300" />
                  ) : (
                    <p className="text-gray-900 p-2">{user.name}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  {isEditing ? (
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300"
                    />
                  ) : (
                    <p className="text-gray-900 p-2">{user.email}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                  {isEditing ? (
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  ) : (
                    <p className="text-gray-900 p-2">{formData.phone || "Not provided"}</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                  {isEditing ? (
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="border-gray-300"
                      placeholder="San Francisco, CA"
                    />
                  ) : (
                    <p className="text-gray-900 p-2">{formData.location || "Not provided"}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Bio</label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <p className="text-gray-900 p-2">{formData.bio || "No bio provided"}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Goals Progress */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Current Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{goal.title}</h4>
                        <p className="text-sm text-gray-600">{goal.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{goal.progress}%</p>
                        <p className="text-sm text-gray-600">
                          {goal.current} / {goal.target}
                        </p>
                      </div>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Your Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          achievement.earned ? `bg-${achievement.color}-100` : "bg-gray-100"
                        }`}
                      >
                        <achievement.icon
                          className={`w-4 h-4 ${
                            achievement.earned ? `text-${achievement.color}-600` : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div>
                        <h4 className={`font-medium ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-xs ${achievement.earned ? "text-gray-600" : "text-gray-400"}`}>
                          {achievement.description}
                        </p>
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
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Update Email
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Phone className="w-4 h-4 mr-2" />
                Verify Phone
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <MapPin className="w-4 h-4 mr-2" />
                Update Location
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
