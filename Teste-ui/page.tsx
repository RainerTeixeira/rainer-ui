/**
 * Página de Teste dos Componentes UI
 *
 * Demonstração visual de todos os componentes adicionados
 * ao rainer-ui baseados no site rainersoft.com.br
 *
 * @module Teste-ui
 * @author Rainer Teixeira
 * @version 1.0.0
 */

'use client';

import { useState } from 'react';
import { 
  // Componentes existentes - import do index principal
  Button, 
  ThemeToggle,
} from '@rainersoft/ui';
import { Avatar, AvatarFallback, AvatarImage } from '../src/components/ui/avatar';

// Imports diretos dos novos componentes
import { Input } from '../src/components/ui/input';
import { Textarea } from '../src/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../src/components/ui/card';
import { Badge } from '../src/components/ui/badge';
import { Progress } from '../src/components/ui/progress';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '../src/components/ui/accordion';

export default function TestUI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [progress, setProgress] = useState(65);

  return (
    <div className="min-h-screen bg-background dark:bg-black text-foreground dark:text-cyan-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Rainer UI Component Library
          </h1>
          <p className="text-lg text-muted-foreground dark:text-cyan-400/80">
            Componentes baseados no site rainersoft.com.br
          </p>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Form Components */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">📝 Componentes de Formulário</h2>
          
          <Card variant="glass" className="p-6">
            <CardHeader>
              <CardTitle>Formulário de Contato</CardTitle>
              <CardDescription>
                Teste dos componentes Input e Textarea
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                label="Nome completo"
                placeholder="Seu nome completo"
                required
                helperText="Campo obrigatório para identificação"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
              
              <Input
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                required
                helperText="Campo obrigatório. Será usado para resposta ao seu contato"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
              
              <Textarea
                label="Mensagem"
                placeholder="Descreva seu projeto, dúvida ou proposta..."
                required
                helperText="Campo obrigatório. Descreva seu projeto, dúvida ou proposta"
                maxLength={500}
                showCount
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Enviar Mensagem
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Badge Components */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">🏷️ Componentes Badge</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Variantes de Badge</CardTitle>
              <CardDescription>
                Diferentes estilos de indicadores e tags
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="cyberpunk">Cyberpunk</Badge>
                <Badge variant="neon">Neon</Badge>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Progress Components */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">📊 Componentes Progress</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Barras de Progresso</CardTitle>
              <CardDescription>
                Indicadores de andamento com diferentes cores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Default</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Success</span>
                  <span>85%</span>
                </div>
                <Progress value={85} color="success" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Warning</span>
                  <span>45%</span>
                </div>
                <Progress value={45} color="warning" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cyberpunk</span>
                  <span>92%</span>
                </div>
                <Progress value={92} color="cyberpunk" />
              </div>
              
              <Button 
                onClick={() => setProgress(prev => prev >= 100 ? 0 : prev + 10)}
                className="w-full"
              >
                Atualizar Progress: {progress}%
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Accordion Components */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">📋 Componentes Accordion</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>FAQ - Perguntas Frequentes</CardTitle>
              <CardDescription>
                Conteúdo expansível baseado no FAQ do site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Qual sua experiência comprovada com React e Next.js?
                  </AccordionTrigger>
                  <AccordionContent>
                    Desenvolvi múltiplos projetos profissionais com React 19 e Next.js 15, 
                    incluindo este portfólio, sistemas de autenticação completos, 
                    dashboards interativos e aplicações enterprise com performance excepcional.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Como você garante a qualidade do código?
                  </AccordionTrigger>
                  <AccordionContent>
                    Utilizo TypeScript para type safety, Jest para testes automatizados 
                    com 100% de cobertura, ESLint e Prettier para código consistente, 
                    e seguindo as melhores práticas de clean code e SOLID.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Você tem experiência com backend e bancos de dados?
                  </AccordionTrigger>
                  <AccordionContent>
                    Sim, domino Node.js, NestJS, Prisma ORM, PostgreSQL, MongoDB e Redis. 
                    Desenvolvo APIs RESTful completas com autenticação JWT, 
                    validações robustas e arquitetura escalável.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Como você lida com performance e otimização?
                  </AccordionTrigger>
                  <AccordionContent>
                    Foco em Lighthouse scores 95+, lazy loading, code splitting, 
                    otimização de imagens com WebP, cache strategies, 
                    e monitoramento contínuo de performance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Card Variants */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">🎴 Variantes de Card</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card variant="default">
              <CardHeader>
                <CardTitle className="text-lg">Default</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card padrão com fundo sólido
                </p>
              </CardContent>
            </Card>
            
            <Card variant="outline">
              <CardHeader>
                <CardTitle className="text-lg">Outline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card com borda destacada
                </p>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-lg">Elevated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card com sombra elevada
                </p>
              </CardContent>
            </Card>
            
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-lg">Glass</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card com efeito glassmorphism
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Avatar Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold dark:text-cyan-200">👤 Componentes Avatar</h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/rainerteixeira.png" alt="Rainer Teixeira" />
                  <AvatarFallback>RT</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Rainer Teixeira</h3>
                  <p className="text-sm text-muted-foreground">Desenvolvedor Full-Stack</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-border dark:border-cyan-400/20">
          <p className="text-muted-foreground dark:text-cyan-400/60">
            © 2026 Rainer Soft - Component Library Demo
          </p>
        </footer>
      </div>
    </div>
  );
}
