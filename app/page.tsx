"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { RulesModal } from "@/components/rules-modal"
import { ServerCard } from "@/components/server-card"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  const [selectedServer, setSelectedServer] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Header />
        
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="text-foreground">Atenas</span>{" "}
              <span className="text-primary">Regras</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Clique no servidor para ver as regras oficiais
            </p>
          </div>

          <div className="flex justify-center">
            <ServerCard 
              name="Atenas Roleplay"
              description="Clique para ver as regras"
              onClick={() => setSelectedServer("atenas")}
              icon="city"
            />
          </div>
        </section>

        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Atenas Roleplay. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>

      <RulesModal 
        isOpen={selectedServer === "atenas"} 
        onClose={() => setSelectedServer(null)} 
        serverName="Atenas Roleplay"
      />
    </main>
  )
}
