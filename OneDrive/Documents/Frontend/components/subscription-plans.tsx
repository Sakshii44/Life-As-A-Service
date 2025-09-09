"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Crown, Zap } from "lucide-react"

interface SubscriptionPlansProps {
  onClose: () => void
}

export function SubscriptionPlans({ onClose }: SubscriptionPlansProps) {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      icon: <Zap className="w-6 h-6" />,
      color: "from-gray-500 to-gray-600",
      features: [
        "Calendar & To-do List",
        "Basic Diet Assistant",
        "Study Planning Tips",
        "Mood Analyzer",
        "Limited Voice Commands",
      ],
      limitations: [
        "No Habit Prediction",
        "No Therapy Sessions",
        "No Finance Management",
        "No Office Work Management",
        "No Reminders",
      ],
    },
    {
      name: "Premium",
      price: "₹999",
      period: "per month",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      popular: true,
      features: [
        "All Free Features",
        "Habit Prediction",
        "Therapy Sessions",
        "Finance Management",
        "Office Work Management",
        "Smart Reminders",
        "Advanced Voice Commands",
        "Meditation & Exercise Plans",
      ],
      limitations: ["No Self Clone AI", "No Memory Mining", "No Resume Analyzer", "No Interview Feedback"],
    },
    {
      name: "Pro",
      price: "₹1,999",
      period: "per month",
      icon: <Crown className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      features: [
        "All Premium Features",
        "Self Clone AI Assistant",
        "Memory Mining (Encrypted)",
        "Smart Resume Analyzer",
        "AI Interview Feedback",
        "Personal Finance + Investment",
        "Advanced Trading Suggestions",
        "Business Ideas Generator",
        "Priority Support",
      ],
      limitations: [],
    },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-6 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Choose Your Plan</h2>
            <p className="text-gray-300">Unlock the full potential of your AI life assistant</p>
          </div>
          <Button variant="ghost" onClick={onClose} className="text-white hover:bg-white/10">
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative bg-black/20 backdrop-blur-lg border-white/10 hover:border-white/20 transition-all ${
                plan.popular ? "ring-2 ring-purple-500" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}
                >
                  {plan.icon}
                </div>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Features Included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Not Included:</h4>
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  className={`w-full mt-6 ${
                    plan.name === "Free"
                      ? "bg-gray-600 hover:bg-gray-700"
                      : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                  } text-white`}
                  onClick={() => {
                    console.log(`Selected ${plan.name} plan`)
                    onClose()
                  }}
                >
                  {plan.name === "Free" ? "Current Plan" : `Choose ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            All plans include 24/7 voice-powered AI assistance and secure data encryption
          </p>
        </div>
      </div>
    </div>
  )
}
