"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square } from "lucide-react"

interface VoiceRecorderProps {
  onTranscript?: (transcript: string) => void
}

export function VoiceRecorder({ onTranscript }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const startRecording = () => {
    setIsRecording(true)
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false)
      setIsProcessing(true)
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false)
        onTranscript?.("I'd like to schedule a meeting for tomorrow at 2 PM")
      }, 2000)
    }, 3000)
  }

  const stopRecording = () => {
    setIsRecording(false)
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      onTranscript?.("Recording stopped")
    }, 1000)
  }

  return (
    <div className="flex items-center gap-2">
      {!isRecording ? (
        <Button
          onClick={startRecording}
          disabled={isProcessing}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
        >
          <Mic className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing..." : "Start Recording"}
        </Button>
      ) : (
        <Button onClick={stopRecording} variant="destructive" className="bg-red-600 hover:bg-red-700">
          <Square className="w-4 h-4 mr-2" />
          Stop Recording
        </Button>
      )}

      {isRecording && (
        <div className="flex items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-red-500 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
