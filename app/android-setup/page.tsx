import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AndroidSetupPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Android App Setup</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>Understanding how Weaver works with your Safaricom phone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">1. Install the Weaver Android App</h3>
              <p className="text-sm text-muted-foreground">
                The Weaver Android app runs in the background on your phone and detects missed calls.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">2. Works Completely Offline</h3>
              <p className="text-sm text-muted-foreground">
                The app works 100% offline - it detects missed calls and sends SMS replies directly from your phone.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">3. Optional Server Sync</h3>
              <p className="text-sm text-muted-foreground">
                You can optionally sync your data with the Weaver server to view analytics and manage settings online.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">4. Uses Your Safaricom SIM</h3>
              <p className="text-sm text-muted-foreground">
                All SMS messages are sent directly from your Safaricom SIM card using your existing SMS plan.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
            <CardDescription>Follow these steps to set up the Weaver Android app</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Step 1: Download the App</h3>
              <p className="text-sm text-muted-foreground">
                Download the Weaver Android app from the Google Play Store or use the direct APK link below.
              </p>
              <Button className="w-full mt-2">Download APK</Button>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 2: Basic Setup</h3>
              <p className="text-sm text-muted-foreground">
                Open the app and enter your phone number and business name. Create your auto-reply messages.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 3: Optional Server Sync</h3>
              <p className="text-sm text-muted-foreground">
                If you want to sync with the server, enable sync and enter your API key shown below.
              </p>
              <div className="bg-gray-100 p-3 rounded-md">
                <p className="text-sm font-mono break-all">API Key: WEAVER_APP_KEY_12345</p>
                <p className="text-sm font-mono mt-2">Server URL: https://your-weaver-app.vercel.app</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Step 4: Battery Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Disable battery optimization for the Weaver app to ensure it can run in the background.
              </p>
              <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                <li>Go to Settings &gt; Apps &gt; Weaver</li>
                <li>Select Battery &gt; Battery optimization</li>
                <li>Choose "Don't optimize"</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Offline vs. Online Mode</CardTitle>
            <CardDescription>Choose the mode that works best for you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Offline Mode</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Works without internet connection</li>
                  <li>All data stays on your phone</li>
                  <li>Lower battery usage</li>
                  <li>No server costs</li>
                  <li>Basic functionality only</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Online Mode (Sync Enabled)</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Analytics and insights dashboard</li>
                  <li>Manage settings from any device</li>
                  <li>Multiple phone support</li>
                  <li>Data backup in the cloud</li>
                  <li>Advanced features and rules</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              You can start in offline mode and enable sync later if you need the additional features.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
