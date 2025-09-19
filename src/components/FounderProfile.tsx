import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Medal, Leaf, Users } from '@phosphor-icons/react'

export function FounderProfile() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Conheça Nosso Fundador</h1>
        <p className="text-muted-foreground text-lg">
          Paixão pela avicultura e compromisso com a qualidade
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              História e Experiência
            </CardTitle>
            <CardDescription>
              Mais de uma década dedicada à criação de galinhas caipiras
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">14 Anos de Excelência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa jornada começou há mais de 14 anos com uma visão clara: produzir ovos da mais alta qualidade 
                através de métodos sustentáveis e respeitosos com o bem-estar animal. Durante todo esse tempo, 
                desenvolvemos uma metodologia única que combina tradição e inovação na criação de galinhas caipiras.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Metodologia Única</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa abordagem vai além da criação convencional. Desenvolvemos técnicas específicas que garantem 
                o máximo bem-estar das aves, resultando em ovos de qualidade superior. Cada aspecto da criação 
                é cuidadosamente planejado, desde a alimentação natural até o ambiente livre de estresse.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Compromisso com a Sustentabilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que a produção de alimentos deve estar em harmonia com o meio ambiente. Nossos 
                sistemas de criação são completamente orgânicos e sustentáveis, contribuindo para um futuro 
                mais saudável para todos.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Formação Acadêmica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">Graduação</Badge>
                <h4 className="font-semibold">Zootecnia</h4>
                <p className="text-sm text-muted-foreground">
                  Universidade Estadual de Londrina (UEL)
                </p>
              </div>
              
              <div>
                <Badge variant="secondary" className="mb-2">Mestrado</Badge>
                <h4 className="font-semibold">Desenvolvimento e Meio Ambiente</h4>
                <p className="text-sm text-muted-foreground">
                  Universidade de Araraquara (UNIARA)
                </p>
              </div>
              
              <div>
                <Badge variant="secondary" className="mb-2">Doutorado</Badge>
                <h4 className="font-semibold">Desenvolvimento e Meio Ambiente</h4>
                <p className="text-sm text-muted-foreground">
                  Universidade de Araraquara (UNIARA)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-primary" />
                Especialização
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Sistemas Orgânicos</h4>
                    <p className="text-sm text-muted-foreground">
                      Especialista em produção orgânica e sustentável
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Escola de Avicultores</h4>
                    <p className="text-sm text-muted-foreground">
                      Formação e consultoria para novos produtores
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Medal className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Eficiência Máxima</h4>
                    <p className="text-sm text-muted-foreground">
                      Busca constante pela excelência na produção
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nossa Missão</CardTitle>
          <CardDescription>
            O que nos move todos os dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <blockquote className="border-l-4 border-primary pl-4 italic text-lg text-muted-foreground">
            "Há mais de 14 anos venho pautando minhas ações na busca da máxima eficiência e resultado 
            com a produção de ovos em sistemas caipiras e orgânicos. Acredito que a qualidade do alimento 
            começa com o respeito ao animal e ao meio ambiente."
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">14+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Orgânico e Natural</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Paixão pela Qualidade</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}