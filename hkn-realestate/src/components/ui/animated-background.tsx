"use client"

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-amber-100 rounded-lg opacity-30 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-20 h-20 bg-red-200 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-28 h-28 bg-amber-200 rounded-lg opacity-20 animate-bounce"
        style={{ animationDelay: "3s" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-amber-50/30" />
    </div>
  )
}
