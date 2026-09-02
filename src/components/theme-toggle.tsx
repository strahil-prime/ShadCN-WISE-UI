"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "theme"

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle("dark", isDark)
  localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light")
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const prefersDark = stored === "dark"
    setIsDark(prefersDark)
    setMounted(true)
  }, [])

  const handleToggle = (checked: boolean) => {
    setIsDark(checked)
    applyTheme(checked)
  }

  if (!mounted) {
    return <div className="h-8 w-[5.5rem] shrink-0" aria-hidden />
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border px-2.5 py-1",
        "bg-green-100/60 dark:bg-green-700/30"
      )}
    >
      <Sun
        className={cn(
          "size-4 transition-colors",
          isDark ? "text-muted-foreground" : "text-green-700"
        )}
        aria-hidden
      />
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        aria-label="Toggle dark mode"
        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-grey-300"
      />
      <Moon
        className={cn(
          "size-4 transition-colors",
          isDark ? "text-green-500" : "text-muted-foreground"
        )}
        aria-hidden
      />
    </div>
  )
}
