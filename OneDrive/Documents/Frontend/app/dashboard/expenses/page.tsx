"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wallet, Plus, TrendingDown, TrendingUp, PieChart, Calendar, Target, AlertTriangle } from "lucide-react"

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Grocery Shopping",
      amount: 3500,
      category: "Food",
      date: "2024-01-15",
      type: "essential",
    },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 2800,
      category: "Utilities",
      date: "2024-01-14",
      type: "essential",
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 800,
      category: "Entertainment",
      date: "2024-01-13",
      type: "discretionary",
    },
    {
      id: 4,
      description: "Fuel",
      amount: 2200,
      category: "Transportation",
      date: "2024-01-12",
      type: "essential",
    },
  ])

  const monthlyBudget = {
    total: 45000,
    spent: 28500,
    remaining: 16500,
    categories: [
      { name: "Food", budget: 12000, spent: 8500, color: "green" },
      { name: "Transportation", budget: 8000, spent: 6200, color: "blue" },
      { name: "Utilities", budget: 5000, spent: 4800, color: "indigo" },
      { name: "Entertainment", budget: 4000, spent: 2800, color: "purple" },
      { name: "Shopping", budget: 6000, spent: 3200, color: "pink" },
      { name: "Healthcare", budget: 3000, spent: 1500, color: "red" },
      { name: "Others", budget: 7000, spent: 1500, color: "orange" },
    ],
  }

  const expenseStats = {
    thisMonth: 28500,
    lastMonth: 32100,
    change: -11.2,
    dailyAverage: 950,
    largestExpense: 3500,
    categoryCount: 7,
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Food: "green",
      Transportation: "blue",
      Utilities: "indigo",
      Entertainment: "purple",
      Shopping: "pink",
      Healthcare: "red",
      Others: "orange",
    }
    return colors[category as keyof typeof colors] || "gray"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <Wallet className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Expense Analytics</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your spending patterns, manage budgets, and optimize your financial health
        </p>
      </div>

      {/* Expense Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Wallet className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">This Month</h3>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(expenseStats.thisMonth)}</p>
            <p className="text-gray-600 text-sm">total spent</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-2">
              {expenseStats.change < 0 ? (
                <TrendingDown className="w-8 h-8 text-green-600" />
              ) : (
                <TrendingUp className="w-8 h-8 text-red-600" />
              )}
            </div>
            <h3 className="text-gray-900 font-semibold">vs Last Month</h3>
            <p className={`text-2xl font-bold ${expenseStats.change < 0 ? "text-green-600" : "text-red-600"}`}>
              {expenseStats.change > 0 ? "+" : ""}
              {expenseStats.change.toFixed(1)}%
            </p>
            <p className="text-gray-600 text-sm">change</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Daily Average</h3>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(expenseStats.dailyAverage)}</p>
            <p className="text-gray-600 text-sm">per day</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Budget Left</h3>
            <p className="text-2xl font-bold text-indigo-600">{formatCurrency(monthlyBudget.remaining)}</p>
            <p className="text-gray-600 text-sm">remaining</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Budget Overview */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-600" />
                  Monthly Budget Overview
                </CardTitle>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Expense
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {monthlyBudget.categories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 bg-${category.color}-500 rounded-full`}></div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{formatCurrency(category.spent)}</p>
                        <p className="text-sm text-gray-600">of {formatCurrency(category.budget)}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={(category.spent / category.budget) * 100} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          {Math.round((category.spent / category.budget) * 100)}% used
                        </span>
                        <span className={`${category.spent > category.budget ? "text-red-600" : "text-green-600"}`}>
                          {category.spent > category.budget ? "Over budget" : "Within budget"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Expenses */}
          <Card className="border-gray-200 shadow-sm mt-6">
            <CardHeader>
              <CardTitle className="text-gray-900">Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-${getCategoryColor(expense.category)}-100 rounded-lg flex items-center justify-center`}
                      >
                        <Wallet className={`w-6 h-6 text-${getCategoryColor(expense.category)}-600`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{expense.description}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-gray-300 text-gray-600">
                            {expense.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{expense.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-red-600">-{formatCurrency(expense.amount)}</p>
                      <Badge
                        className={
                          expense.type === "essential"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-purple-100 text-purple-800 border-purple-200"
                        }
                      >
                        {expense.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Add Expense */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Quick Add Expense</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Description..." className="border-gray-300" />
              <Input type="number" placeholder="Amount (₹)" className="border-gray-300" />
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Select category</option>
                <option>Food</option>
                <option>Transportation</option>
                <option>Utilities</option>
                <option>Entertainment</option>
                <option>Shopping</option>
                <option>Healthcare</option>
                <option>Others</option>
              </select>
              <Button className="w-full bg-red-600 hover:bg-red-700">Add Expense</Button>
            </CardContent>
          </Card>

          {/* Budget Alerts */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                Budget Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Food Budget</h4>
                  <p className="text-gray-700 text-xs">71% of monthly budget used. Consider meal planning.</p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Utilities Alert</h4>
                  <p className="text-gray-700 text-xs">96% of budget spent. Monitor electricity usage.</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Entertainment</h4>
                  <p className="text-gray-700 text-xs">70% budget remaining. You're doing great!</p>
                </div>
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
                <Target className="w-4 h-4 mr-2" />
                Set Budget
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <PieChart className="w-4 h-4 mr-2" />
                View Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Monthly Summary
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
