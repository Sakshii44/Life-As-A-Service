"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Check, Trash2, Clock } from "lucide-react"

interface Task {
  id: number
  title: string
  completed: boolean
  createdAt: Date
  dueDate?: Date
}

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Morning meditation", completed: true, createdAt: new Date() },
    { id: 2, title: "Review project proposal", completed: false, createdAt: new Date() },
    { id: 3, title: "Call dentist for appointment", completed: false, createdAt: new Date() },
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask,
        completed: false,
        createdAt: new Date(),
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <Card className="bg-black/20 backdrop-blur-lg border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-400" />
          Task Manager
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
          <Button onClick={addTask} size="sm" className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <button
                onClick={() => toggleTask(task.id)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  task.completed ? "bg-green-500 border-green-500" : "border-gray-400 hover:border-white"
                }`}
              >
                {task.completed && <Check className="w-3 h-3 text-white" />}
              </button>

              <span className={`flex-1 ${task.completed ? "text-gray-400 line-through" : "text-white"}`}>
                {task.title}
              </span>

              <button onClick={() => deleteTask(task.id)} className="text-red-400 hover:text-red-300">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
