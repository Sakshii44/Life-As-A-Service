"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VoiceRecorder } from "@/components/voice-recorder"
import { Mic, Settings, Play, FileAudio, Brain, MessageSquare } from "lucide-react"

export default function VoicePage() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordings, setRecordings] = useState([
    {
      id: 1,
      title: "Meeting Notes - Project Alpha",
      duration: "5:23",
      date: "Dec 15, 2024",
      transcription: "Discussed project timeline and resource allocation...",
    },
    {
      id: 2,
      title: "Daily Reflection",
      duration: "3:45",
      date: "Dec 14, 2024",
      transcription: "Today was productive. Completed all major tasks...",
    },
    {
      id: 3,
      title: "Voice Command - Schedule",
      duration: "0:15",
      date: "Dec 14, 2024",
      transcription: "Schedule meeting with Sarah tomorrow at 2 PM",
    },
  ])

  const voiceCommands = [
    { command: "Schedule meeting", example: "Schedule a meeting with John tomorrow at 3 PM" },
    { command: "Add task", example: "Add task: Review quarterly reports" },
    { command: "Check health", example: "How's my health today?" },
    { command: "Set reminder", example: "Remind me to call mom at 6 PM" },
    { command: "Show analytics", example: "Show me my productivity analytics" },
    { command: "Update mood", example: "I'm feeling great today, mood level 9" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Voice Commands</h1>
          <p className="text-gray-600">Control your life management system with voice</p>
        </div>
        <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
          <Settings className="w-4 h-4 mr-2" />
          Voice Settings
        </Button>
      </div>

      {/* Voice Recorder */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <Mic className="w-5 h-5 text-blue-600" />
            Voice Recorder
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">AI Powered</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto">
              <Mic className={`w-16 h-16 ${isRecording ? "text-red-500 animate-pulse" : "text-blue-600"}`} />
            </div>

            <div>
              <VoiceRecorder onTranscript={(transcript) => console.log(transcript)} />
            </div>

            <p className="text-gray-600 max-w-md mx-auto">
              Click the microphone to start recording. Your voice will be transcribed and processed by AI for
              intelligent actions.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Voice Commands */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-green-600" />
              Available Commands
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {voiceCommands.map((cmd, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{cmd.command}</h4>
                  <p className="text-gray-600 text-sm italic">"{cmd.example}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Recordings */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <FileAudio className="w-5 h-5 text-indigo-600" />
              Recent Recordings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recordings.map((recording) => (
                <div key={recording.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FileAudio className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{recording.title}</h4>
                      <p className="text-gray-600 text-xs">
                        {recording.date} • {recording.duration}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 truncate max-w-xs">{recording.transcription}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                      <Brain className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Voice Analytics */}
      <Card className="border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Voice Usage Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">47</div>
              <div className="text-gray-600 text-sm">Commands This Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Recognition Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2.3s</div>
              <div className="text-gray-600 text-sm">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600 text-sm">Recordings Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
