# 📝 AppTodo - Angular Todo Application

Uma aplicação moderna de lista de tarefas construída com Angular 14, featuring uma interface limpa e intuitiva para gerenciar suas tarefas diárias.

![Angular](https://img.shields.io/badge/Angular-14.0.0-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.2-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-styling-pink?style=flat-square&logo=sass)

## ✨ Recursos

- ✅ **Adicionar tarefas**: Interface simples para adicionar novas tarefas
- 🗑️ **Remover tarefas**: Função para deletar tarefas individuais ou todas de uma vez
- ✔️ **Marcar como concluída**: Sistema de checkbox para marcar tarefas como feitas
- 🎨 **Design moderno**: Interface responsiva e visualmente atraente
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- 🔄 **Estado reativo**: Gerenciamento de estado eficiente com Angular

## 🚀 Tecnologias Utilizadas

- **Framework**: Angular 14.0.0
- **Linguagem**: TypeScript 4.7.2
- **Estilização**: SCSS
- **Testes**: Jasmine + Karma
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── modules/
│   │   └── home/
│   │       ├── components/          # Componentes reutilizáveis
│   │       │   ├── header/
│   │       │   ├── todo-button-delete-all/
│   │       │   ├── todo-input-add-itens/
│   │       │   └── todo-list/
│   │       ├── model/               # Interfaces TypeScript
│   │       │   └── task-list.ts
│   │       └── pages/               # Páginas da aplicação
│   │           └── home/
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/                          # Recursos estáticos
│   ├── icons/
│   └── img/
└── environments/                    # Configurações de ambiente
```

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (versão 8 ou superior)
- **Angular CLI** (versão 14 ou superior)

```bash
# Verificar versões instaladas
node --version
npm --version
ng version
```

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd app-todo-angular
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute a aplicação
```bash
npm start
# ou
ng serve
```

A aplicação estará disponível em `http://localhost:4200/`

## 🏃‍♂️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run watch` | Build em modo watch para desenvolvimento |
| `npm test` | Execute os testes unitários |
| `ng lint` | Executa o linter do código |

## 🧪 Testes

### Testes Unitários
```bash
npm test
```
Executa os testes unitários via [Karma](https://karma-runner.github.io) com coverage report.

### Testes E2E
```bash
ng e2e
```
> **Nota**: Para usar testes E2E, primeiro instale um pacote que implemente capacidades de teste end-to-end.

## 🐳 Docker

### Executar com Docker
```bash
# Build da imagem
docker build -t app-todo-angular .

# Executar container
docker run -p 80:80 app-todo-angular
```

A aplicação estará disponível em `http://localhost`

## 🏗️ Build de Produção

```bash
npm run build
```

Os artefatos de build serão armazenados no diretório `dist/`. Use a flag `--prod` para um build de produção otimizado.

## 🎨 Estrutura de Componentes

### Header Component
- Exibe o título da aplicação
- Interface clean e moderna

### Todo Input Component
- Input para adicionar novas tarefas
- Validação de entrada

### Todo List Component
- Lista todas as tarefas
- Checkbox para marcar como concluída
- Botão para remover tarefas individuais

### Delete All Button Component
- Botão para remover todas as tarefas
- Confirmação antes da ação

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Para obter mais ajuda sobre o Angular CLI, use:
- `ng help`
- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Documentação oficial do Angular](https://angular.io/docs)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!**
