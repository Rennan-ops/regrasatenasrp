"use client"

import Image from "next/image"
import { 
  Shield, 
  Users, 
  Car, 
  Building2, 
  MessageSquare, 
  Gavel, 
  UserCog, 
  Briefcase, 
  Target, 
  Skull, 
  Zap, 
  Footprints, 
  Map, 
  ShieldAlert,
  Menu,
  X 
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const menuItems = [
  { id: "gerais", label: "Regras Gerais", icon: Shield },
  { id: "interacao", label: "Interacao", icon: Users },
  { id: "veiculos", label: "Veiculos", icon: Car },
  { id: "organizacoes", label: "Organizacoes", icon: Building2 },
  { id: "comunicacao", label: "Comunicacao", icon: MessageSquare },
  { id: "punicoes", label: "Punicoes", icon: Gavel },
  { id: "staff", label: "Staff", icon: UserCog },
  { id: "empregos", label: "Empregos", icon: Briefcase },

  { id: "acoes", label: "Ações", icon: Skull },
  { id: "sequestro", label: "Sequestro", icon: Skull },
  { id: "caixa", label: "Caixa Eletrônico", icon: Skull },
  { id: "fuga", label: "Fuga Limpa", icon: Skull },
  { id: "rua", label: "Ações de Rua", icon: Skull },
  { id: "invasao", label: "Invasão/Pacif.", icon: Skull }
]

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center border-b border-border px-6 py-6">
        <div className="relative h-24 w-24 mb-2">
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
      <nav className="flex-1 overflow-y-auto p-4">
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
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
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

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <p className="text-xs text-muted-foreground">
            Atenas Roleplay 2026
          </p>
        </div>
      </div>
    </aside>
  )
}
