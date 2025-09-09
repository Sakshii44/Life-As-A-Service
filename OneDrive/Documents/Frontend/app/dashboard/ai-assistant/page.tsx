"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { AIAssistant3D } from "@/components/ai-assistant-3d"
import { VoiceRecorder } from "@/components/voice-recorder"
import { Brain, MessageSquare, Settings, Mic, Send, User, Bot, Volume2, VolumeX } from "lucide-react"

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your AI life assistant. I can help you with scheduling, health tracking, productivity tips, and much more. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(true)

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: "ai",
        content: generateAIResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1000)

    setInputMessage("")
  }

  const generateAIResponse = (input: string) => {
    const responses = [
      "I understand your request. Let me help you with that.",
      "That's an interesting point. Based on your patterns, I recommend...",
      "I've analyzed your data and here's what I suggest...",
      "Great question! Here's how I can help optimize that for you...",
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleVoiceInput = (transcript: string) => {
    setInputMessage(transcript)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
          <p className="text-gray-600">Your intelligent life optimization companion</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
            className="border-gray-300"
          >
            {isVoiceEnabled ? <Volume2 className="w-4 h-4 mr-2" /> : <VolumeX className="w-4 h-4 mr-2" />}
            Voice {isVoiceEnabled ? "On" : "Off"}
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* 3D Avatar */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              AI Avatar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 rounded-lg overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50 mb-4">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Environment preset="studio" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AIAssistant3D />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>

            <div className="text-center">
              <VoiceRecorder onTranscript={handleVoiceInput} />
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm h-[600px] flex flex-col">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-green-600" />
                Conversation
                <Badge className="bg-green-100 text-green-800 border-green-200">Online</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-start gap-3 max-w-xs lg:max-w-md ${message.type === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === "user" ? "bg-blue-600" : "bg-gradient-to-r from-indigo-500 to-purple-500"
                        }`}
                      >
                        {message.type === "user" ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-200 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message or use voice input..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col gap-2 bg-transparent">
              <Brain className="w-6 h-6 text-gray-600" />
              <span className="text-sm">Health Check</span>
            </Button>
            <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col gap-2 bg-transparent">
              <MessageSquare className="w-6 h-6 text-gray-600" />
              <span className="text-sm">Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col gap-2 bg-transparent">
              <Settings className="w-6 h-6 text-gray-600" />
              <span className="text-sm">Optimize Day</span>
            </Button>
            <Button variant="outline" className="h-16 border-gray-300 hover:bg-gray-50 flex-col gap-2 bg-transparent">
              <Mic className="w-6 h-6 text-gray-600" />
              <span className="text-sm">Voice Command</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
