import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Settings, BarChart, ArrowRight, PhoneCall } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="px-4 py-3 border-b bg-white">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Weaver Dashboard</h1>
          <Button variant="outline" size="sm" className="bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50">
            <Link href="/business-setup">Setup Guide</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="container space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col justify-between bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-800">Your Dashboard</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed text-gray-600">
                  Welcome to your Weaver dashboard. This is where you'll find an overview of your automated replies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">Coming Soon!</div>
                <p className="text-xs text-muted-foreground text-gray-500">
                  We're working hard to bring you detailed analytics and management tools.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Total Missed Calls</CardTitle>
                <PhoneCall className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <p className="text-xs text-muted-foreground text-gray-500">No data yet</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Auto-Replies Sent</CardTitle>
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <p className="text-xs text-muted-foreground text-gray-500">No data yet</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Auto-Replies</CardTitle>
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">Manage your automated messages.</p>
                <p className="text-sm text-gray-600">Create, edit, and activate replies.</p>
                <Button variant="link" className="px-0 pt-4 text-blue-600 hover:text-blue-700">
                  <Link href="/dashboard/auto-replies" className="flex items-center gap-1">
                    Go to Auto-Replies <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Contacts</CardTitle>
                <Users className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">Organize your callers.</p>
                <p className="text-sm text-gray-600">Categorize contacts for tailored responses.</p>
                <Button variant="link" className="px-0 pt-4 text-blue-600 hover:text-blue-700">
                  <Link href="/dashboard/contacts" className="flex items-center gap-1">
                    Go to Contacts <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Insights</CardTitle>
                <BarChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">Understand your call patterns.</p>
                <p className="text-sm text-gray-600">View analytics on missed calls and replies.</p>
                <Button variant="link" className="px-0 pt-4 text-blue-600 hover:text-blue-700">
                  <Link href="/insights" className="flex items-center gap-1">
                    View Insights <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Settings</CardTitle>
                <Settings className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">Adjust your app preferences.</p>
                <p className="text-sm text-gray-600">Manage notifications and auto-reply status.</p>
                <Button variant="link" className="px-0 pt-4 text-blue-600 hover:text-blue-700">
                  <Link href="/profile" className="flex items-center gap-1">
                    Go to Settings <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
