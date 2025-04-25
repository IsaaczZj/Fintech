![image](https://github.com/user-attachments/assets/e41c5f07-9f4d-4245-9e3f-7375d9d58b9c)


# Fintech Dashboard

Este é um projeto de dashboard financeiro (Fintech) desenvolvido como parte do curso da Origamid. Ele exibe dados de vendas consumidos de uma API.

## Funcionalidades

*   Visualização de resumo de vendas (total, recebido, processando).
*   Gráfico de vendas ao longo do tempo.
*   Seleção de período de datas (início e fim).
*   Botões para seleção rápida de meses.
*   Listagem de vendas individuais.
*   Visualização de detalhes de uma venda específica.
*   Design responsivo.

## Tecnologias Utilizadas

*   **React:** Biblioteca principal para construção da interface.
*   **TypeScript:** Superset do JavaScript para tipagem estática.
*   **Vite:** Ferramenta de build rápida.
*   **React Router:** Para gerenciamento de rotas (navegação entre páginas).
*   **Recharts:** Biblioteca para criação de gráficos.
*   **Day.js:** Biblioteca para manipulação e formatação de datas.
*   **CSS:** Estilização (com variáveis CSS e aninhamento básico).

## API Utilizada

Este projeto consome a API de vendas fornecida pelo curso da **Origamid**, disponível no endpoint: `https://data.origamid.dev/vendas/`.

*   **Listagem de Vendas:** `https://data.origamid.dev/vendas/?inicio=YYYY-MM-DD&final=YYYY-MM-DD`
*   **Venda Individual:** `https://data.origamid.dev/vendas/{ID_DA_VENDA}`

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    cd fintech
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
4.  Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

## Estrutura do Projeto

*   `src/`: Contém todo o código fonte da aplicação.
    *   `Components/`: Componentes reutilizáveis da interface (botões, gráficos, inputs, etc.).
    *   `Context/`: Context API para gerenciamento do estado global (dados das vendas, período).
    *   `Hooks/`: Hooks customizados (ex: `useFetch`).
    *   `Pages/`: Componentes que representam as páginas da aplicação (Resumo, Vendas, Venda).
    *   `assets/`: Arquivos estáticos como SVGs e ícones.
    *   `App.tsx`: Componente principal que configura as rotas.
    *   `main.tsx`: Ponto de entrada da aplicação React.
    *   `Style.css`: Arquivo principal de estilos CSS.
*   `public/`: Arquivos públicos.
*   `index.html`: Arquivo HTML principal.
*   `vite.config.ts`: Configuração do Vite.
*   `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json`: Configurações do TypeScript.
*   `package.json`: Definições do projeto e dependências.
*   `eslint.config.js`: Configuração do ESLint.

---
