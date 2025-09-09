import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json({ error: "User ID required" }, { status: 400 })
  }

  // Mock data - in real app, fetch from database
  const tasks = [
    { id: 1, title: "Morning meditation", completed: true, time: "07:00 AM", userId: Number.parseInt(userId) },
    { id: 2, title: "Healthy breakfast", completed: true, time: "08:00 AM", userId: Number.parseInt(userId) },
    { id: 3, title: "Team meeting", completed: false, time: "10:00 AM", userId: Number.parseInt(userId) },
    { id: 4, title: "Workout session", completed: false, time: "06:00 PM", userId: Number.parseInt(userId) },
  ]

  return NextResponse.json({ tasks })
}

export async function POST(request: NextRequest) {
  try {
    const { title, userId, dueDate, priority } = await request.json()

    // Mock task creation - in real app, save to database
    const newTask = {
      id: Date.now(),
      title,
      userId,
      completed: false,
      dueDate,
      priority: priority || "medium",
      createdAt: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, task: newTask })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create task" }, { status: 500 })
  }
}
