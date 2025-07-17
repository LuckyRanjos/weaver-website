"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Settings, MessageSquare, History } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function SetupGuide() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [businessName, setBusinessName] = useState("")
  const { toast } = useToast()

  const handleSaveSettings = () => {
    if (!phoneNumber || !businessName) {
      toast({
        title: "Missing Information",
        description: "Please provide both phone number and business name.",
        variant: "destructive",
      })
      return
    }
    // In a real application, you would save these settings to a database
    // For now, we'll just show a success toast.
    toast({
      title: "Settings Saved",
      description: "Your business settings have been saved successfully!",
    })
    console.log("Saved Settings:", { phoneNumber, businessName })
  }

  return (
    <div className="p-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Weaver</h1>
          <p className="text-lg text-gray-700">Your automated SMS reply solution for missed business calls</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Download className="h-5 w-5 text-blue-600" />
                Step 1: Install the Android App
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Download Weaver Android app from the Google Play Store or install the APK file provided.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Download from Play Store</Button>
              <div className="text-sm text-gray-600">
                <p>• Compatible with Android 7.0+</p>
                <p>• Requires SMS and Phone permissions</p>
                <p>• Works offline - no internet required</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Settings className="h-5 w-5 text-blue-600" />
                Step 2: Configure App Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Set up your business information and auto-reply messages.</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone-number" className="text-gray-800">
                    Business Phone Number
                  </Label>
                  <Input
                    id="phone-number"
                    placeholder="+254712345678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business-name" className="text-gray-800">
                    Business Name
                  </Label>
                  <Input
                    id="business-name"
                    placeholder="Your Business Name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSaveSettings}>
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Step 3: Test Your Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Test the app to ensure it's working correctly.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Call your business phone from another number</p>
                <p>• Let it ring without answering (missed call)</p>
                <p>• Check if you receive the auto-reply SMS</p>
                <p>• Call again within 30 minutes to test repeat message</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <History className="h-5 w-5 text-blue-600" />
                Step 4: Monitor Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">Track your missed calls and sent messages in the History section.</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• View all missed calls</p>
                <p>• See sent auto-reply messages</p>
                <p>• Track repeat callers</p>
                <p>• Monitor app performance</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-blue-900">Sample Auto-Reply Messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-blue-900">Initial Message (for new missed calls):</h4>
                <p className="text-sm text-blue-700 bg-white p-3 rounded border border-gray-200">
                  "Asante kwa kupigia [Your Business Name]. Siko available sasa lakini nitakupigia haraka. Kwa mambo ya
                  haraka, tuma SMS."
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  English: "Thank you for calling [Your Business Name]. I'm currently unavailable but will return your
                  call soon. For urgent matters, please send an SMS."
                </p>
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Second Message (for repeat calls within 15 minutes):</h4>
                <p className="text-sm text-blue-700 bg-white p-3 rounded border border-gray-200">
                  "Naona umepigia tena. Bado siko available lakini simu yako ni muhimu kwangu. Nitakupigia kwanza.
                  Asante kwa uvumilivu."
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  English: "I notice you've called again. I'm still unavailable but your call is important to me. I'll
                  prioritize returning your call. Thank you for your patience."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Need Help?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-gray-800">WhatsApp Support</h4>
              <p className="text-gray-700">+254 795 575 800</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Email Support</h4>
              <p className="text-gray-700">kenchege67@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Video Tutorial</h4>
              <p className="text-gray-700">Watch setup guide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
