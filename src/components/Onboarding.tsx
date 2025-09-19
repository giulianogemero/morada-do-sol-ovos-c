import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { CustomerProfile } from '../App'
import { User, Phone, MapPin, Users, Egg } from '@phosphor-icons/react'

interface OnboardingProps {
  onComplete: (profile: CustomerProfile) => void
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    householdSize: '',
    weeklyConsumption: ''
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleComplete()
    }
  }

  const handleComplete = () => {
    const profile: CustomerProfile = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: {
        street: formData.street,
        number: formData.number,
        neighborhood: formData.neighborhood,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
      },
      householdSize: parseInt(formData.householdSize),
      weeklyConsumption: parseInt(formData.weeklyConsumption)
    }
    onComplete(profile)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone
      case 2:
        return formData.street && formData.number && formData.neighborhood && formData.city && formData.state && formData.zipCode
      case 3:
        return formData.householdSize && parseInt(formData.householdSize) > 0
      case 4:
        return formData.weeklyConsumption && parseInt(formData.weeklyConsumption) > 0
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            Morada do Sol
          </CardTitle>
          <CardDescription>
            Bem-vindo! Vamos personalizar sua experiência com nossos ovos caipiras.
          </CardDescription>
          <Progress value={progress} className="mt-4" />
          <p className="text-sm text-muted-foreground mt-2">
            Etapa {currentStep} de {totalSteps}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <User className="text-primary" />
                <h3 className="font-semibold">Informações Pessoais</h3>
              </div>
              
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-primary" />
                <h3 className="font-semibold">Endereço de Entrega</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                  <Label htmlFor="street">Rua</Label>
                  <Input
                    id="street"
                    value={formData.street}
                    onChange={(e) => handleInputChange('street', e.target.value)}
                    placeholder="Nome da rua"
                  />
                </div>
                <div>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    value={formData.number}
                    onChange={(e) => handleInputChange('number', e.target.value)}
                    placeholder="123"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  id="neighborhood"
                  value={formData.neighborhood}
                  onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                  placeholder="Nome do bairro"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Cidade"
                  />
                </div>
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    placeholder="SP"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  placeholder="00000-000"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-primary" />
                <h3 className="font-semibold">Informações da Casa</h3>
              </div>
              
              <div>
                <Label htmlFor="householdSize">Quantas pessoas moram na casa?</Label>
                <Input
                  id="householdSize"
                  type="number"
                  min="1"
                  value={formData.householdSize}
                  onChange={(e) => handleInputChange('householdSize', e.target.value)}
                  placeholder="Número de pessoas"
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Egg className="text-primary" />
                <h3 className="font-semibold">Consumo de Ovos</h3>
              </div>
              
              <div>
                <Label htmlFor="weeklyConsumption">Quantos ovos sua família consome por semana?</Label>
                <Input
                  id="weeklyConsumption"
                  type="number"
                  min="1"
                  value={formData.weeklyConsumption}
                  onChange={(e) => handleInputChange('weeklyConsumption', e.target.value)}
                  placeholder="Número de ovos por semana"
                />
              </div>
              
              <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                <p className="font-medium mb-1">💡 Dica:</p>
                <p>Uma pessoa consome em média 3-5 ovos por semana. Para uma família de 4 pessoas, isso seria entre 12-20 ovos semanais.</p>
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-4">
            {currentStep > 1 && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="flex-1"
              >
                Voltar
              </Button>
            )}
            
            <Button 
              onClick={handleNext}
              disabled={!isStepValid()}
              className="flex-1"
            >
              {currentStep === totalSteps ? 'Finalizar' : 'Próximo'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}