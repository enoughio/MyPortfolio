"use client"
import { useEffect, useState } from "react"
import { cn } from "@/utils/utils"

export function SplashScreen({messages, duration}) {
  const [isComplete, setIsComplete] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // If we've cycled through all messages, start fade-out process
    if (currentMessageIndex >= messages.length) {
      // Immediately set to fading out when all messages are shown
      setIsFadingOut(true)
      
      // Complete splash screen after a short delay
      const completeTimeout = setTimeout(() => {
        setIsComplete(true)
      }, duration)

      return () => clearTimeout(completeTimeout)
    }

    // Change message every 180ms
    const messageInterval = setTimeout(() => {
      setCurrentMessageIndex(prev => prev + 1)
    }, 250)

    return () => clearTimeout(messageInterval)
  }, [currentMessageIndex, messages.length, duration])

  if (isComplete) {
    return null
  }

  return (
    <div
      className={cn(
        "bg-card fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300",
        isFadingOut ? "opacity-0" : "opacity-100"
      )}
    >
      <div 
        className={cn(
          "text-white text-4xl font-mono text-center transition-all duration-300",
          isFadingOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
        )}
      >
        {messages[currentMessageIndex]}
      </div>
    </div>
  )
}