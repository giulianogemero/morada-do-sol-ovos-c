import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { EggPlan } from '../App'
import { ArrowLeft, Check, Egg } from '@phosphor-icons/react'

interface EggPlansProps {
  activePlan: EggPlan | null
  onPlanSelect: (plan: EggPlan) => void
  onBackToDashboard: () => void
}

const PLAN_OPTIONS = [
  { eggCount: 12 as const, name: 'Econômico', description: 'Ideal para 1-2 pessoas' },
  { eggCount: 24 as const, name: 'Familiar', description: 'Ideal para 3-4 pessoas' },
  { eggCount: 36 as const, name: 'Grande', description: 'Ideal para 5-6 pessoas' },
  { eggCount: 48 as const, name: 'Extra Grande', description: 'Ideal para famílias grandes' }
]

export function EggPlans({ activePlan, onPlanSelect, onBackToDashboard }: EggPlansProps) {
  const [selectedCount, setSelectedCount] = useState<12 | 24 | 36 | 48>(activePlan?.eggCount || 24)
  const [selectedFrequency, setSelectedFrequency] = useState<'weekly' | 'biweekly'>(activePlan?.frequency || 'weekly')
  
  const pricePerEgg = 1.00
  const totalPrice = selectedCount * pricePerEgg
  const monthlyPrice = selectedFrequency === 'weekly' ? totalPrice * 4 : totalPrice * 2

  const handleSelectPlan = () => {
    const plan: EggPlan = {
      eggCount: selectedCount,
      frequency: selectedFrequency,
      pricePerEgg
    }
    onPlanSelect(plan)
    onBackToDashboard()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBackToDashboard}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Escolha seu Plano</h1>
          <p className="text-muted-foreground">Ovos caipiras frescos entregues na sua porta</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quantidade de Ovos</CardTitle>
              <CardDescription>
                Escolha quantos ovos você quer receber por entrega
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {PLAN_OPTIONS.map((option) => (
                  <button
                    key={option.eggCount}
                    onClick={() => setSelectedCount(option.eggCount)}
                    className={`p-4 rounded-lg border text-left transition-all hover:border-primary ${
                      selectedCount === option.eggCount 
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold">{option.eggCount}</span>
                      {selectedCount === option.eggCount && (
                        <Check className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="text-sm font-medium">{option.name}</div>
                    <div className="text-xs text-muted-foreground">{option.description}</div>
                    <div className="text-sm font-medium text-accent-foreground mt-2">
                      R$ {(option.eggCount * pricePerEgg).toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequência de Entrega</CardTitle>
              <CardDescription>
                Todas as entregas acontecem nas segundas-feiras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedFrequency('weekly')}
                  className={`p-4 rounded-lg border text-left transition-all hover:border-primary ${
                    selectedFrequency === 'weekly' 
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Semanal</span>
                    {selectedFrequency === 'weekly' && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entrega toda segunda-feira
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    Mais popular
                  </Badge>
                </button>
                
                <button
                  onClick={() => setSelectedFrequency('biweekly')}
                  className={`p-4 rounded-lg border text-left transition-all hover:border-primary ${
                    selectedFrequency === 'biweekly' 
                      ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Quinzenal</span>
                    {selectedFrequency === 'biweekly' && (
                      <Check className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Entrega a cada duas semanas
                  </div>
                  <Badge variant="outline" className="mt-2">
                    Econômico
                  </Badge>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Egg className="h-5 w-5" />
                Resumo do Plano
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quantidade:</span>
                  <span className="font-medium">{selectedCount} ovos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequência:</span>
                  <span className="font-medium">
                    {selectedFrequency === 'weekly' ? 'Semanal' : 'Quinzenal'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Preço por ovo:</span>
                  <span className="font-medium">R$ {pricePerEgg.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Por entrega:</span>
                  <span className="text-lg font-bold text-primary">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Por mês:</span>
                  <span className="text-lg font-bold text-accent-foreground">
                    R$ {monthlyPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button onClick={handleSelectPlan} className="w-full" size="lg">
                {activePlan ? 'Atualizar Plano' : 'Escolher Este Plano'}
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                ✅ Ovos frescos garantidos<br />
                ✅ Entrega pontual às segundas<br />
                ✅ Cancele quando quiser
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}