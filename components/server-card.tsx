"use client"

import { Building2, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServerCardProps {
  name: string
  description: string
  onClick: () => void
  icon: "city"
}

export function ServerCard({ name, description, onClick }: ServerCardProps) {
  return (
    <Card 
      className="group cursor-pointer bg-card/80 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] w-full max-w-md"
      onClick={onClick}
    >
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex-1">
            <h3 
              className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              {description}
            </p>
          </div>
          
          <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  )
}
