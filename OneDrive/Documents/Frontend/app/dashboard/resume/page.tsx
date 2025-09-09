"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Plus, Brain, Star } from "lucide-react"

export default function ResumePage() {
  const [resumeScore, setResumeScore] = useState(85)

  const resumeTemplates = [
    {
      id: 1,
      name: "Professional Executive",
      description: "Perfect for senior roles and management positions",
      category: "Executive",
      rating: 4.9,
      downloads: 15420,
      preview: "/placeholder.svg?height=300&width=200&text=Executive+Template",
    },
    {
      id: 2,
      name: "Tech Specialist",
      description: "Designed for software engineers and tech professionals",
      category: "Technology",
      rating: 4.8,
      downloads: 12350,
      preview: "/placeholder.svg?height=300&width=200&text=Tech+Template",
    },
    {
      id: 3,
      name: "Creative Designer",
      description: "Showcase your creativity with this modern design",
      category: "Creative",
      rating: 4.7,
      downloads: 9870,
      preview: "/placeholder.svg?height=300&width=200&text=Creative+Template",
    },
    {
      id: 4,
      name: "Fresh Graduate",
      description: "Perfect for entry-level positions and internships",
      category: "Entry Level",
      rating: 4.6,
      downloads: 18900,
      preview: "/placeholder.svg?height=300&width=200&text=Graduate+Template",
    },
  ]

  const aiSuggestions = [
    {
      type: "improvement",
      title: "Add Quantified Achievements",
      description: "Include specific numbers and metrics in your experience section",
      impact: "High",
      example: "Increased sales by 25% instead of 'Improved sales performance'",
    },
    {
      type: "keyword",
      title: "Industry Keywords Missing",
      description: "Add relevant keywords for your target role",
      impact: "Medium",
      example: "Include 'React', 'Node.js', 'Agile' for software roles",
    },
    {
      type: "format",
      title: "Optimize Section Order",
      description: "Reorder sections for better impact",
      impact: "Medium",
      example: "Move 'Projects' section above 'Education' for tech roles",
    },
  ]

  const resumeStats = {
    completeness: 85,
    atsScore: 92,
    readability: 88,
    keywords: 76,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Resume Builder</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create professional resumes with AI-powered suggestions and ATS optimization for the Indian job market
        </p>
      </div>

      {/* Resume Score */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            Resume Analysis Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${resumeStats.completeness * 2.26} 226`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{resumeStats.completeness}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Completeness</h3>
              <p className="text-sm text-gray-600">Profile completion</p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#10b981"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${resumeStats.atsScore * 2.26} 226`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{resumeStats.atsScore}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">ATS Score</h3>
              <p className="text-sm text-gray-600">System compatibility</p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#8b5cf6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${resumeStats.readability * 2.26} 226`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{resumeStats.readability}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Readability</h3>
              <p className="text-sm text-gray-600">Easy to read</p>
            </div>

            <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="#f59e0b"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${resumeStats.keywords * 2.26} 226`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">{resumeStats.keywords}%</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Keywords</h3>
              <p className="text-sm text-gray-600">Industry relevance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Resume Templates */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900">Professional Templates</CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {resumeTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                      <img
                        src={template.preview || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{template.name}</h3>
                        <p className="text-sm text-gray-600">{template.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-gray-300 text-gray-600">
                          {template.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-orange-500 fill-current" />
                          <span className="text-sm font-medium">{template.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{template.downloads.toLocaleString()} downloads</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-gray-300 bg-transparent">
                          Use Template
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Suggestions */}
        <div className="space-y-6">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{suggestion.title}</h4>
                      <Badge
                        className={
                          suggestion.impact === "High"
                            ? "bg-red-100 text-red-800 border-red-200"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                        }
                      >
                        {suggestion.impact}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{suggestion.description}</p>
                    <div className="p-2 bg-blue-50 rounded text-xs text-blue-800">
                      <strong>Example:</strong> {suggestion.example}
                    </div>
                    <Button size="sm" className="mt-3 bg-indigo-600 hover:bg-indigo-700">
                      Apply Suggestion
                    </Button>
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
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                Preview Resume
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Brain className="w-4 h-4 mr-2" />
                AI Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resume Builder Form */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Resume Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                <Input placeholder="Enter your full name" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Professional Title</label>
                <Input placeholder="e.g., Senior Software Engineer" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                <Input placeholder="+91 98765 43210" className="border-gray-300" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                <Input placeholder="Mumbai, Maharashtra, India" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">LinkedIn Profile</label>
                <Input placeholder="linkedin.com/in/yourprofile" className="border-gray-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Professional Summary</label>
                <Textarea
                  placeholder="Write a compelling summary of your professional experience..."
                  className="border-gray-300 min-h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">Save Progress</Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              Add Experience
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              Add Education
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
