"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { RulesContent } from "@/components/rules-content"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  const [activeSection, setActiveSection] = useState("gerais")

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          <RulesContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  )
}
