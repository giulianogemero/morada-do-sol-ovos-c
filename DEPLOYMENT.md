# Como Tornar o App Morada do Sol Ovos Caipiras Público

Este guia explica como fazer deploy da sua aplicação para torná-la acessível publicamente na internet.

## Opções de Deploy

### 1. GitHub Pages (Gratuito)
A opção mais simples para hospedar aplicações estáticas.

**Passos:**
1. Faça push do código para um repositório GitHub público
2. Ative GitHub Pages nas configurações do repositório
3. Configure o build process no GitHub Actions

**Limitações:**
- Apenas aplicações estáticas (frontend only)
- Domínio será `username.github.io/repository-name`

### 2. Vercel (Recomendado - Gratuito)
Plataforma especializada em aplicações React/Vite com deploy automático.

**Passos:**
1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada commit

**Vantagens:**
- Deploy automático
- Domínio personalizado gratuito
- Performance otimizada
- SSL automático

### 3. Netlify (Gratuito)
Outra excelente opção para aplicações estáticas.

**Passos:**
1. Conecte ao GitHub
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

### 4. Railway/Render (Para aplicações completas)
Se você precisar de backend e banco de dados.

## Configuração para Deploy

### Preparando o Código

1. **Build de Produção**
```bash
npm run build
```

2. **Teste Local**
```bash
npm run preview
```

### Configurações Necessárias

1. **Vite Config** (já configurado)
O arquivo `vite.config.ts` já está configurado para produção.

2. **Package.json** (já configurado)
Os scripts de build já estão definidos.

3. **Environment Variables**
Se você adicionar integrações (pagamentos, emails), configure as variáveis:
- Crie arquivo `.env.production`
- Configure no painel do provedor (Vercel/Netlify)

## Configuração de Domínio Personalizado

### Para um domínio brasileiro (.com.br)
1. Registre o domínio em provedores como:
   - Registro.br
   - HostGator
   - Locaweb

2. Configure DNS apontando para seu provedor de deploy:
   - **Vercel**: Configure CNAME para `cname.vercel-dns.com`
   - **Netlify**: Configure CNAME para `yourapp.netlify.app`

### Sugestões de Domínio
- `moradovos.com.br`
- `ovoscaipiras.com.br`
- `moradosol.com.br`

## Próximos Passos Recomendados

### 1. Deploy Imediato (Vercel)
1. Crie conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure domínio personalizado

### 2. Funcionalidades para Produção
- **Pagamentos**: Integrar com Mercado Pago/PagSeguro
- **WhatsApp**: Botão para pedidos via WhatsApp
- **Analytics**: Google Analytics para acompanhar visitas
- **SEO**: Meta tags e sitemap para Google

### 3. Marketing Digital
- **Google My Business**: Para aparecer em buscas locais
- **Instagram/Facebook**: Links para o app
- **QR Code**: Para facilitar acesso dos clientes

## Comandos Úteis

```bash
# Build para produção
npm run build

# Testar build localmente
npm run preview

# Verificar se está tudo funcionando
npm run lint
```

## Considerações de Segurança

- Use HTTPS (automático na maioria dos provedores)
- Configure CSP headers se necessário
- Valide dados do formulário no frontend e backend
- Não exponha informações sensíveis no código

## Suporte

Se você encontrar problemas durante o deploy, verifique:
1. Logs de build no provedor
2. Console do navegador para erros
3. Configurações de ambiente

Sua aplicação está pronta para ser pública! O processo mais simples é começar com Vercel ou Netlify.