"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageSquare, Heart, Share2, Plus, Search, TrendingUp, Award, Calendar, MapPin } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")

  const communityStats = {
    totalMembers: 15420,
    activeToday: 1250,
    postsToday: 89,
    eventsThisWeek: 12,
  }

  const posts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40&text=PS",
        title: "Senior Software Engineer at Google",
        verified: true,
      },
      content:
        "Just completed my first year at Google! Here are 5 key learnings that helped me grow as a software engineer. Thread 🧵",
      timestamp: "2 hours ago",
      likes: 124,
      comments: 18,
      shares: 7,
      tags: ["career", "google", "software-engineering"],
      image: "/placeholder.svg?height=200&width=400&text=Career+Growth+Tips",
    },
    {
      id: 2,
      author: {
        name: "Rahul Gupta",
        avatar: "/placeholder.svg?height=40&width=40&text=RG",
        title: "Product Manager at Flipkart",
        verified: false,
      },
      content:
        "Looking for feedback on my new side project - a productivity app for remote teams. Would love to hear your thoughts! 🚀",
      timestamp: "4 hours ago",
      likes: 67,
      comments: 23,
      shares: 12,
      tags: ["product", "startup", "feedback"],
      image: null,
    },
    {
      id: 3,
      author: {
        name: "Anita Desai",
        avatar: "/placeholder.svg?height=40&width=40&text=AD",
        title: "Data Scientist at Jio",
        verified: true,
      },
      content:
        "Excited to share that I'll be speaking at the upcoming AI/ML conference in Bangalore! Topic: 'Democratizing AI in Indian Startups'",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 15,
      shares: 25,
      tags: ["ai", "ml", "conference", "speaking"],
      image: "/placeholder.svg?height=200&width=400&text=AI+Conference+Speaker",
    },
  ]

  const events = [
    {
      id: 1,
      title: "React Developers Meetup",
      description: "Monthly meetup for React developers in Mumbai",
      date: "Dec 20, 2024",
      time: "6:00 PM",
      location: "Mumbai, Maharashtra",
      attendees: 45,
      maxAttendees: 60,
      organizer: "Mumbai React Community",
      type: "In-person",
    },
    {
      id: 2,
      title: "Career Growth Workshop",
      description: "Learn strategies for advancing your tech career",
      date: "Dec 22, 2024",
      time: "2:00 PM",
      location: "Online",
      attendees: 128,
      maxAttendees: 200,
      organizer: "TechCareers India",
      type: "Virtual",
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      description: "Present your startup ideas to investors and mentors",
      date: "Dec 25, 2024",
      time: "7:00 PM",
      location: "Bangalore, Karnataka",
      attendees: 32,
      maxAttendees: 50,
      organizer: "Bangalore Entrepreneurs",
      type: "In-person",
    },
  ]

  const challenges = [
    {
      id: 1,
      title: "30-Day Coding Challenge",
      description: "Solve one coding problem every day for 30 days",
      participants: 2340,
      duration: "30 days",
      difficulty: "Intermediate",
      prize: "₹50,000",
      status: "Active",
      daysLeft: 15,
    },
    {
      id: 2,
      title: "Build a Full-Stack App",
      description: "Create a complete web application using modern tech stack",
      participants: 890,
      duration: "60 days",
      difficulty: "Advanced",
      prize: "₹1,00,000",
      status: "Active",
      daysLeft: 42,
    },
    {
      id: 3,
      title: "UI/UX Design Contest",
      description: "Design a mobile app interface for a social cause",
      participants: 567,
      duration: "21 days",
      difficulty: "Beginner",
      prize: "₹25,000",
      status: "Starting Soon",
      daysLeft: 5,
    },
  ]

  const topMembers = [
    {
      id: 1,
      name: "Vikram Singh",
      title: "Tech Lead at Microsoft",
      avatar: "/placeholder.svg?height=40&width=40&text=VS",
      points: 2450,
      contributions: 89,
      badge: "Expert",
    },
    {
      id: 2,
      name: "Sneha Patel",
      title: "Senior Designer at Zomato",
      avatar: "/placeholder.svg?height=40&width=40&text=SP",
      points: 2180,
      contributions: 76,
      badge: "Mentor",
    },
    {
      id: 3,
      name: "Arjun Kumar",
      title: "Startup Founder",
      avatar: "/placeholder.svg?height=40&width=40&text=AK",
      points: 1950,
      contributions: 65,
      badge: "Innovator",
    },
  ]

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200"
      case "Starting Soon":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Ended":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <Users className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with like-minded professionals, share knowledge, participate in challenges, and grow together
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Members</h3>
            <p className="text-2xl font-bold text-blue-600">{communityStats.totalMembers.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">growing daily</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Active Today</h3>
            <p className="text-2xl font-bold text-green-600">{communityStats.activeToday.toLocaleString()}</p>
            <p className="text-gray-600 text-sm">online now</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Posts Today</h3>
            <p className="text-2xl font-bold text-purple-600">{communityStats.postsToday}</p>
            <p className="text-gray-600 text-sm">discussions</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Events</h3>
            <p className="text-2xl font-bold text-indigo-600">{communityStats.eventsThisWeek}</p>
            <p className="text-gray-600 text-sm">this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {[
          { id: "feed", label: "Feed", icon: MessageSquare },
          { id: "events", label: "Events", icon: Calendar },
          { id: "challenges", label: "Challenges", icon: Award },
          { id: "members", label: "Members", icon: Users },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === "feed" && (
            <div className="space-y-6">
              {/* Create Post */}
              <Card className="border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40&text=You" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <Textarea
                        placeholder="Share your thoughts, ask questions, or start a discussion..."
                        className="border-gray-300 min-h-[100px]"
                      />
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                            Add Image
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                            Add Poll
                          </Button>
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Post
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posts Feed */}
              <div className="space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                            {post.author.verified && (
                              <Badge className="bg-blue-100 text-blue-800 border-blue-200">Verified</Badge>
                            )}
                            <span className="text-gray-500 text-sm">•</span>
                            <span className="text-gray-500 text-sm">{post.timestamp}</span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{post.author.title}</p>
                          <p className="text-gray-900 mb-4">{post.content}</p>

                          {post.image && (
                            <div className="mb-4">
                              <img
                                src={post.image || "/placeholder.svg"}
                                alt="Post content"
                                className="w-full rounded-lg max-h-64 object-cover"
                              />
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="border-gray-300 text-gray-600">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center gap-6 text-gray-500">
                            <button className="flex items-center gap-2 hover:text-red-600 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                              <MessageSquare className="w-4 h-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 hover:text-green-600 transition-colors">
                              <Share2 className="w-4 h-4" />
                              <span>{post.shares}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
              </div>

              <div className="space-y-4">
                {events.map((event) => (
                  <Card key={event.id} className="border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {event.date} at {event.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={
                            event.type === "Virtual"
                              ? "bg-blue-100 text-blue-800 border-blue-200"
                              : "bg-green-100 text-green-800 border-green-200"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          <span>
                            {event.attendees}/{event.maxAttendees} attendees
                          </span>
                          <span className="mx-2">•</span>
                          <span>by {event.organizer}</span>
                        </div>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Join Event
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "challenges" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Active Challenges</h2>
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Challenge
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge) => (
                  <Card key={challenge.id} className="border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{challenge.description}</p>
                        </div>
                        <Badge className={getStatusColor(challenge.status)}>{challenge.status}</Badge>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Participants:</span>
                          <span className="text-gray-900">{challenge.participants.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Duration:</span>
                          <span className="text-gray-900">{challenge.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Prize:</span>
                          <span className="text-gray-900 font-semibold">{challenge.prize}</span>
                        </div>
                        <div className="flex justify-between text-sm items-center">
                          <span className="text-gray-500">Difficulty:</span>
                          <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{challenge.daysLeft} days left</span>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Join Challenge
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "members" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Community Members</h2>
                <div className="flex gap-2">
                  <Input placeholder="Search members..." className="w-64 border-gray-300" />
                  <Button variant="outline" className="border-gray-300 bg-transparent">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {topMembers.map((member) => (
                  <Card key={member.id} className="border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{member.name}</h3>
                            <Badge className="bg-purple-100 text-purple-800 border-purple-200">{member.badge}</Badge>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{member.points} points</span>
                            <span>{member.contributions} contributions</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { tag: "react", posts: 234 },
                  { tag: "ai-ml", posts: 189 },
                  { tag: "startup", posts: 156 },
                  { tag: "career", posts: 143 },
                  { tag: "remote-work", posts: 98 },
                ].map((topic, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">#{topic.tag}</span>
                    <span className="text-gray-500 text-sm">{topic.posts} posts</span>
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
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Host Event
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Award className="w-4 h-4 mr-2" />
                Start Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
