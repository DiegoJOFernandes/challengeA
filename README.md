# challengeA
Software automation challenge A

<div justify-content="space-between" align-items="center">
    <img src="https://seekicon.com/free-icon-download/cypress_1.svg" width="50" alt= "Cypress"/>
    <img src="https://seekicon.com/free-icon-download/javascript_3.svg" width="50" alt="Javascript"/>
</div>

## Configuração

1. Após clonar este repositório, execute o comando no terminal:
```
npm i
```
2. Para executar os testes em modo headless:
```
npm run headless
```
3. Para executar os testes no modo interativo com a interace gráfica do cypress:
```
npm run e2e
```
## Estrutura

O projeto de automação desktop possui a seguinte estrutura:

- **_fixtures_** - Armazenamos dados que vão ser utilizados em nossos testes ex.: .json, .yml, .txt, .jgp. Os arquivos de fixture ficam localizados na pasta cypress/fixtures por padrão. [_mais sobre..._](https://docs.cypress.io/api/commands/fixture#Syntax)
- **_e2e_** - Contém todos os arquivos de teste _.feature_, e os _steps_.
- **_hooks_** - Contém todos os arquivos de teste _.feature_, e os _steps_.
- **_support_** - Esta pasta contém commands.js. É possível personalizar comandos e chama-los em qualquer linha de código das pages objects.
- **_cypress.config.js_** - É usado para salvar diferentes configurações relacionadas ao Cypress, por exemplo. URL base, tempos limite de execução, etc. O comportamento padrão do Cypress pode ser modificado fornecendo parametros de configuração. [_mais sobre..._](https://docs.cypress.io/guides/references/configuration#cypress-json).

Para entender melhor como um projeto de automação cypress é estruturado, consulte a [documentação oficial](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure).


````
qa-amercado-site/
    ├──cypress/
    |   ├──fixtures/
    |   ├──e2e/
    |   |   ├──hooks/
    |   |   ├──nameFeature
    |   |   |    └──steps.js
    |   |   └──nameFeature.feature/    
    |   └──support/
    |       └──pages/
    |           └──namePageFeature/
    |               ├──elements.js
    |               └──index.js
    ├──cypress.config.js
    └──mobile.config.js
````
## Fontes e plugins

- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)

## Cenários

| Register                                     |
| -------------------------------------------- |
| Usuário preenche formulário de cadastro      |
