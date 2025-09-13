import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5 text-blue-600" />
              <span className="sr-only">Back to Home</span>
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        <div className="space-y-6 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy for Weaver</h2>

          <p>
            Weaver ("the App") is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
            and store your data when you use the app.
          </p>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Data We Collect</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Call Log Access:</strong> We access call logs to detect missed calls from known and unknown numbers.
              </li>
              <li>
                <strong>SMS Access:</strong> We access SMS functionality to:
                <ul className="list-disc list-inside ml-5">
                  <li>Automatically send custom replies to missed calls.</li>
                  <li>Receive and process SMS replies from callers (e.g., numeric responses like "1", "price", etc.).</li>
                </ul>
              </li>
              <li>
                <strong>Contacts Access:</strong> We may use your contacts to:
                <ul className="list-disc list-inside ml-5">
                  <li>Identify whether a caller is a known contact.</li>
                  <li>Personalize automated responses where applicable.</li>
                </ul>
              </li>
              <li>
                <strong>Local Storage:</strong> We store the following only on your device:
                <ul className="list-disc list-inside ml-5">
                  <li>Phone numbers of callers.</li>
                  <li>Timestamps of missed calls and messages.</li>
                  <li>Your custom chatbot responses and message settings.</li>
                  <li>Summary analytics for your own viewing (e.g., total missed calls, response rates).</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">2. How We Use Your Data</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Detect and log missed calls.</li>
              <li>Automatically respond to missed calls based on user-defined logic.</li>
              <li>Trigger smart follow-up responses if a caller retries within a specified window.</li>
              <li>Process incoming SMS replies and respond using your saved chatbot logic.</li>
              <li>Show analytics such as response rates and frequent callers.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Data Sharing and Retention</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>We do NOT send or share any personal data to external servers or third parties.</li>
              <li>We do NOT use advertising SDKs, analytics services, or cloud storage providers.</li>
              <li>All data remains securely stored on your device and is not accessible to us or any other party.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">4. Your Choices and Controls</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You can disable or uninstall the app at any time to stop data access.</li>
              <li>You can clear data through your device settings or within the app if such a feature is available.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">5. Children’s Privacy</h3>
            <p>
              Weaver is not intended for use by children under the age of 13. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">6. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy to reflect improvements or regulatory requirements. The "Last Updated"
              date at the top will be revised accordingly. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">7. Contact Us</h3>
            <p>
              If you have any questions or concerns about this policy or your data, you can reach us at:{" "}
              <a href="mailto:kenchege67@gmail.com" className="text-blue-600 hover:underline">
                kenchege67@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
      
    {/* 👇 Footer added here */}
      <footer className="bg-gray-100 border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          Contacts:{" "}
          <a href="tel:+254748834249" className="text-blue-600 hover:underline">+254 748 834 249</a> /{" "}
          <a href="tel:+254795575800" className="text-blue-600 hover:underline">+254 795 575 800</a>
        </div>
      </footer>
    </div>
  )
}
