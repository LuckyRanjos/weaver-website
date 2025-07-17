import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="px-4 py-3 border-b bg-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span className="sr-only">Back to Dashboard</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Weaver Insights</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900">Insights Overview</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed text-gray-700">
                  Get a quick glance at your performance metrics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">Coming Soon!</div>
                <p className="text-xs text-muted-foreground text-gray-600">
                  Detailed analytics and reporting will be available here.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Total Auto-Replies</CardTitle>
                <LineChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <p className="text-xs text-muted-foreground text-gray-600">No data yet</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-800">Missed Calls Handled</CardTitle>
                <BarChart className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">0</div>
                <p className="text-xs text-muted-foreground text-gray-600">No data yet</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-1 xl:grid-cols-2">
            <Card className="sm:col-span-2 bg-white shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900">Performance Trends</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed text-gray-700">
                  Visualize your auto-reply performance over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center text-muted-foreground text-gray-600">No trend data to display.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
