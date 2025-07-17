"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Tables } from "@/lib/supabase/database.types"
import { format } from "date-fns"

type SmsMessage = Tables<"sms_messages">

export default function SmsActivity() {
  const supabase = createClient()
  const [smsMessages, setSmsMessages] = useState<SmsMessage[]>([])
  const [loading, setLoading] = useState(true)

  const fetchSmsMessages = async () => {
    setLoading(true)
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      setLoading(false)
      return
    }

    const { data, error } = await supabase
      .from("sms_messages")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(10) // Fetch last 10 messages

    if (error) {
      console.error("Error fetching SMS messages:", error)
    } else {
      setSmsMessages(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSmsMessages()
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
                  <span className="text-xs text-gray-500">{format(new Date(message.created_at), "MMM dd, HH:mm")}</span>
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
