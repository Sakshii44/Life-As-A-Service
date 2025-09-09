"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, FileText, Download, AlertTriangle } from "lucide-react"

export default function PrivacyPage() {
  const privacySettings = [
    {
      title: "Data Collection",
      description: "Control what data we collect about your usage",
      status: "Active",
      level: "Standard",
      icon: Database,
    },
    {
      title: "Data Sharing",
      description: "Manage how your data is shared with third parties",
      status: "Restricted",
      level: "High Privacy",
      icon: Shield,
    },
    {
      title: "Analytics Tracking",
      description: "Allow anonymous analytics to improve our service",
      status: "Active",
      level: "Standard",
      icon: Eye,
    },
    {
      title: "Data Encryption",
      description: "All your personal data is encrypted at rest and in transit",
      status: "Enabled",
      level: "Maximum Security",
      icon: Lock,
    },
  ]

  const dataCategories = [
    {
      category: "Personal Information",
      items: ["Name", "Email", "Phone Number", "Profile Picture"],
      retention: "Account Lifetime",
      encrypted: true,
    },
    {
      category: "Usage Data",
      items: ["App Usage", "Feature Interactions", "Performance Metrics"],
      retention: "2 Years",
      encrypted: true,
    },
    {
      category: "Health Data",
      items: ["Mood Tracking", "Sleep Patterns", "Exercise Data"],
      retention: "5 Years",
      encrypted: true,
    },
    {
      category: "Communication Data",
      items: ["Chat Messages", "Voice Recordings", "AI Interactions"],
      retention: "1 Year",
      encrypted: true,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Privacy & Data Protection</h1>
          <p className="text-gray-600">Manage your privacy settings and understand how we protect your data</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <FileText className="w-4 h-4 mr-2" />
            Privacy Policy
          </Button>
        </div>
      </div>

      {/* Privacy Overview */}
      <Card className="border-gray-200 shadow-sm bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Privacy is Protected</h3>
              <p className="text-gray-700">
                We use industry-standard encryption and privacy practices to keep your data secure. You have full
                control over your information.
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <Shield className="w-3 h-3 mr-1" />
              Secure
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Privacy Settings */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Privacy Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {privacySettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <setting.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{setting.title}</h4>
                    <p className="text-gray-600 text-sm">{setting.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={
                      setting.status === "Active" || setting.status === "Enabled"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }
                  >
                    {setting.status}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {setting.level}
                  </Badge>
                  <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                    Configure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Categories */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Data We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {dataCategories.map((category, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{category.category}</h4>
                  {category.encrypted && (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <Lock className="w-3 h-3 mr-1" />
                      Encrypted
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 mb-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Retention:</span> {category.retention}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Rights */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Your Data Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Access</h4>
              <p className="text-gray-600 text-sm">View all data we have about you</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Export</h4>
              <p className="text-gray-600 text-sm">Download your data in a portable format</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Correct</h4>
              <p className="text-gray-600 text-sm">Update or correct your information</p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Delete</h4>
              <p className="text-gray-600 text-sm">Request deletion of your data</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Privacy Questions?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 mb-2">
                If you have questions about our privacy practices or want to exercise your data rights, contact our
                privacy team.
              </p>
              <p className="text-gray-600 text-sm">
                Email: privacy@lifeasaservice.com | Response time: Within 48 hours
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Contact Privacy Team</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
