"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Plus, PieChart, TrendingUp, AlertTriangle, CheckCircle, Calendar, Wallet } from "lucide-react"

export default function BudgetPage() {
  const [budgets, setBudgets] = useState([
    {
      id: 1,
      category: "Food & Dining",
      allocated: 15000,
      spent: 12500,
      remaining: 2500,
      color: "green",
      status: "on-track",
    },
    {
      id: 2,
      category: "Transportation",
      allocated: 8000,
      spent: 9200,
      remaining: -1200,
      color: "blue",
      status: "over-budget",
    },
    {
      id: 3,
      category: "Entertainment",
      allocated: 5000,
      spent: 3200,
      remaining: 1800,
      color: "purple",
      status: "under-budget",
    },
    {
      id: 4,
      category: "Shopping",
      allocated: 10000,
      spent: 7800,
      remaining: 2200,
      color: "pink",
      status: "on-track",
    },
    {
      id: 5,
      category: "Healthcare",
      allocated: 4000,
      spent: 2100,
      remaining: 1900,
      color: "red",
      status: "under-budget",
    },
    {
      id: 6,
      category: "Utilities",
      allocated: 6000,
      spent: 5800,
      remaining: 200,
      color: "indigo",
      status: "on-track",
    },
  ])

  const budgetOverview = {
    totalAllocated: budgets.reduce((sum, budget) => sum + budget.allocated, 0),
    totalSpent: budgets.reduce((sum, budget) => sum + budget.spent, 0),
    totalRemaining: budgets.reduce((sum, budget) => sum + budget.remaining, 0),
    categoriesOverBudget: budgets.filter((b) => b.status === "over-budget").length,
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.abs(amount))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "over-budget":
        return "bg-red-100 text-red-800 border-red-200"
      case "under-budget":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-track":
        return <CheckCircle className="w-4 h-4 text-blue-600" />
      case "over-budget":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case "under-budget":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      default:
        return <Target className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-pulse">
            <Target className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Budget Planner</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Plan and track your monthly budgets with intelligent insights and spending recommendations
        </p>
      </div>

      {/* Budget Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Wallet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Budget</h3>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(budgetOverview.totalAllocated)}</p>
            <p className="text-gray-600 text-sm">allocated</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Total Spent</h3>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(budgetOverview.totalSpent)}</p>
            <p className="text-gray-600 text-sm">this month</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Remaining</h3>
            <p
              className={`text-2xl font-bold ${budgetOverview.totalRemaining >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              {budgetOverview.totalRemaining >= 0 ? "" : "-"}
              {formatCurrency(budgetOverview.totalRemaining)}
            </p>
            <p className="text-gray-600 text-sm">available</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold">Over Budget</h3>
            <p className="text-2xl font-bold text-orange-600">{budgetOverview.categoriesOverBudget}</p>
            <p className="text-gray-600 text-sm">categories</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Budget Categories */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-600" />
                  Budget Categories
                </CardTitle>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {budgets.map((budget) => (
                  <div key={budget.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 bg-${budget.color}-500 rounded-full`}></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{budget.category}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            {getStatusIcon(budget.status)}
                            <Badge className={getStatusColor(budget.status)}>{budget.status.replace("-", " ")}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">{formatCurrency(budget.spent)}</p>
                        <p className="text-sm text-gray-600">of {formatCurrency(budget.allocated)}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Progress value={Math.min((budget.spent / budget.allocated) * 100, 100)} className="h-3" />
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          {Math.round((budget.spent / budget.allocated) * 100)}% used
                        </span>
                        <span className={`font-medium ${budget.remaining >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {budget.remaining >= 0 ? "Remaining: " : "Over by: "}
                          {formatCurrency(budget.remaining)}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline" className="border-gray-300 bg-transparent">
                        Edit Budget
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
          {/* Create Budget */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Create New Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Category name..." className="border-gray-300" />
              <Input type="number" placeholder="Budget amount (₹)" className="border-gray-300" />
              <select className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Select period</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Create Budget</Button>
            </CardContent>
          </Card>

          {/* Budget Tips */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Smart Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">50/30/20 Rule</h4>
                  <p className="text-gray-700 text-xs">Allocate 50% needs, 30% wants, 20% savings</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Emergency Fund</h4>
                  <p className="text-gray-700 text-xs">Keep 3-6 months of expenses as emergency fund</p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Track Daily</h4>
                  <p className="text-gray-700 text-xs">Review your spending daily to stay on track</p>
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
              <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                <Calendar className="w-4 h-4 mr-2" />
                Monthly Review
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <PieChart className="w-4 h-4 mr-2" />
                Budget Report
              </Button>
              <Button variant="outline" className="w-full justify-start border-gray-300 bg-transparent">
                <Target className="w-4 h-4 mr-2" />
                Set Goals
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
