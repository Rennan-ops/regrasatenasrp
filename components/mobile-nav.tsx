"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { categoriesData } from "@/lib/rules-data"

interface MobileNavProps {
  activeCategory: string
  activeRule: string | null
  setActiveCategory: (category: string) => void
  setActiveRule: (rule: string | null) => void
  expandedCategories: string[]
  toggleCategory: (category: string) => void
}

export function MobileNav({ 
  activeCategory, 
  activeRule, 
  setActiveCategory, 
  setActiveRule,
  expandedCategories,
  toggleCategory 
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image
              src="/logo.png"
              alt="Atenas Roleplay"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]"
              priority
            />
          </div>
          <span className="text-sm font-bold text-primary tracking-wide">ATENAS RP</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-primary/10 hover:border-primary/50 transition-colors"
        >
          {isOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-14 left-0 right-0 z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto border-b border-border bg-background transition-transform duration-200",
          isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
      >
        <nav className="p-4">
          <ul className="space-y-1">
            {categoriesData.map((category, index) => {
              const isExpanded = expandedCategories.includes(category.id)
              const isActiveCategory = activeCategory === category.id
              
              return (
                <li key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={cn(
                      "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActiveCategory
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={cn(
                        "flex items-center justify-center h-5 w-5 rounded text-xs font-bold",
                        isActiveCategory ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        {index + 1}
                      </span>
                      <span className="truncate">{category.name}</span>
                    </div>
                    <ChevronDown 
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-200",
                        isExpanded && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  {/* Rules list */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <ul className="ml-4 mt-1 space-y-0.5 border-l border-border pl-3">
                      {category.rules.map((rule) => {
                        const isActive = activeRule === rule.id && activeCategory === category.id
                        return (
                          <li key={rule.id}>
                            <button
                              onClick={() => {
                                setActiveCategory(category.id)
                                setActiveRule(rule.id)
                                setIsOpen(false)
                              }}
                              className={cn(
                                "flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-all duration-150",
                                isActive
                                  ? "bg-primary/15 text-primary font-medium"
                                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                              )}
                            >
                              <span className="truncate">{rule.title}</span>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-14" />
    </div>
  )
}
