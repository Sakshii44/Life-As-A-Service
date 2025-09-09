"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, User, Bell, Shield, Palette } from "lucide-react"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    desktop: true,
  })

  const [privacy, setPrivacy] = useState({
    dataCollection: true,
    analytics: true,
    marketing: false,
    thirdParty: false,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and system settings</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-gray-100">
          <TabsTrigger value="profile" className="text-gray-700 data-[state=active]:bg-white">
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-gray-700 data-[state=active]:bg-white">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="text-gray-700 data-[state=active]:bg-white">
            Privacy
          </TabsTrigger>
          <TabsTrigger value="appearance" className="text-gray-700 data-[state=active]:bg-white">
            Appearance
          </TabsTrigger>
          <TabsTrigger value="advanced" className="text-gray-700 data-[state=active]:bg-white">
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                  <Input defaultValue="John" className="border-gray-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                  <Input defaultValue="Doe" className="border-gray-300" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                <Input defaultValue="john.doe@example.com" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number</label>
                <Input defaultValue="+1 (555) 123-4567" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Bio</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-600" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 capitalize">{key} Notifications</h4>
                    <p className="text-sm text-gray-600">
                      Receive notifications via {key === "push" ? "push notifications" : key}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setNotifications((prev) => ({ ...prev, [key]: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(privacy).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</h4>
                    <p className="text-sm text-gray-600">
                      {key === "dataCollection" && "Allow collection of usage data for service improvement"}
                      {key === "analytics" && "Enable analytics to help us understand how you use our service"}
                      {key === "marketing" && "Receive marketing communications and promotional offers"}
                      {key === "thirdParty" && "Share data with trusted third-party partners"}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setPrivacy((prev) => ({ ...prev, [key]: e.target.checked }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Palette className="w-5 h-5 text-indigo-600" />
                Appearance Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Theme</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border-2 border-blue-500 rounded-lg cursor-pointer bg-white">
                    <div className="w-full h-20 bg-white border rounded mb-2"></div>
                    <p className="text-sm font-medium text-center">Light</p>
                  </div>
                  <div className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
                    <div className="w-full h-20 bg-gray-800 rounded mb-2"></div>
                    <p className="text-sm font-medium text-center">Dark</p>
                  </div>
                  <div className="p-4 border-2 border-gray-300 rounded-lg cursor-pointer">
                    <div className="w-full h-20 bg-gradient-to-r from-white to-gray-800 rounded mb-2"></div>
                    <p className="text-sm font-medium text-center">Auto</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-4">Color Scheme</h4>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer border-2 border-blue-600"></div>
                  <div className="w-8 h-8 bg-green-600 rounded-full cursor-pointer border-2 border-gray-300"></div>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full cursor-pointer border-2 border-gray-300"></div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full cursor-pointer border-2 border-gray-300"></div>
                  <div className="w-8 h-8 bg-red-600 rounded-full cursor-pointer border-2 border-gray-300"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-gray-600" />
                Advanced Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Language</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Timezone</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
                    <option>UTC-8 (Pacific Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC+0 (GMT)</option>
                    <option>UTC+1 (Central European Time)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Date Format</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">Danger Zone</h4>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Export All Data
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
