"use client"

import Image from "next/image"
import { 
  Shield, 
  Users, 
  Car, 
  Gavel, 
  Skull, 
  ShieldCheck,
  ChevronDown,
  Briefcase,
  DollarSign,
  Settings,
  Swords,
  Theater
} from "lucide-react"
import { cn } from "@/lib/utils"
import { categoriesData } from "@/lib/rules-data"

interface SidebarProps {
  activeCategory: string
  activeRule: string | null
  setActiveCategory: (category: string) => void
  setActiveRule: (rule: string | null) => void
  expandedCategories: string[]
  toggleCategory: (category: string) => void
}

const categoryIcons: Record<string, typeof Shield> = {
  "regras-gerais": Shield,
  "ilegal": Skull,
  "policia": ShieldCheck,
  "servicos": Briefcase,
  "economia": DollarSign,
  "administracao": Settings,
  "combate": Swords,
  "interacao": Theater,
}

export function Sidebar({ 
  activeCategory, 
  activeRule, 
  setActiveCategory, 
  setActiveRule,
  expandedCategories,
  toggleCategory 
}: SidebarProps) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center border-b border-border px-6 py-6">
        <div className="relative h-20 w-20 mb-2">
          <Image
            src="/logo.png"
            alt="Atenas Roleplay"
            fill
            className="object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]"
            priority
          />
        </div>
        <h1 className="text-lg font-bold text-primary tracking-wide">ATENAS ROLEPLAY</h1>
        <p className="text-xs text-muted-foreground mt-1">Regras do Servidor</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="space-y-1">
          {categoriesData.map((category, index) => {
            const Icon = categoryIcons[category.id] || Shield
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

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="text-xs text-muted-foreground">
            Atenas Roleplay 2025
          </p>
        </div>
      </div>
    </aside>
  )
}
