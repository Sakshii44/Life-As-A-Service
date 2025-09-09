"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Target, TrendingUp, Award, BookOpen, Play, Plus, Star, Code, Palette, BarChart3 } from "lucide-react"

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const skillCategories = [
    { id: "all", name: "All Skills", count: 24 },
    { id: "technical", name: "Technical", count: 12 },
    { id: "soft", name: "Soft Skills", count: 8 },
    { id: "leadership", name: "Leadership", count: 4 },
  ]

  const skills = [
    {
      id: 1,
      name: "React Development",
      category: "technical",
      level: 85,
      experience: "3 years",
      certifications: 2,
      trending: true,
      marketDemand: "High",
      avgSalary: "₹12,00,000",
      icon: Code,
    },
    {
      id: 2,
      name: "Project Management",
      category: "leadership",
      level: 78,
      experience: "2 years",
      certifications: 1,
      trending: false,
      marketDemand: "High",
      avgSalary: "₹15,00,000",
      icon: Target,
    },
    {
      id: 3,
      name: "UI/UX Design",
      category: "technical",
      level: 72,
      experience: "2.5 years",
      certifications: 3,
      trending: true,
      marketDemand: "Medium",
      avgSalary: "₹8,50,000",
      icon: Palette,
    },
    {
      id: 4,
      name: "Data Analysis",
      category: "technical",
      level: 68,
      experience: "1.5 years",
      certifications: 1,
      trending: true,
      marketDemand: "Very High",
      avgSalary: "₹14,00,000",
      icon: BarChart3,
    },
    {
      id: 5,
      name: "Communication",
      category: "soft",
      level: 82,
      experience: "5 years",
      certifications: 0,
      trending: false,
      marketDemand: "High",
      avgSalary: "₹10,00,000",
      icon: BookOpen,
    },
    {
      id: 6,
      name: "Team Leadership",
      category: "leadership",
      level: 75,
      experience: "2 years",
      certifications: 1,
      trending: false,
      marketDemand: "High",
      avgSalary: "₹18,00,000",
      icon: Award,
    },
  ]

  const skillAssessments = [
    {
      id: 1,
      name: "Full Stack Development Assessment",
      duration: "45 min",
      questions: 25,
      difficulty: "Advanced",
      category: "Technical",
      participants: 15420,
      avgScore: 72,
    },
    {
      id: 2,
      name: "Leadership Skills Evaluation",
      duration: "30 min",
      questions: 20,
      difficulty: "Intermediate",
      category: "Leadership",
      participants: 8950,
      avgScore: 78,
    },
    {
      id: 3,
      name: "Communication Skills Test",
      duration: "25 min",
      questions: 15,
      difficulty: "Beginner",
      category: "Soft Skills",
      participants: 12300,
      avgScore: 81,
    },
  ]

  const learningPaths = [
    {
      id: 1,
      title: "Full Stack Developer Path",
      description: "Complete roadmap to become a full stack developer",
      duration: "6 months",
      courses: 12,
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      level: "Intermediate to Advanced",
      price: "₹15,999",
    },
    {
      id: 2,
      title: "Data Science Mastery",
      description: "Master data science and machine learning",
      duration: "8 months",
      courses: 15,
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      level: "Beginner to Advanced",
      price: "₹19,999",
    },
    {
      id: 3,
      title: "Product Management Excellence",
      description: "Learn product management from industry experts",
      duration: "4 months",
      courses: 8,
      skills: ["Strategy", "Analytics", "User Research", "Agile"],
      level: "Intermediate",
      price: "₹12,999",
    },
  ]

  const filteredSkills =
    selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High":
        return "bg-red-100 text-red-800 border-red-200"
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medium":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Advanced":
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
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
            <Brain className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Skills Assessment & Development</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Evaluate your skills, discover learning paths, and track your professional growth with AI-powered insights
        </p>
      </div>

      {/* Skills Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Skills</h3>
            <p className="text-2xl font-bold text-blue-600">{skills.length}</p>
            <p className="text-gray-600 text-sm">tracked</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Average Level</h3>
            <p className="text-2xl font-bold text-green-600">
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </p>
            <p className="text-gray-600 text-sm">proficiency</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Certifications</h3>
            <p className="text-2xl font-bold text-purple-600">
              {skills.reduce((acc, skill) => acc + skill.certifications, 0)}
            </p>
            <p className="text-gray-600 text-sm">earned</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Market Value</h3>
            <p className="text-2xl font-bold text-indigo-600">₹12.5L</p>
            <p className="text-gray-600 text-sm">avg salary</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Skills Categories */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <Badge variant="outline" className="border-gray-300 text-gray-600">
                      {category.count}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills List */}
        <div className="lg:col-span-3">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900">Your Skills</CardTitle>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <skill.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                          <p className="text-sm text-gray-600">{skill.experience} experience</p>
                        </div>
                      </div>
                      {skill.trending && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Proficiency</span>
                          <span className="font-medium text-gray-900">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Market Demand</p>
                          <Badge className={getDemandColor(skill.marketDemand)}>{skill.marketDemand}</Badge>
                        </div>
                        <div>
                          <p className="text-gray-500">Avg Salary</p>
                          <p className="font-medium text-gray-900">{skill.avgSalary}</p>
                        </div>
                      </div>

                      {skill.certifications > 0 && (
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span className="text-sm text-gray-600">
                            {skill.certifications} certification{skill.certifications > 1 ? "s" : ""}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Play className="w-4 h-4 mr-2" />
                        Practice
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-gray-300 bg-transparent">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Learn
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skill Assessments */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Skill Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {skillAssessments.map((assessment) => (
              <div key={assessment.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{assessment.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-gray-300 text-gray-600">
                      {assessment.category}
                    </Badge>
                    <Badge className={getDifficultyColor(assessment.difficulty)}>{assessment.difficulty}</Badge>
                  </div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="text-gray-900">{assessment.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Questions:</span>
                    <span className="text-gray-900">{assessment.questions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Participants:</span>
                    <span className="text-gray-900">{assessment.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Avg Score:</span>
                    <span className="text-gray-900">{assessment.avgScore}%</span>
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start Assessment
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Learning Paths */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Recommended Learning Paths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <div key={path.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{path.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-gray-300 text-gray-600">
                      {path.level}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">{path.duration}</Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Courses:</span>
                    <span className="text-gray-900">{path.courses}</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-2">Skills you'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {path.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{path.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-500 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">Start Learning Path</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
