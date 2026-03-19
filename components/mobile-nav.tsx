"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Shield, Users, Car, Building2, MessageSquare, Gavel, UserCog, Briefcase, Skull, Target, Zap, Footprints, Map, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const menuItems = [
  { id: "gerais", label: "Regras Gerais", icon: Shield },
  { id: "interacao", label: "Interação", icon: Users },
  { id: "veiculos", label: "Veículos", icon: Car },
  { id: "organizacoes", label: "Organizações", icon: Building2 },
  { id: "comunicacao", label: "Comunicação", icon: MessageSquare },
  { id: "punicoes", label: "Punições", icon: Gavel },
  { id: "staff", label: "Staff", icon: UserCog },
  { id: "empregos", label: "Empregos", icon: Briefcase },
  // NOVAS CATEGORIAS ADICIONADAS AQUI:
  { id: "acoes", label: "Ações", icon: Shield },
  { id: "sequestro", label: "Sequestro", icon: Shield },
  { id: "caixa", label: "Caixa Eletrônico", icon: Shield },
  { id: "fuga", label: "Fuga Limpa", icon: Shield },
  { id: "rua", label: "Ações de Rua", icon: Shield },
  { id: "invasao", label: "Invasão/Pacif.", icon: Shield },
]

export function MobileNav({ activeSection, setActiveSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-primary/10 hover:border-primary/50 transition-colors"
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
          "fixed top-16 left-0 right-0 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background transition-transform duration-200",
          isOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
      >
        <nav className="p-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-primary/70">
            Categorias
          </p>
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
                      "flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200",
                      isActive 
                        ? "bg-primary/15 text-primary border-l-2 border-primary" 
                        : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                    )}
                  >
                    <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </div>
  )
}