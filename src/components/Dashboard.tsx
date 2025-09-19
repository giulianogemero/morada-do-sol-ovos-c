import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CustomerProfile, EggPlan } from '../App'
import { Calendar, TrendUp, Heart, Leaf, Truck, Users } from '@phosphor-icons/react'

interface DashboardProps {
  customerProfile: CustomerProfile
  activePlan: EggPlan | null
  onPlanChange: () => void
}

export function Dashboard({ customerProfile, activePlan, onPlanChange }: DashboardProps) {
  const getNextDeliveryDate = () => {
    const now = new Date()
    const dayOfWeek = now.getDay()
    const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek
    const nextMonday = new Date(now)
    nextMonday.setDate(now.getDate() + daysUntilMonday)
    return nextMonday.toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const weeklyRecommendation = customerProfile.householdSize * 4

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Olá, {customerProfile.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground">Bem-vindo de volta ao seu painel de ovos caipiras</p>
        </div>
        {!activePlan && (
          <Button onClick={onPlanChange} size="lg">
            Escolher Plano
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próxima Entrega</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {getNextDeliveryDate()}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {activePlan ? `${activePlan.eggCount} ovos caipiras` : 'Nenhum plano ativo'}
            </p>
            {activePlan && (
              <Badge variant="secondary" className="mt-2">
                Entrega {activePlan.frequency === 'weekly' ? 'semanal' : 'quinzenal'}
              </Badge>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consumo Semanal</CardTitle>
            <TrendUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {customerProfile.weeklyConsumption} ovos
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Para {customerProfile.householdSize} {customerProfile.householdSize === 1 ? 'pessoa' : 'pessoas'}
            </p>
            <div className="mt-2">
              {customerProfile.weeklyConsumption < weeklyRecommendation ? (
                <p className="text-xs text-amber-600">
                  💡 Considerando aumentar para {weeklyRecommendation} ovos/semana?
                </p>
              ) : (
                <p className="text-xs text-green-600">
                  ✅ Consumo ideal para sua família
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investimento Mensal</CardTitle>
            <TrendUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent-foreground">
              {activePlan ? (
                `R$ ${(activePlan.eggCount * activePlan.pricePerEgg * (activePlan.frequency === 'weekly' ? 4 : 2)).toFixed(2)}`
              ) : (
                'R$ 0,00'
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {activePlan ? (
                `R$ ${activePlan.pricePerEgg.toFixed(2)} por ovo`
              ) : (
                'Selecione um plano'
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Benefícios dos Ovos Caipiras
            </CardTitle>
            <CardDescription>
              Por que escolher nossos ovos faz a diferença
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-accent-foreground">🥚 Nutrição Superior</h4>
                <p className="text-sm text-muted-foreground">
                  3x mais ômega-3, mais vitamina E e carotenoides que ovos convencionais
                </p>
              </div>
              <div>
                <h4 className="font-medium text-accent-foreground">🌱 Livre de Antibióticos</h4>
                <p className="text-sm text-muted-foreground">
                  Galinhas criadas naturalmente, sem uso de hormônios ou antibióticos
                </p>
              </div>
              <div>
                <h4 className="font-medium text-accent-foreground">🐓 Bem-estar Animal</h4>
                <p className="text-sm text-muted-foreground">
                  Galinhas com acesso livre ao pasto, vida natural e sem estresse
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-500" />
              Caipira vs. Industrial
            </CardTitle>
            <CardDescription>
              Entenda a diferença que você está fazendo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-green-600">Ovos Caipiras</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• Galinhas livres no pasto</li>
                    <li>• Alimentação natural</li>
                    <li>• Gema mais alaranjada</li>
                    <li>• Rico em nutrientes</li>
                  </ul>
                </div>
                <div className="flex-1 ml-4">
                  <h4 className="font-medium text-gray-600">Ovos Industriais</h4>
                  <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                    <li>• Galinhas confinadas</li>
                    <li>• Ração industrializada</li>
                    <li>• Gema mais pálida</li>
                    <li>• Menor valor nutricional</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}