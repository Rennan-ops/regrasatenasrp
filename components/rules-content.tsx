"use client"

import { useEffect } from "react"
import { categoriesData, type RuleBlock } from "@/lib/rules-data"
import { cn } from "@/lib/utils"
import { 
  Info, 
  AlertTriangle, 
  Ban, 
  Scale, 
  CheckCircle2,
  FileText,
  Target
} from "lucide-react"

const blockConfig: Record<RuleBlock["type"], { 
  label: string
  icon: typeof Info
  borderColor: string
  labelColor: string
  bgColor: string
}> = {
  definicao: {
    label: "DEFINIÇÃO",
    icon: Info,
    borderColor: "border-l-cyan-500",
    labelColor: "text-cyan-400",
    bgColor: "bg-cyan-950/40"
  },
  exemplo: {
    label: "EXEMPLO",
    icon: AlertTriangle,
    borderColor: "border-l-amber-500",
    labelColor: "text-amber-400",
    bgColor: "bg-amber-950/40"
  },
  proibicao: {
    label: "PROIBIÇÕES",
    icon: Ban,
    borderColor: "border-l-red-500",
    labelColor: "text-red-400",
    bgColor: "bg-red-950/40"
  },
  punicao: {
    label: "PUNIÇÕES",
    icon: Scale,
    borderColor: "border-l-orange-500",
    labelColor: "text-orange-400",
    bgColor: "bg-orange-950/40"
  },
  importante: {
    label: "IMPORTANTE",
    icon: AlertTriangle,
    borderColor: "border-l-rose-500",
    labelColor: "text-rose-400",
    bgColor: "bg-rose-950/40"
  },
  permitido: {
    label: "PERMITIDO",
    icon: CheckCircle2,
    borderColor: "border-l-emerald-500",
    labelColor: "text-emerald-400",
    bgColor: "bg-emerald-950/40"
  },
  requisito: {
    label: "REQUISITOS",
    icon: FileText,
    borderColor: "border-l-blue-500",
    labelColor: "text-blue-400",
    bgColor: "bg-blue-950/40"
  },
  limite: {
    label: "LIMITES",
    icon: Target,
    borderColor: "border-l-violet-500",
    labelColor: "text-violet-400",
    bgColor: "bg-violet-950/40"
  }
}

interface RulesContentProps {
  activeCategory: string
  activeRule: string | null
  setActiveRule: (rule: string | null) => void
}

function parseMarkdown(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function RulesContent({ activeCategory, activeRule, setActiveRule }: RulesContentProps) {
  const category = categoriesData.find(c => c.id === activeCategory)
  
  useEffect(() => {
    if (activeRule) {
      const element = document.getElementById(`rule-${activeRule}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeRule])
  
  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Selecione uma categoria</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 px-6 py-10 lg:px-12 lg:py-12">
        {/* Category Title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
          {category.name}
        </h1>

        {/* Rules List */}
        <div className="space-y-16 max-w-3xl">
          {category.rules.map((rule) => (
            <article 
              key={rule.id} 
              id={`rule-${rule.id}`}
              className="scroll-mt-24"
            >
              {/* Rule Title */}
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                {rule.title}
              </h2>

              {/* Rule Blocks */}
              <div className="space-y-4">
                {rule.blocks.map((block, blockIndex) => {
                  const config = blockConfig[block.type]
                  const Icon = config.icon
                  
                  return (
                    <div
                      key={blockIndex}
                      className={cn(
                        "border-l-4 rounded-r-lg p-5",
                        config.borderColor,
                        config.bgColor
                      )}
                    >
                      {/* Block Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={cn("h-4 w-4", config.labelColor)} />
                        <span className={cn("text-xs font-bold tracking-wider", config.labelColor)}>
                          {config.label}
                        </span>
                      </div>
                      
                      {/* Block Content */}
                      <p className="text-[15px] text-muted-foreground leading-relaxed">
                        {parseMarkdown(block.content)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Right Sidebar - Quick Navigation */}
      <aside className="hidden xl:block w-64 shrink-0 border-l border-border">
        <div className="sticky top-0 p-6 max-h-screen overflow-y-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Nesta página
          </p>
          <nav className="space-y-1">
            {category.rules.map((rule) => (
              <button
                key={rule.id}
                onClick={() => setActiveRule(rule.id)}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                  "hover:text-foreground",
                  activeRule === rule.id 
                    ? "text-primary font-medium" 
                    : "text-muted-foreground"
                )}
              >
                {rule.title}
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}
