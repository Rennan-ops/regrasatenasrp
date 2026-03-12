"use client"

import { 
  Shield, 
  Users, 
  Car, 
  Building2, 
  MessageSquare, 
  Gavel, 
  UserCog, 
  Briefcase,
  Scale
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
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

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border bg-sidebar">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
          <Scale className="h-5 w-5 text-background" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-foreground">Atenas Roleplay</h1>
          <p className="text-xs text-muted-foreground">Regras do Servidor</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
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

      {/* Footer */}
      <div className="border-t border-border p-4">
        <p className="text-xs text-muted-foreground text-center">
          Atenas Roleplay 2024
        </p>
      </div>
    </aside>
  )
}
