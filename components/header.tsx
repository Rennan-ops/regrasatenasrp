"use client"

import { Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <Building2 className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 blur-lg bg-primary/30" />
          </div>
          <h1 
            className="text-2xl md:text-3xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-foreground">ATENAS</span>{" "}
            <span className="text-primary">ROLEPLAY</span>
          </h1>
        </div>
      </div>
    </header>
  )
}
