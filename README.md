# 📝 Todo List - Aplicação de Gerenciamento de Tarefas

Uma aplicação moderna de lista de tarefas (Todo List) construída com Next.js 15, React, TypeScript e CSS Modules. Este projeto demonstra as melhores práticas de desenvolvimento web moderno, incluindo testes automatizados, linting, formatação de código e CI/CD.

## 🌐 Aplicação em Produção

**🔗 Acesse a aplicação:** [https://toodo-list-test-1.vercel.app/](https://toodo-list-test-1.vercel.app/)

A aplicação está hospedada na Vercel e é atualizada automaticamente a cada push para a branch `main`.

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas**: Crie novas tarefas com descrição e status
- ✅ **Gerenciar Status**: Marque tarefas como concluídas ou não concluídas
- ✅ **Excluir Tarefas**: Remova tarefas da lista
- ✅ **Contador de Tarefas**: Visualize o total de tarefas cadastradas
- ✅ **Interface Responsiva**: Design moderno e adaptável a diferentes tamanhos de tela
- ✅ **Server-Side Rendering**: Carregamento inicial otimizado com Next.js App Router

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.5.9** - Framework React com App Router
- **React 18.2.0** - Biblioteca para construção de interfaces
- **TypeScript 5.3.3** - Tipagem estática para JavaScript
- **CSS Modules** - Estilização modular e escopada

### Testes e Qualidade de Código
- **Jest 29.7.0** - Framework de testes
- **Testing Library** - Utilitários para testes de componentes React
- **ESLint 9.39.2** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

### DevOps
- **GitHub Actions** - CI/CD automatizado
- **Vercel** - Hospedagem e deploy automático

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 20.x ou superior
- **npm** ou **yarn** ou **pnpm**

## 🚀 Como Executar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/Mateusrevilo/toodo-list-test.git
cd toodo-list-test
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### 4. Build para produção

```bash
npm run build
npm run start
```

## 🧪 Executando Testes

### Executar todos os testes

```bash
npm test
# ou
yarn test
# ou
pnpm test
```

### Executar testes em modo watch

```bash
npm test -- --watch
```

### Executar testes em modo CI

```bash
npm run test:ci
```

## 🔍 Verificação de Código

### Linting

```bash
npm run lint
```

### Formatação (Prettier)

```bash
# Verificar formatação
npx prettier . --check

# Corrigir formatação automaticamente
npx prettier . --write
```

## 📁 Estrutura do Projeto

```
toodo-list-test/
├── app/                          # App Router do Next.js
│   ├── components/              # Componentes React
│   │   ├── FormTask/            # Formulário de adicionar tarefa
│   │   ├── TaskItem/            # Item individual de tarefa
│   │   ├── TaskList/            # Lista de tarefas
│   │   └── TodoApp.tsx          # Componente principal
│   ├── hooks/                    # Custom hooks
│   │   └── useContador.ts       # Hook para contar tarefas
│   ├── types/                    # Definições de tipos TypeScript
│   │   └── Tarefa.ts            # Tipo da entidade Tarefa
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globais
├── pages/                        # Pages Router (legado)
├── __tests__/                    # Testes adicionais
├── .github/                      # Configurações do GitHub
│   └── workflows/               # GitHub Actions
│       └── main.yml             # Pipeline CI/CD
├── public/                       # Arquivos estáticos
├── jest.config.js               # Configuração do Jest
├── jest.setup.js                # Setup dos testes
├── eslint.config.mjs           # Configuração do ESLint
├── tsconfig.json                # Configuração do TypeScript
└── package.json                # Dependências do projeto
```

## 🏗️ Arquitetura

### Componentes Principais

1. **TodoApp** (`app/components/TodoApp.tsx`)
   - Componente principal que gerencia o estado das tarefas
   - Integra FormTask e TaskList
   - Utiliza o hook `useContadorDeTarefas` para contar tarefas

2. **FormTask** (`app/components/FormTask/`)
   - Formulário para adicionar novas tarefas
   - Permite definir descrição e status inicial

3. **TaskList** (`app/components/TaskList/`)
   - Renderiza a lista de tarefas
   - Gerencia a exclusão de tarefas

4. **TaskItem** (`app/components/TaskItem/`)
   - Componente individual para cada tarefa
   - Exibe descrição e status

### Hooks Customizados

- **useContadorDeTarefas**: Hook que conta o total de tarefas usando `useMemo` para otimização

### Tipos TypeScript

```typescript
type Tarefa = {
  _id?: number;
  task: string;
  status: "concluida" | "não concluida";
};
```

## 🔄 CI/CD Pipeline

O projeto utiliza GitHub Actions para automação de CI/CD:

### Workflow de Build e Testes

1. **Build**: Compila o projeto Next.js
2. **Tests**: Executa linting, formatação e testes
3. **Deploy**: Faz deploy automático para Vercel (apenas se o projeto estiver vinculado)

### Triggers

- Push para branch `main`
- Mudanças em arquivos em `app/`, `src/`, `components/` ou `.github/workflows/`
- Execução manual via `workflow_dispatch`

## 🎨 Estilização

O projeto utiliza **CSS Modules** para estilização, garantindo:

- Escopo local de estilos
- Sem conflitos de nomes de classes
- Melhor organização do código
- Suporte a TypeScript

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm test` | Executa testes |
| `npm run test:ci` | Executa testes em modo CI |
| `npm run lint` | Verifica problemas de linting |

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é privado e de uso pessoal.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando Next.js e React

---

**🔗 Links Úteis:**

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React](https://react.dev)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Documentação Vercel](https://vercel.com/docs)
