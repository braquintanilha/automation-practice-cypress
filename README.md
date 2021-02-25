# AutomationPractice

Projeto de automação de testes funcionais end-to-end para e-commerce de testes http://automationpractice.com utilizando os frameworks Cypress e Cucumber. Escrito em JavaScript e Gherkin (para definição de cenários BDD) e estruturado no padrão Page Objects. Foi implementado o reporter Mochawesome que gera relatórios em .json e .html

Nesse projeto foi implementado o cenário de compra de um produto específico e validações do carrinho.

Pré-requisito:
NodeJS

Instalação de dependências:
npm install cypress --save-dev
npm install cypress-cucumber-preprocessor --save-dev
npm install cypress-xpath --save-dev
npm install mocha --save-dev
npm install mochawesome --save-dev
npm install mochawesome-merge --save-dev
npm install mochawesome-report-generator --save-dev

Comandos de execução do projeto:
npx cypress open - executa a interface gráfica do Cypress
npm run test - executa todos os testes em modo headless com geração de reports

Os reports são gerados no seguinte diretório:
*project/cypress/reports/mochareports
