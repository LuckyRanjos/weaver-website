"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"

type SmsMessage = {
  id: string
  phone_number: string
  message_body: string
  message_type: "inbound" | "outbound"
  created_at: string
}

export default function SmsActivity() {
  const [smsMessages, setSmsMessages] = useState<SmsMessage[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // You can replace this with your own API or local logic
    const mockMessages: SmsMessage[] = [
      {
        id: "1",
        phone_number: "+254700123456",
        message_body: "Hello, how much does it cost?",
        message_type: "inbound",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        phone_number: "+254711223344",
        message_body: "We’ll get back to you shortly!",
        message_type: "outbound",
        created_at: new Date(Date.now() - 60000 * 5).toISOString(),
      },
    ]
    setSmsMessages(mockMessages)
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading SMS activity...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent SMS Activity</CardTitle>
      </CardHeader>
      <CardContent>
        {smsMessages.length === 0 ? (
          <p className="text-center text-gray-500">No recent SMS activity.</p>
        ) : (
          <div className="space-y-3">
            {smsMessages.map((message) => (
              <div key={message.id} className="p-3 border rounded-md bg-gray-50">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">
                    {message.message_type === "outbound" ? "Sent to" : "Received from"}: {message.phone_number}
                  </span>
                  <span className="text-xs text-gray-500">
                    {format(new Date(message.created_at), "MMM dd, HH:mm")}
                  </span>
                </div>
                <p className="text-gray-700 mt-1 text-sm">{message.message_body}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}