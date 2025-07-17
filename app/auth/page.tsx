import AuthForm from "@/components/auth/auth-form"

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Welcome to Weaver</h1>
        <AuthForm />
      </div>
    </div>
  )
}
