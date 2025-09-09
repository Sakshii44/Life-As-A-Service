"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, User, Database, Settings, Upload, Download, Play, Pause, Crown, Lock, Sparkles } from "lucide-react"

export default function SelfClonePage() {
  const [cloneProgress, setCloneProgress] = useState(78)
  const [isTraining, setIsTraining] = useState(false)

  const trainingData = [
    { category: "Voice Patterns", progress: 95, status: "complete" },
    { category: "Writing Style", progress: 88, status: "training" },
    { category: "Decision Making", progress: 72, status: "training" },
    { category: "Emotional Responses", progress: 65, status: "training" },
    { category: "Knowledge Base", progress: 90, status: "complete" },
    { category: "Behavioral Patterns", progress: 58, status: "training" },
  ]

  const cloneCapabilities = [
    {
      name: "Advanced Reasoning",
      description: "Complex problem-solving and logical thinking",
      level: "Expert",
      accuracy: 94,
    },
    {
      name: "Emotional Intelligence",
      description: "Understanding and responding to emotions",
      level: "Advanced",
      accuracy: 87,
    },
    {
      name: "Creative Thinking",
      description: "Generating innovative ideas and solutions",
      level: "Advanced",
      accuracy: 82,
    },
    {
      name: "Memory Recall",
      description: "Accessing and utilizing stored memories",
      level: "Expert",
      accuracy: 96,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <Crown className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold">PRO</Badge>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Self Clone AI</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Create an advanced AI clone that thinks, responds, and behaves exactly like you. Your digital twin with your
          personality, knowledge, and decision-making patterns.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Brain className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Clone Progress</h3>
            <div className="space-y-2">
              <Progress value={cloneProgress} className="h-3" />
              <p className="text-2xl font-bold text-indigo-600">{cloneProgress}%</p>
              <p className="text-gray-600 text-sm">Training completion</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Intelligence Level</h3>
            <p className="text-2xl font-bold text-blue-600">Advanced</p>
            <p className="text-gray-600 text-sm">Cognitive capabilities</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-gray-900 font-semibold mb-2">Accuracy Score</h3>
            <p className="text-2xl font-bold text-green-600">89.2%</p>
            <p className="text-gray-600 text-sm">Response accuracy</p>
          </CardContent>
        </Card>
      </div>

      {/* Training Progress */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-600" />
            AI Training Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trainingData.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-900 font-medium">{item.category}</h4>
                    <Badge
                      className={
                        item.status === "complete"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={item.progress} className="h-2" />
                    <p className="text-gray-600 text-sm">{item.progress}% complete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <Button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              onClick={() => setIsTraining(!isTraining)}
            >
              {isTraining ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause Training
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Continue Training
                </>
              )}
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Upload className="w-4 h-4 mr-2" />
              Upload Training Data
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Configure Settings
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Clone Capabilities */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Clone Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {cloneCapabilities.map((capability, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                  <Badge
                    className={
                      capability.level === "Expert"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-blue-100 text-blue-800 border-blue-200"
                    }
                  >
                    {capability.level}
                  </Badge>
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">{capability.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{capability.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="text-gray-900 font-medium">{capability.accuracy}%</span>
                  </div>
                  <Progress value={capability.accuracy} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Memory Vault */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Database className="w-5 h-5 text-green-600" />
            Memory Vault
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <Lock className="w-3 h-3 mr-1" />
              Encrypted
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">2,847</div>
              <div className="text-gray-600 text-sm">Conversations</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">156</div>
              <div className="text-gray-600 text-sm">Documents</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">12.5h</div>
              <div className="text-gray-600 text-sm">Voice Data</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Add Memory
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export Memories
            </Button>
            <Button variant="outline" className="border-gray-300 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Privacy Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
