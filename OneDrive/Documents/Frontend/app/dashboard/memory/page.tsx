"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Database,
  Search,
  Plus,
  Lock,
  Eye,
  Calendar,
  FileText,
  MessageSquare,
  ImageIcon,
  Mic,
  Brain,
} from "lucide-react"

export default function MemoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const memoryData = [
    {
      id: 1,
      type: "conversation",
      title: "Team Meeting - Q4 Planning",
      content: "Discussed quarterly goals, budget allocation, and team restructuring...",
      date: "2024-12-15",
      encrypted: true,
      tags: ["work", "planning", "team"],
    },
    {
      id: 2,
      type: "document",
      title: "Personal Development Plan",
      content: "Goals for skill improvement, career advancement, and learning objectives...",
      date: "2024-12-14",
      encrypted: true,
      tags: ["personal", "goals", "development"],
    },
    {
      id: 3,
      type: "voice",
      title: "Daily Reflection - December 13",
      content: "Voice recording about daily achievements and areas for improvement...",
      date: "2024-12-13",
      encrypted: true,
      tags: ["reflection", "personal", "daily"],
    },
    {
      id: 4,
      type: "image",
      title: "Whiteboard Session - Project Alpha",
      content: "Brainstorming session diagrams and project architecture sketches...",
      date: "2024-12-12",
      encrypted: false,
      tags: ["project", "brainstorming", "architecture"],
    },
  ]

  const categories = [
    { id: "all", name: "All Memories", count: memoryData.length },
    { id: "conversation", name: "Conversations", count: 1 },
    { id: "document", name: "Documents", count: 1 },
    { id: "voice", name: "Voice Notes", count: 1 },
    { id: "image", name: "Images", count: 1 },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "conversation":
        return MessageSquare
      case "document":
        return FileText
      case "voice":
        return Mic
      case "image":
        return ImageIcon
      default:
        return FileText
    }
  }

  const filteredMemories = memoryData.filter((memory) => {
    const matchesSearch =
      memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || memory.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Memory Mining</h1>
          <p className="text-gray-600">Store, organize, and retrieve your personal knowledge base</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Memory
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{memoryData.length}</div>
            <div className="text-gray-600 text-sm">Total Memories</div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{memoryData.filter((m) => m.encrypted).length}</div>
            <div className="text-gray-600 text-sm">Encrypted</div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">7</div>
            <div className="text-gray-600 text-sm">Days Active</div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600 text-sm">AI Accuracy</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {categories.map((category) => (
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

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search memories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Memory List */}
          <div className="space-y-4">
            {filteredMemories.map((memory) => {
              const IconComponent = getTypeIcon(memory.type)
              return (
                <Card key={memory.id} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            memory.type === "conversation"
                              ? "bg-blue-100"
                              : memory.type === "document"
                                ? "bg-green-100"
                                : memory.type === "voice"
                                  ? "bg-purple-100"
                                  : "bg-orange-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              memory.type === "conversation"
                                ? "text-blue-600"
                                : memory.type === "document"
                                  ? "text-green-600"
                                  : memory.type === "voice"
                                    ? "text-purple-600"
                                    : "text-orange-600"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{memory.title}</h3>
                            {memory.encrypted && <Lock className="w-4 h-4 text-green-600" />}
                          </div>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{memory.content}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{new Date(memory.date).toLocaleDateString()}</span>
                            <div className="flex gap-1">
                              {memory.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                          <Brain className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Add New Memory */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Add New Memory</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Memory Title</label>
                <Input
                  placeholder="Enter memory title..."
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Content</label>
                <Textarea
                  placeholder="Describe the memory or paste content..."
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="encrypt" className="rounded border-gray-300" />
                <label htmlFor="encrypt" className="text-sm text-gray-700">
                  Encrypt this memory (recommended for sensitive information)
                </label>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Save Memory
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
