"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Wallet, TrendingUp, Target, Banknote, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"

export default function FinancePage() {
  const financialOverview = {
    totalBalance: 4575000,
    monthlyIncome: 85000,
    monthlyExpenses: 42000,
    savings: 2850000,
    investments: 1725000,
    netWorth: 7350000,
  }

  const recentTransactions = [
    {
      id: 1,
      description: "Salary Deposit",
      amount: 85000,
      type: "income",
      category: "Salary",
      date: "Today",
    },
    {
      id: 2,
      description: "Rent Payment",
      amount: -14500,
      type: "expense",
      category: "Housing",
      date: "Yesterday",
    },
    {
      id: 3,
      description: "Grocery Store",
      amount: -8550,
      type: "expense",
      category: "Food",
      date: "2 days ago",
    },
  ]

  const budgetCategories = [
    { name: "Housing", allocated: 15000, spent: 14500, color: "bg-blue-500" },
    { name: "Food", allocated: 6000, spent: 5200, color: "bg-green-500" },
    { name: "Transportation", allocated: 4000, spent: 3800, color: "bg-indigo-500" },
    { name: "Entertainment", allocated: 3000, spent: 2800, color: "bg-purple-500" },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <Wallet className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Finance Manager</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Intelligent financial planning, investment optimization, and automated expense tracking
        </p>
      </div>

      {/* Financial Overview */}
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Wallet className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Total Balance</h3>
            <p className="text-xl font-bold text-green-600">{formatCurrency(financialOverview.totalBalance)}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <ArrowUpRight className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Monthly Income</h3>
            <p className="text-xl font-bold text-blue-600">{formatCurrency(financialOverview.monthlyIncome)}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <ArrowDownRight className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Monthly Expenses</h3>
            <p className="text-xl font-bold text-red-600">{formatCurrency(financialOverview.monthlyExpenses)}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Banknote className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Savings</h3>
            <p className="text-xl font-bold text-indigo-600">{formatCurrency(financialOverview.savings)}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Investments</h3>
            <p className="text-xl font-bold text-purple-600">{formatCurrency(financialOverview.investments)}</p>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h3 className="text-gray-900 font-semibold text-sm">Net Worth</h3>
            <p className="text-xl font-bold text-orange-600">{formatCurrency(financialOverview.netWorth)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Transaction
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="w-6 h-6 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-medium">{transaction.description}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{transaction.category}</span>
                        <span>{transaction.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${
                          transaction.type === "income" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {transaction.type === "income" ? "+" : ""}
                        {formatCurrency(transaction.amount)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Budget Overview */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Monthly Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">{category.name}</span>
                    <span className="text-gray-600 text-sm">
                      {formatCurrency(category.spent)} / {formatCurrency(category.allocated)}
                    </span>
                  </div>
                  <Progress value={(category.spent / category.allocated) * 100} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {Math.round((category.spent / category.allocated) * 100)}% used
                    </span>
                    <span className="text-gray-500">{formatCurrency(category.allocated - category.spent)} left</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
