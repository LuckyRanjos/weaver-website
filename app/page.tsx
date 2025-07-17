import Link from "next/link"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { MessageSquare, PhoneCall, Settings, Phone, MessageSquareText } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 text-blue-600" />
          <span className="sr-only">Weaver</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How it Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Never Miss a Lead with Automated SMS Replies
                  </h1>
                  <p className="max-w-[600px] text-blue-100 md:text-xl">
                    Weaver automatically sends personalized SMS messages to your missed calls, ensuring every potential
                    customer gets an instant response.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="/business-setup"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#how-it-works"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="bg-white p-8 rounded-2xl shadow-xl border">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Missed Call Detected</p>
                        <p className="text-sm text-gray-700">+254 712 345 678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                      <MessageSquareText className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Auto-Reply Sent</p>
                        <p className="text-sm text-gray-700">"Thanks for calling! I'll get back to you soon."</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="how-it-works">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Simple Steps to Automated Replies
                </h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Weaver integrates seamlessly with your Android phone to ensure no missed call goes unanswered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center p-6 text-center">
                <PhoneCall className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-900">Missed Call Detection</CardTitle>
                <CardDescription className="text-gray-700">
                  Our Android app detects missed calls instantly, even when your phone is offline.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-900">Automated SMS Reply</CardTitle>
                <CardDescription className="text-gray-700">
                  A personalized SMS is sent automatically to the caller, acknowledging their call.
                </CardDescription>
              </Card>
              <Card className="flex flex-col items-center p-6 text-center">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-bold mb-2 text-gray-900">Customizable Messages</CardTitle>
                <CardDescription className="text-gray-700">
                  Tailor your auto-reply messages for different caller categories.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-800 text-white">
        <p className="text-xs text-blue-200">&copy; {new Date().getFullYear()} Weaver. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-blue-200" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-blue-200" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
