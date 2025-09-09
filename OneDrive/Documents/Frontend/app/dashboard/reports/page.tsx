"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, BarChart3, TrendingUp, Clock } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      title: "Weekly Life Summary",
      description: "Comprehensive overview of your weekly activities and achievements",
      date: "Dec 15, 2024",
      type: "Weekly",
      status: "Ready",
      size: "2.3 MB",
    },
    {
      title: "Monthly Health Report",
      description: "Detailed analysis of your health metrics and wellness trends",
      date: "Dec 1, 2024",
      type: "Monthly",
      status: "Ready",
      size: "4.1 MB",
    },
    {
      title: "Productivity Analysis",
      description: "Deep dive into your productivity patterns and optimization opportunities",
      date: "Dec 10, 2024",
      type: "Custom",
      status: "Processing",
      size: "1.8 MB",
    },
    {
      title: "Goal Achievement Report",
      description: "Progress tracking and analysis of your personal and professional goals",
      date: "Dec 5, 2024",
      type: "Monthly",
      status: "Ready",
      size: "3.2 MB",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and download comprehensive life reports</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Report Types */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Analytics Report</h3>
            <p className="text-gray-600 text-sm">Comprehensive data analysis and insights</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Progress Report</h3>
            <p className="text-gray-600 text-sm">Track your goals and achievements</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Time Report</h3>
            <p className="text-gray-600 text-sm">Analyze how you spend your time</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{report.title}</h4>
                    <p className="text-gray-600 text-sm">{report.description}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-gray-500">{report.date}</span>
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                        {report.type}
                      </Badge>
                      <span className="text-xs text-gray-500">{report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    className={
                      report.status === "Ready"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-orange-100 text-orange-800 border-orange-200"
                    }
                  >
                    {report.status}
                  </Badge>
                  {report.status === "Ready" && (
                    <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
