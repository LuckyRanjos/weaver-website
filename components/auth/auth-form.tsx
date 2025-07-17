"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  const { toast } = useToast()

  const handleSignUp = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })

    if (error) {
      toast({
        title: "Sign Up Failed",
        description: error.message,
        variant: "destructive",
      })
    } else {
      toast({
        title: "Sign Up Successful",
        description: "Check your email to confirm your registration.",
      })
      router.push("/auth/verify")
    }
    setLoading(false)
  }

  const handleSignIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      toast({
        title: "Sign In Failed",
        description: error.message,
        variant: "destructive",
      })
    } else {
      router.push("/dashboard")
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="flex justify-between">
        <Button onClick={handleSignUp} disabled={loading}>
          Sign Up
        </Button>
        <Button onClick={handleSignIn} disabled={loading}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
