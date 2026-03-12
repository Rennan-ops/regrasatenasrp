"use client"

import { useState } from "react"
import { Menu, X, Scale } from "lucide-react"
import { 
  Shield, 
  Users, 
  Car, 
  Building2, 
  MessageSquare, 
  Gavel, 
  UserCog, 
  Briefcase 
} from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const menuItems = [
  { id: "gerais", label: "Regras Gerais", icon: Shield },
  { id: "interacao", label: "Interacao entre Jogadores", icon: Users },
  { id: "veiculos", label: "Veiculos", icon: Car },
  { id: "organizacoes", label: "Organizacoes", icon: Building2 },
  { id: "comunicacao", label: "Comunicacao", icon: MessageSquare },
  { id: "punicoes", label: "Punicoes", icon: Gavel },
  { id: "staff", label: "Staff", icon: UserCog },
  { id: "empregos", label: "Empregos", icon: Briefcase },
]

export function MobileNav({ activeSection, setActiveSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <Scale className="h-4 w-4 text-background" />
          </div>
          <span className="text-sm font-semibold">Atenas Roleplay</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
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
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-accent text-accent-foreground" 
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
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
