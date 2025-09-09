"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Video, Mic, Brain, Play, Clock, Target, Award, BookOpen, Users, MessageSquare } from "lucide-react"

export default function InterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)

  const interviewStats = {
    practiceHours: 12.5,
    questionsAnswered: 45,
    averageScore: 8.2,
    improvementRate: 15,
  }

  const interviewTypes = [
    {
      id: 1,
      name: "Technical Interview",
      description: "Coding problems and system design questions",
      duration: "45-60 min",
      difficulty: "Advanced",
      questions: 25,
      category: "Technical",
    },
    {
      id: 2,
      name: "Behavioral Interview",
      description: "Situational and behavioral questions",
      duration: "30-45 min",
      difficulty: "Intermediate",
      questions: 20,
      category: "Behavioral",
    },
    {
      id: 3,
      name: "HR Round",
      description: "Company culture and general questions",
      duration: "20-30 min",
      difficulty: "Beginner",
      questions: 15,
      category: "HR",
    },
    {
      id: 4,
      name: "Case Study",
      description: "Business case analysis and problem solving",
      duration: "60-90 min",
      difficulty: "Advanced",
      questions: 10,
      category: "Case Study",
    },
  ]

  const sampleQuestions = [
    {
      id: 1,
      question: "Tell me about yourself and your professional journey.",
      type: "Behavioral",
      difficulty: "Easy",
      tips: "Keep it concise, focus on relevant experience, and end with why you're interested in this role.",
    },
    {
      id: 2,
      question: "Explain the difference between React hooks and class components.",
      type: "Technical",
      difficulty: "Medium",
      tips: "Cover lifecycle methods, state management, and performance implications.",
    },
    {
      id: 3,
      question: "Describe a challenging project you worked on and how you overcame obstacles.",
      type: "Behavioral",
      difficulty: "Medium",
      tips: "Use the STAR method: Situation, Task, Action, Result.",
    },
    {
      id: 4,
      question: "How would you design a scalable chat application?",
      type: "Technical",
      difficulty: "Hard",
      tips: "Discuss architecture, database design, real-time communication, and scaling strategies.",
    },
  ]

  const aiInsights = [
    {
      type: "strength",
      title: "Strong Technical Knowledge",
      description: "Your technical answers show deep understanding of concepts",
      score: 9.2,
    },
    {
      type: "improvement",
      title: "Communication Clarity",
      description: "Work on structuring your answers more clearly",
      score: 7.1,
    },
    {
      type: "improvement",
      title: "Confidence Level",
      description: "Practice speaking with more confidence and conviction",
      score: 6.8,
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
      case "easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "intermediate":
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "advanced":
      case "hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
            <Video className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Interview Preparation</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Practice interviews with AI-powered feedback, mock sessions, and personalized coaching for Indian job market
        </p>
      </div>

      {/* Interview Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Practice Hours</h3>
            <p className="text-2xl font-bold text-blue-600">{interviewStats.practiceHours}h</p>
            <p className="text-gray-600 text-sm">total practice</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Questions</h3>
            <p className="text-2xl font-bold text-green-600">{interviewStats.questionsAnswered}</p>
            <p className="text-gray-600 text-sm">answered</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Average Score</h3>
            <p className="text-2xl font-bold text-purple-600">{interviewStats.averageScore}/10</p>
            <p className="text-gray-600 text-sm">performance</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Improvement</h3>
            <p className="text-2xl font-bold text-indigo-600">+{interviewStats.improvementRate}%</p>
            <p className="text-gray-600 text-sm">this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Interview Types */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Interview Practice Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {interviewTypes.map((type) => (
                  <div
                    key={type.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{type.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                      </div>
                      <Badge variant="outline" className="border-gray-300 text-gray-600">
                        {type.category}
                      </Badge>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="text-gray-900">{type.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Questions:</span>
                        <span className="text-gray-900">{type.questions}</span>
                      </div>
                      <div className="flex justify-between text-sm items-center">
                        <span className="text-gray-500">Difficulty:</span>
                        <Badge className={getDifficultyColor(type.difficulty)}>{type.difficulty}</Badge>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Play className="w-4 h-4 mr-2" />
                      Start Practice
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sample Questions */}
          <Card className="border-gray-200 shadow-sm mt-6">
            <CardHeader>
              <CardTitle className="text-gray-900">Practice Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleQuestions.map((q, index) => (
                  <div key={q.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-2">{q.question}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-gray-300 text-gray-600">
                            {q.type}
                          </Badge>
                          <Badge className={getDifficultyColor(q.difficulty)}>{q.difficulty}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg mb-3">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> {q.tips}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Mic className="w-4 h-4 mr-2" />
                        Record Answer
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Feedback
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Brain className="w-5 h-5 text-indigo-600" />
                AI Performance Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                      <span
                        className={`text-sm font-bold ${
                          insight.type === "strength" ? "text-green-600" : "text-orange-600"
                        }`}
                      >
                        {insight.score}/10
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{insight.description}</p>
                    <Progress value={insight.score * 10} className="h-2" />
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
              <Button className="w-full justify-start bg-red-600 hover:bg-red-700">
                <Video className="w-4 h-4 mr-2" />
                Mock Interview
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <BookOpen className="w-4 h-4 mr-2" />
                Study Guide
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Users className="w-4 h-4 mr-2" />
                Peer Practice
              </Button>
            </CardContent>
          </Card>

          {/* Interview Tips */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Interview Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">STAR Method</h4>
                  <p className="text-gray-700 text-xs">Structure behavioral answers: Situation, Task, Action, Result</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Research Company</h4>
                  <p className="text-gray-700 text-xs">Know the company's mission, values, and recent news</p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Ask Questions</h4>
                  <p className="text-gray-700 text-xs">Prepare thoughtful questions about the role and team</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
