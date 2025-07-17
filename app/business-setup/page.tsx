"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import SetupGuide from "@/business-onboarding/setup-guide"

export default function BusinessSetupPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <header className="px-4 py-3 border-b bg-white">
          <div className="container flex items-center">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span className="sr-only">Back to Dashboard</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Business Setup Guide</h1>
          </div>
        </header>

        <SetupGuide />
      </div>
    </div>
  )
}
