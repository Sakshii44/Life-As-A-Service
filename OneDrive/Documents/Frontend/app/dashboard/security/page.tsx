"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Key, Smartphone, AlertTriangle, CheckCircle, Eye, EyeOff } from "lucide-react"

export default function SecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const securityStatus = [
    {
      title: "Two-Factor Authentication",
      description: "Add an extra layer of security to your account",
      status: "Enabled",
      icon: Smartphone,
      color: "green",
    },
    {
      title: "Password Strength",
      description: "Your password meets security requirements",
      status: "Strong",
      icon: Lock,
      color: "green",
    },
    {
      title: "Login Alerts",
      description: "Get notified of suspicious login attempts",
      status: "Active",
      icon: AlertTriangle,
      color: "blue",
    },
    {
      title: "Session Management",
      description: "Monitor and control your active sessions",
      status: "3 Active",
      icon: Shield,
      color: "blue",
    },
  ]

  const recentActivity = [
    {
      action: "Login",
      device: "MacBook Pro",
      location: "San Francisco, CA",
      time: "2 hours ago",
      status: "success",
    },
    {
      action: "Password Changed",
      device: "iPhone 14",
      location: "San Francisco, CA",
      time: "1 day ago",
      status: "success",
    },
    {
      action: "Failed Login Attempt",
      device: "Unknown Device",
      location: "New York, NY",
      time: "3 days ago",
      status: "blocked",
    },
    {
      action: "2FA Enabled",
      device: "MacBook Pro",
      location: "San Francisco, CA",
      time: "1 week ago",
      status: "success",
    },
  ]

  const activeSessions = [
    {
      device: "MacBook Pro",
      browser: "Chrome 120.0",
      location: "San Francisco, CA",
      lastActive: "Active now",
      current: true,
    },
    {
      device: "iPhone 14",
      browser: "Safari Mobile",
      location: "San Francisco, CA",
      lastActive: "2 hours ago",
      current: false,
    },
    {
      device: "iPad Air",
      browser: "Safari",
      location: "San Francisco, CA",
      lastActive: "1 day ago",
      current: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
          <p className="text-gray-600">Manage your account security and monitor suspicious activity</p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Security Scan
        </Button>
      </div>

      {/* Security Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        {securityStatus.map((item, index) => (
          <Card key={index} className="border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <Badge
                  className={
                    item.color === "green"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-blue-100 text-blue-800 border-blue-200"
                  }
                >
                  {item.status}
                </Badge>
              </div>
              <h3 className="text-gray-900 font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Password Change */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Key className="w-5 h-5 text-blue-600" />
              Change Password
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Current Password</label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  className="border-gray-300 pr-10"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">New Password</label>
              <div className="relative">
                <Input
                  type={showNewPassword ? "text" : "password"}
                  className="border-gray-300 pr-10"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Confirm New Password</label>
              <Input type="password" className="border-gray-300" placeholder="Confirm new password" />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Update Password</Button>
          </CardContent>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-600" />
              Two-Factor Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">2FA is Enabled</p>
                  <p className="text-sm text-gray-600">Using authenticator app</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
            </div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full border-gray-300 bg-transparent">
                View Recovery Codes
              </Button>
              <Button variant="outline" className="w-full border-gray-300 bg-transparent">
                Regenerate Codes
              </Button>
              <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
                Disable 2FA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Sessions */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Active Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">{session.device}</h4>
                      {session.current && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">Current</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{session.browser}</p>
                    <p className="text-gray-500 text-xs">
                      {session.location} • {session.lastActive}
                    </p>
                  </div>
                </div>
                {!session.current && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Recent Security Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.status === "success"
                      ? "bg-green-500"
                      : activity.status === "blocked"
                        ? "bg-red-500"
                        : "bg-orange-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{activity.action}</h4>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {activity.device} • {activity.location}
                  </p>
                </div>
                <Badge
                  className={
                    activity.status === "success"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : activity.status === "blocked"
                        ? "bg-red-100 text-red-800 border-red-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                  }
                >
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
