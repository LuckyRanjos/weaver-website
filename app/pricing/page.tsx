import Link from "next/link"
import { Check, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-5 w-5 text-blue-600 mr-2" />
          <span className="sr-only">Back to Home</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700" href="/#how-it-works">
            How it Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-700" href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
              Choose the plan that best fits your business needs. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col justify-between p-6 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Free</CardTitle>
                  <CardDescription className="mt-2 text-gray-700">
                    Perfect for individuals and small businesses just starting out.
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold text-gray-900">
                    Free<span className="text-lg font-normal text-gray-700">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-6">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      100 auto-replies/month
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Basic customization
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Standard support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-8">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Started for Free</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between p-6 shadow-lg border-2 border-blue-600 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Pro</CardTitle>
                  <CardDescription className="mt-2 text-gray-700">
                    Ideal for growing businesses with higher call volumes.
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold text-gray-900">
                    KES. 500<span className="text-lg font-normal text-gray-700">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-6">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      1,000 auto-replies/month
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Advanced customization
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Basic analytics
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-8">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Choose Pro</Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col justify-between p-6 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Enterprise</CardTitle>
                  <CardDescription className="mt-2 text-gray-700">
                    For large organizations requiring custom solutions and dedicated support.
                  </CardDescription>
                  <div className="mt-4 text-4xl font-bold text-gray-900">
                    Custom<span className="text-lg font-normal text-gray-700">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="mt-6">
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Unlimited SMS replies
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Full customization & integrations
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      Advanced analytics & reporting
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-8">
                  <Button className="w-full bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50">
                    Contact Sales
                  </Button>
                </CardFooter>
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
