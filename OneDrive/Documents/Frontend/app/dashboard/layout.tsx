"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Brain,
  Calendar,
  Heart,
  TrendingUp,
  Settings,
  Users,
  BarChart3,
  Target,
  BookOpen,
  Wallet,
  Shield,
  Bell,
  Camera,
  Mic,
  MessageSquare,
  FileText,
  Zap,
  LogOut,
  Menu,
  X,
  User,
  Activity,
  PieChart,
  Clock,
  Headphones,
  Globe,
  Database,
  Briefcase,
  Apple,
  Dumbbell,
  Sparkles,
  Search,
  Award,
} from "lucide-react"
import { Suspense } from "react"

const sidebarItems = [
  {
    category: "Overview",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
      { name: "Reports", href: "/dashboard/reports", icon: FileText },
    ],
  },
  {
    category: "AI Assistant",
    items: [
      { name: "AI Chat", href: "/dashboard/ai-assistant", icon: Brain },
      { name: "Voice Commands", href: "/dashboard/voice", icon: Mic },
      { name: "Self Clone AI", href: "/dashboard/self-clone", icon: User },
      { name: "Memory Mining", href: "/dashboard/memory", icon: Database },
    ],
  },
  {
    category: "Life Management",
    items: [
      { name: "Calendar & Tasks", href: "/dashboard/calendar", icon: Calendar },
      { name: "Health & Wellness", href: "/dashboard/health", icon: Heart },
      { name: "Mood Tracker", href: "/dashboard/mood", icon: Activity },
      { name: "Diet & Nutrition", href: "/dashboard/diet", icon: Apple },
      { name: "Fitness Tracker", href: "/dashboard/fitness", icon: Dumbbell },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Study Planner", href: "/dashboard/study", icon: BookOpen },
      { name: "Work Management", href: "/dashboard/work", icon: Briefcase },
      { name: "Habit Tracker", href: "/dashboard/habits", icon: Clock },
      { name: "Goal Setting", href: "/dashboard/goals", icon: Target },
      { name: "Time Analytics", href: "/dashboard/time-analytics", icon: PieChart },
    ],
  },
  {
    category: "Finance",
    items: [
      { name: "Finance Manager", href: "/dashboard/finance", icon: Wallet },
      { name: "Investment Tracker", href: "/dashboard/investments", icon: TrendingUp },
      { name: "Expense Analytics", href: "/dashboard/expenses", icon: BarChart3 },
      { name: "Budget Planner", href: "/dashboard/budget", icon: PieChart },
    ],
  },
  {
    category: "Career",
    items: [
      { name: "Resume Builder", href: "/dashboard/resume", icon: FileText },
      { name: "Interview Prep", href: "/dashboard/interview", icon: MessageSquare },
      { name: "Skill Assessment", href: "/dashboard/skills", icon: Award },
      { name: "Career Path", href: "/dashboard/career", icon: TrendingUp },
    ],
  },
  {
    category: "Social & Community",
    items: [
      { name: "Community", href: "/dashboard/community", icon: Users },
      { name: "Challenges", href: "/dashboard/challenges", icon: Target },
      { name: "Leaderboard", href: "/dashboard/leaderboard", icon: TrendingUp },
      { name: "Friends", href: "/dashboard/friends", icon: Users },
    ],
  },
  {
    category: "Tools & Utilities",
    items: [
      { name: "Voice Recorder", href: "/dashboard/voice-recorder", icon: Mic },
      { name: "Camera Tools", href: "/dashboard/camera", icon: Camera },
      { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
      { name: "Integrations", href: "/dashboard/integrations", icon: Globe },
    ],
  },
  {
    category: "Settings",
    items: [
      { name: "Profile Settings", href: "/dashboard/settings", icon: Settings },
      { name: "Privacy & Security", href: "/dashboard/privacy", icon: Shield },
      { name: "Subscription", href: "/dashboard/subscription", icon: Zap },
      { name: "Support", href: "/dashboard/support", icon: Headphones },
    ],
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const getCurrentPageName = () => {
    const currentItem = sidebarItems.flatMap((category) => category.items).find((item) => item.href === pathname)
    return currentItem?.name || "Dashboard"
  }

  if (!user) return null

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <Link href="/dashboard" className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Life as a Service</span>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <Badge className="mt-3 bg-blue-100 text-blue-800 border-blue-200">
                <Sparkles className="w-3 h-3 mr-1" />
                Professional Plan
              </Badge>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search features..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {sidebarItems.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.items
                      .filter(
                        (item) => searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase()),
                      )
                      .map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive
                                ? "bg-blue-50 text-blue-700 border border-blue-200 font-medium"
                                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                            onClick={() => setSidebarOpen(false)}
                          >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                          </Link>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40&text=JD" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                    {user.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 font-medium truncate">{user.name}</p>
                  <p className="text-gray-500 text-sm truncate">{user.email}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:pl-80">
          {/* Top Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <Menu className="w-4 h-4" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{getCurrentPageName()}</h1>
                  <p className="text-gray-500 text-sm">Welcome back, {user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Upgrade
                </Button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="p-6">{children}</main>
        </div>
      </div>
    </Suspense>
  )
}
