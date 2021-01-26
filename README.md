<img src="https://github.com/gilberto-ba/Deliverymuch/blob/master/src/assets/img/logo_pokeapi.png?raw=true" width="200" height="80" alt="Pokemon">

# Deliverymuch
<h3>Challenge</h3>

<strong>Descrição:</strong><br />
Projeto que apresente a listagem das gerações de games do
Pokémon e seus respectivos detalhes (nome, número de pokémons,
listagem de pokémons, etc).

<strong>Pré-requisitos</strong><br />
Para executar o projeto, será necessário instalar os seguintes programas:
- Node.js
- Npm
- Angular CLI 11

<strong>Iniciando</strong><br />
- git clone https://github.com/gilberto-ba/Deliverymuch.git
- cd Deliverymuch

<strong>Comando utilizado na criação do projeto</strong><br />
> ng new Deliverymuch --style=scss --routing

<strong>Dependências</strong><br />
O desenvolvimento de código em Angular CLI V.11, em geral, usufrui de um significativo conjunto de bibliotecas e frameworks. Esta reutilização é incorporada em um projeto por meio de dependências.

- Framework Primeng 
https://www.primefaces.org/primeng/<br />
> npm install primeng --save
> npm install primeicons --save
> npm install @angular/animations --save
> npm install primeflex --save
> npm install @angular/cdk --save

> Dentro de app.module.ts importar:
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

> Dentro do angular.json:
    "styles": [
      "src/styles.css",
      "node_modules/primeng/resources/themes/saga-blue/theme.css",
      "node_modules/primeng/resources/primeng.min.css",
      "node_modules/primeicons/primeicons.css",
      "node_modules/primeflex/primeflex.css"
    ],

<strong>Construído com</strong><br />    
Ainda foi utizado outras dependências para essa aplicação como:
- Sass (scss)
>

- routing
> 

<strong>Integração com API externa</strong><br />
Foi integrado ao projeto uma API externa publica do site https://pokeapi.co/

<strong>Executando os testes</strong><br />
Explicar como executar os testes automatizados para este sistema.

<strong>Build</strong><br />
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

<strong>Auto</strong><br />
<a href="http://www.impactodesigner.com.br/portfolio/" target="_blank">Gilberto Moral Lopes</a>

<strong>Licença</strong><br />
Não se aplica.