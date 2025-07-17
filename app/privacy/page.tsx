import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 py-3 border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span className="sr-only">Back to Home</span>
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy for Weaver</h2>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Collection:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>We access call logs to detect missed calls and send automatic SMS responses.</li>
              <li>We access SMS messages to process chatbot responses.</li>
              <li>We store phone numbers and message history locally on your device.</li>
              <li>We do NOT share any data with third parties.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Usage:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Call log data is used only to detect missed calls.</li>
              <li>SMS data is used only for automated responses.</li>
              <li>All data remains on your device.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Contact:</h3>
            <p className="text-gray-700">
              For any privacy-related questions, please contact us at:{" "}
              <a href="mailto:kenchege67@gmail.com" className="text-blue-600 hover:underline">
                kenchege67@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
