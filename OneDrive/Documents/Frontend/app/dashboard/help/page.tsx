"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  HelpCircle,
  Search,
  Book,
  MessageSquare,
  Video,
  FileText,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Book,
      questions: [
        {
          question: "How do I set up my AI assistant?",
          answer:
            "Navigate to the AI Assistant page and follow the setup wizard. You'll need to configure voice settings and personality preferences.",
        },
        {
          question: "What features are included in my plan?",
          answer:
            "Your current plan includes AI assistance, health tracking, productivity tools, and basic analytics. Premium features require an upgrade.",
        },
        {
          question: "How do I sync data across devices?",
          answer:
            "Data automatically syncs when you're logged in. Ensure you're connected to the internet for real-time synchronization.",
        },
      ],
    },
    {
      title: "AI Assistant",
      icon: MessageSquare,
      questions: [
        {
          question: "How accurate is the voice recognition?",
          answer:
            "Our AI has 98% accuracy for voice recognition in optimal conditions. Accuracy may vary based on background noise and accent.",
        },
        {
          question: "Can I customize my AI's personality?",
          answer:
            "Yes! Go to AI Assistant settings to adjust personality traits, response style, and communication preferences.",
        },
        {
          question: "What languages does the AI support?",
          answer:
            "Currently supports English, Spanish, French, German, and Italian. More languages are being added regularly.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      icon: CheckCircle,
      questions: [
        {
          question: "How is my data protected?",
          answer:
            "We use end-to-end encryption, secure servers, and follow GDPR compliance. Your data is never shared without consent.",
        },
        {
          question: "Can I delete my data?",
          answer: "Yes, you can request data deletion from the Privacy settings page. This action is irreversible.",
        },
        {
          question: "Who has access to my information?",
          answer:
            "Only you and authorized personnel for support purposes. We never sell or share personal data with third parties.",
        },
      ],
    },
  ]

  const tutorials = [
    {
      title: "Setting Up Your Dashboard",
      duration: "5 min",
      type: "video",
      difficulty: "Beginner",
      description: "Learn how to customize your dashboard and organize your widgets",
    },
    {
      title: "Voice Commands Guide",
      duration: "8 min",
      type: "video",
      difficulty: "Beginner",
      description: "Master voice commands to control your AI assistant efficiently",
    },
    {
      title: "Advanced Analytics",
      duration: "12 min",
      type: "video",
      difficulty: "Advanced",
      description: "Deep dive into analytics features and data interpretation",
    },
    {
      title: "Privacy Settings Walkthrough",
      duration: "6 min",
      type: "article",
      difficulty: "Intermediate",
      description: "Complete guide to managing your privacy and security settings",
    },
  ]

  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      icon: MessageSquare,
      color: "blue",
    },
    {
      title: "Email Support",
      description: "Send detailed questions via email",
      availability: "Business hours",
      responseTime: "< 4 hours",
      icon: Mail,
      color: "green",
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      availability: "Mon-Fri 9AM-6PM",
      responseTime: "Immediate",
      icon: Phone,
      color: "indigo",
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      availability: "24/7",
      responseTime: "Varies",
      icon: HelpCircle,
      color: "purple",
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, watch tutorials, and get support when you need it
        </p>
      </div>

      {/* Search */}
      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search for help articles, tutorials, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-3 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
          <TabsTrigger value="faq" className="text-gray-700 data-[state=active]:bg-white">
            FAQ
          </TabsTrigger>
          <TabsTrigger value="tutorials" className="text-gray-700 data-[state=active]:bg-white">
            Tutorials
          </TabsTrigger>
          <TabsTrigger value="support" className="text-gray-700 data-[state=active]:bg-white">
            Contact Support
          </TabsTrigger>
          <TabsTrigger value="resources" className="text-gray-700 data-[state=active]:bg-white">
            Resources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-6">
          {(searchQuery ? filteredFAQs : faqCategories).map((category, index) => (
            <Card key={index} className="border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-blue-600" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border border-gray-200 rounded-lg">
                      <details className="group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                          <h4 className="font-medium text-gray-900">{faq.question}</h4>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="tutorials" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {tutorial.type === "video" ? (
                        <Video className="w-8 h-8 text-red-600" />
                      ) : (
                        <FileText className="w-8 h-8 text-blue-600" />
                      )}
                      <div>
                        <h3 className="font-semibold text-gray-900">{tutorial.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="border-gray-300 text-gray-600">
                            {tutorial.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {tutorial.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {tutorial.type === "video" ? "Watch Tutorial" : "Read Guide"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-${option.color}-100 rounded-lg flex items-center justify-center`}>
                      <option.icon className={`w-6 h-6 text-${option.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{option.title}</h3>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Availability:</span>
                      <span className="text-gray-900">{option.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="text-gray-900">{option.responseTime}</span>
                    </div>
                  </div>
                  <Button className={`w-full bg-${option.color}-600 hover:bg-${option.color}-700`}>
                    Contact {option.title.split(" ")[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">User Manual</h3>
                <p className="text-gray-600 text-sm mb-4">Complete guide to all features and functionality</p>
                <Button variant="outline" className="border-gray-300 bg-transparent">
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <Video className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Video Library</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step video tutorials and walkthroughs</p>
                <Button variant="outline" className="border-gray-300 bg-transparent">
                  Browse Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 text-sm mb-4">Connect with other users and share tips</p>
                <Button variant="outline" className="border-gray-300 bg-transparent">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
