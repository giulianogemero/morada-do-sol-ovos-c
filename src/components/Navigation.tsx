import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { House, Egg, User } from '@phosphor-icons/react'

interface NavigationProps {
  currentPage: 'dashboard' | 'plans' | 'founder'
  onPageChange: (page: 'dashboard' | 'plans' | 'founder') => void
  customerName: string
}

export function Navigation({ currentPage, onPageChange, customerName }: NavigationProps) {
  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-primary">
              Morada do Sol
            </h1>
            
            <div className="flex items-center gap-1">
              <Button
                variant={currentPage === 'dashboard' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange('dashboard')}
                className="flex items-center gap-2"
              >
                <House size={16} />
                Início
              </Button>
              
              <Button
                variant={currentPage === 'plans' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange('plans')}
                className="flex items-center gap-2"
              >
                <Egg size={16} />
                Planos
              </Button>
              
              <Button
                variant={currentPage === 'founder' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onPageChange('founder')}
                className="flex items-center gap-2"
              >
                <User size={16} />
                Fundador
              </Button>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Olá, {customerName.split(' ')[0]}! 👋
          </div>
        </div>
      </div>
    </nav>
  )
}