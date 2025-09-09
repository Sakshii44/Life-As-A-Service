"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, TrendingUp, Target, MapPin, Users, ArrowRight, Building } from "lucide-react"

export default function CareerPage() {
  const [selectedPath, setSelectedPath] = useState("software-engineer")

  const careerPaths = [
    {
      id: "software-engineer",
      title: "Software Engineer",
      description: "Build applications and systems using modern technologies",
      currentLevel: "Mid-Level",
      nextLevel: "Senior Software Engineer",
      progress: 68,
      avgSalary: "₹12,00,000 - ₹25,00,000",
      growth: "+15%",
      demand: "Very High",
      skills: ["React", "Node.js", "Python", "AWS", "Docker"],
      companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Zomato"],
    },
    {
      id: "product-manager",
      title: "Product Manager",
      description: "Drive product strategy and work with cross-functional teams",
      currentLevel: "Associate PM",
      nextLevel: "Senior Product Manager",
      progress: 45,
      avgSalary: "₹15,00,000 - ₹35,00,000",
      growth: "+22%",
      demand: "High",
      skills: ["Strategy", "Analytics", "User Research", "Agile", "SQL"],
      companies: ["Swiggy", "Paytm", "Ola", "Byju's", "Razorpay"],
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Extract insights from data to drive business decisions",
      currentLevel: "Junior Data Scientist",
      nextLevel: "Data Scientist",
      progress: 35,
      avgSalary: "₹8,00,000 - ₹20,00,000",
      growth: "+28%",
      demand: "Very High",
      skills: ["Python", "Machine Learning", "Statistics", "SQL", "Tableau"],
      companies: ["Jio", "Tata", "Infosys", "TCS", "Wipro"],
    },
  ]

  const jobRecommendations = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Mahindra",
      location: "Bangalore, Karnataka",
      salary: "₹15,00,000 - ₹22,00,000",
      experience: "3-5 years",
      type: "Full-time",
      posted: "2 days ago",
      match: 92,
      skills: ["React", "JavaScript", "Node.js", "MongoDB"],
      remote: true,
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Infosys",
      location: "Pune, Maharashtra",
      salary: "₹12,00,000 - ₹18,00,000",
      experience: "2-4 years",
      type: "Full-time",
      posted: "1 day ago",
      match: 88,
      skills: ["React", "Python", "AWS", "Docker"],
      remote: false,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      salary: "₹25,00,000 - ₹35,00,000",
      experience: "4-6 years",
      type: "Full-time",
      posted: "3 days ago",
      match: 75,
      skills: ["Strategy", "Analytics", "Agile", "SQL"],
      remote: true,
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Jio",
      location: "Mumbai, Maharashtra",
      salary: "₹18,00,000 - ₹28,00,000",
      experience: "3-5 years",
      type: "Full-time",
      posted: "1 week ago",
      match: 82,
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      remote: false,
    },
  ]

  const careerMilestones = [
    {
      id: 1,
      title: "Complete Advanced React Course",
      description: "Master advanced React concepts and patterns",
      progress: 75,
      deadline: "Next Month",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Build Portfolio Project",
      description: "Create a full-stack application for portfolio",
      progress: 40,
      deadline: "2 Months",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Get AWS Certification",
      description: "Obtain AWS Solutions Architect certification",
      progress: 20,
      deadline: "3 Months",
      priority: "Medium",
      status: "Planning",
    },
    {
      id: 4,
      title: "Network with Industry Professionals",
      description: "Connect with 50+ professionals on LinkedIn",
      progress: 60,
      deadline: "Ongoing",
      priority: "Medium",
      status: "In Progress",
    },
  ]

  const industryInsights = [
    {
      title: "Tech Industry Growth",
      description: "Indian tech sector expected to grow 15% in 2024",
      trend: "positive",
      impact: "High",
    },
    {
      title: "Remote Work Trend",
      description: "65% of companies now offer remote work options",
      trend: "positive",
      impact: "Medium",
    },
    {
      title: "AI/ML Skills Demand",
      description: "AI/ML skills see 40% increase in job postings",
      trend: "positive",
      impact: "High",
    },
  ]

  const currentPath = careerPaths.find((path) => path.id === selectedPath)

  const getMatchColor = (match: number) => {
    if (match >= 90) return "bg-green-100 text-green-800 border-green-200"
    if (match >= 80) return "bg-blue-100 text-blue-800 border-blue-200"
    if (match >= 70) return "bg-orange-100 text-orange-800 border-orange-200"
    return "bg-red-100 text-red-800 border-red-200"
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200"
      case "Medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Career Guidance</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Navigate your career path with AI-powered insights, personalized recommendations, and industry trends
        </p>
      </div>

      {/* Career Path Selection */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Your Career Path</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {careerPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedPath === path.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{path.description}</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">{path.currentLevel}</Badge>
                  <span className="text-sm text-gray-600">{path.progress}% complete</span>
                </div>
              </button>
            ))}
          </div>

          {currentPath && (
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{currentPath.title}</h3>
                  <p className="text-gray-600 mb-4">{currentPath.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current Level:</span>
                      <span className="font-medium text-gray-900">{currentPath.currentLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Next Level:</span>
                      <span className="font-medium text-gray-900">{currentPath.nextLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Salary Range:</span>
                      <span className="font-medium text-gray-900">{currentPath.avgSalary}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Growth Rate:</span>
                      <span className="font-medium text-green-600">{currentPath.growth}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress to Next Level</span>
                      <span className="font-medium text-gray-900">{currentPath.progress}%</span>
                    </div>
                    <Progress value={currentPath.progress} className="h-3" />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Key Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {currentPath.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Top Companies:</p>
                    <div className="flex flex-wrap gap-1">
                      {currentPath.companies.slice(0, 3).map((company, index) => (
                        <Badge key={index} className="text-xs bg-indigo-100 text-indigo-800 border-indigo-200">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Job Recommendations */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Recommended Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobRecommendations.map((job) => (
                  <div key={job.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Building className="w-4 h-4" />
                          <span>{job.company}</span>
                          <MapPin className="w-4 h-4 ml-2" />
                          <span>{job.location}</span>
                          {job.remote && <Badge className="bg-green-100 text-green-800 border-green-200">Remote</Badge>}
                        </div>
                      </div>
                      <Badge className={getMatchColor(job.match)}>{job.match}% Match</Badge>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-gray-500">Salary</p>
                        <p className="font-medium text-gray-900">{job.salary}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Experience</p>
                        <p className="font-medium text-gray-900">{job.experience}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Posted</p>
                        <p className="font-medium text-gray-900">{job.posted}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                        Save Job
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                        View Details
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
          {/* Industry Insights */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Industry Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {industryInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
                      <Badge
                        className={
                          insight.impact === "High"
                            ? "bg-red-100 text-red-800 border-red-200"
                            : "bg-orange-100 text-orange-800 border-orange-200"
                        }
                      >
                        {insight.impact}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-xs">{insight.description}</p>
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
              <Button className="w-full justify-start bg-indigo-600 hover:bg-indigo-700">
                <Target className="w-4 h-4 mr-2" />
                Set Career Goals
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Users className="w-4 h-4 mr-2" />
                Find Mentors
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                Salary Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Career Milestones */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Career Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {careerMilestones.map((milestone) => (
              <div key={milestone.id} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                  <Badge className={getPriorityColor(milestone.priority)}>{milestone.priority}</Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium text-gray-900">{milestone.progress}%</span>
                    </div>
                    <Progress value={milestone.progress} className="h-2" />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deadline:</span>
                    <span className="text-gray-900">{milestone.deadline}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Status:</span>
                    <Badge variant="outline" className="border-gray-300 text-gray-600">
                      {milestone.status}
                    </Badge>
                  </div>
                </div>

                <Button size="sm" className="w-full mt-3 bg-green-600 hover:bg-green-700">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Continue
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
