"use client"

import { useState, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { RulesContent } from "@/components/rules-content"
import { MobileNav } from "@/components/mobile-nav"
import { categoriesData } from "@/lib/rules-data"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("regras-gerais")
  const [activeRule, setActiveRule] = useState<string | null>(null)
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["regras-gerais"])

  const toggleCategory = useCallback((categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
    
    // Set active category
    const category = categoriesData.find(c => c.id === categoryId)
    if (category) {
      setActiveCategory(categoryId)
      setActiveRule(null)
    }
  }, [])

  const handleSetActiveRule = useCallback((ruleId: string | null) => {
    setActiveRule(ruleId)
  }, [])

  const handleSetActiveCategory = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Navigation */}
      <MobileNav 
        activeCategory={activeCategory}
        activeRule={activeRule}
        setActiveCategory={handleSetActiveCategory}
        setActiveRule={handleSetActiveRule}
        expandedCategories={expandedCategories}
        toggleCategory={toggleCategory}
      />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar 
          activeCategory={activeCategory}
          activeRule={activeRule}
          setActiveCategory={handleSetActiveCategory}
          setActiveRule={handleSetActiveRule}
          expandedCategories={expandedCategories}
          toggleCategory={toggleCategory}
        />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          <RulesContent 
            activeCategory={activeCategory} 
            activeRule={activeRule}
            setActiveRule={handleSetActiveRule}
          />
        </main>
      </div>
    </div>
  )
}
