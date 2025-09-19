import React, { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Onboarding } from './components/Onboarding'
import { Dashboard } from './components/Dashboard'
import { EggPlans } from './components/EggPlans'
import { FounderProfile } from './components/FounderProfile'
import { Navigation } from './components/Navigation'

export type CustomerProfile = {
  name: string
  email: string
  phone: string
  address: {
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
  householdSize: number
  weeklyConsumption: number
}

export type EggPlan = {
  eggCount: 12 | 24 | 36 | 48
  frequency: 'weekly' | 'biweekly'
  pricePerEgg: number
}

function App() {
  const [customerProfile, setCustomerProfile, deleteCustomerProfile] = useKV<CustomerProfile | null>('customerProfile', null)
  const [activePlan, setActivePlan, deleteActivePlan] = useKV<EggPlan | null>('activePlan', null)
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'plans' | 'founder'>('dashboard')

  const isOnboarded = customerProfile !== null

  if (!isOnboarded) {
    return <Onboarding onComplete={setCustomerProfile} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        customerName={customerProfile!.name}
      />
      
      <main className="container mx-auto px-4 py-6">
        {currentPage === 'dashboard' && (
          <Dashboard 
            customerProfile={customerProfile!}
            activePlan={activePlan || null}
            onPlanChange={() => setCurrentPage('plans')}
          />
        )}
        
        {currentPage === 'plans' && (
          <EggPlans 
            activePlan={activePlan || null}
            onPlanSelect={setActivePlan}
            onBackToDashboard={() => setCurrentPage('dashboard')}
          />
        )}
        
        {currentPage === 'founder' && <FounderProfile />}
      </main>
    </div>
  )
}

export default App