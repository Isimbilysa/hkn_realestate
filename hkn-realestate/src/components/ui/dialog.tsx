"use client"

import type { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)} // close when clicking overlay
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface DialogContentProps {
  children: ReactNode
  className?: string
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

interface DialogHeaderProps {
  children: ReactNode
  className?: string
}

export function DialogHeader({ children, className = "" }: DialogHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

interface DialogTitleProps {
  children: ReactNode
  className?: string
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
}
