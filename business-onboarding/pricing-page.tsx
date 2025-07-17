import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Choose the plan that best fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <p className="text-gray-500">Perfect for personal use</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center py-6">
                <div className="text-5xl font-bold mb-4">FREE</div>
                <ul className="space-y-2 text-left w-full px-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />1 Auto-Reply Rule
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Basic Analytics
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Community Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-transparent" variant="outline" disabled>
                  Current Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="flex flex-col border-2 border-purple-600 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-purple-600">Pro</CardTitle>
                <p className="text-gray-500">For growing businesses</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center py-6">
                <div className="text-5xl font-bold mb-4">
                  KES 500<span className="text-xl font-normal">/month</span>
                </div>
                <ul className="space-y-2 text-left w-full px-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Unlimited Auto-Reply Rules
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Priority Support
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Custom Contact Categories
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Upgrade to Pro</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <p className="text-gray-500">For large organizations</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center py-6">
                <div className="text-5xl font-bold mb-4">Custom</div>
                <ul className="space-y-2 text-left w-full px-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    All Pro Features
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Dedicated Account Manager
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    SLA & Uptime Guarantee
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    On-Premise Deployment
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12 text-gray-600">
            <p>
              Need more?{" "}
              <Link href="#" className="text-purple-600 hover:underline">
                Contact us
              </Link>{" "}
              for custom solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
