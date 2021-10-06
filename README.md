# Automation Practice Cypress

Olá, seja bem-vindo!! Esse é um projeto de estudo de automação de testes end-to-end com Cypress e Cucumber para o e-commerce de testes http://automationpractice.com. Escrito em JavaScript e Gherkin (para definição de cenários no padrão BDD), arquitetura foi baseada no design pattern Page Objects Model.

Nesse projeto foi implementado o esquema de cenário de pesquisa de um produto específico e validações do carrinho.

## Pré-requisitos

Para executar esse projeto é necessário:

- git
- Node.js
- NPM

## Instalação das dependências de desenvolvimento

Uma vez que todas as dependências já estão listadas no arquivo `package.json`, basta executar o comando `npm install` na raiz do projeto.

## Execução do projeto

`npm test` - executa o Cypress em modo headless;

`npm run cy:open`- executa o modo interativo do Cypress;

`npm run lint`- executa a análise estática de código do ESLint e lista as inconsistências;

`npm run list:fix`- executa a análise estática de código do ESLint e corrige as inconsistências.

## Integração contínua

Foi implementada a integração contínua com GitHub Actions no projeto. O arquivo de configuração do CI é o `.github/workflows/ci.yml`. Em todo push ou pull_request no branch `master` o pipeline é executado. Da forma como foi configurado, o job `eslint` é executado como pré-condição dos testes e, caso execute sem falhas, são executados os testes end-to-end.

Sobre os jobs:

`eslint` - executa a ferramenta de análise estática de código ESLint (npm run lint). Caso algum erro seja encontrado, o build quebra e já retorna erro;

`post-login-tests` - executa os testes end-to-end (npm test).
___

Se você tem alguma dúvida ou sugestão, entre em contato! Vamos bater um papo ☕

Feito com 💜 por Bruno Quintanilha.