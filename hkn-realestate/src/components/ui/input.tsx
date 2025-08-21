import type * as React from "react"

import { cn } from "../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-gray-500 selection:bg-red-600 selection:text-white dark:bg-gray-800/50 border-gray-300 flex h-12 w-full min-w-0 rounded-xl border-2 bg-white/80 backdrop-blur-sm px-4 py-3 text-base shadow-sm transition-all duration-300 outline-none file:inline-flex file:h-8 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:border-red-400 hover:shadow-md",
        "focus-visible:border-red-600 focus-visible:ring-red-500/20 focus-visible:ring-4 focus-visible:bg-white focus-visible:shadow-lg",
        "aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
