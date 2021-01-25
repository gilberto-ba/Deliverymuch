<img src="https://github.com/gilberto-ba/Deliverymuch/blob/master/src/assets/img/logo_pokeapi.png?raw=true" width="200" height="80" alt="Pokemon">

# Deliverymuch
<h3>Challenge</h3>

<strong>Descrição:</strong>
Projeto que apresente a listagem das gerações de games do
Pokémon e seus respectivos detalhes (nome, número de pokémons,
listagem de pokémons, etc).

<strong>Pré-requisitos</strong>
Para executar o projeto, será necessário instalar os seguintes programas:
- Node.js
- Angular CLI 11

<strong>Iniciando</strong>
- git clone https://github.com/gilberto-ba/Deliverymuch.git
- cd Deliverymuch

<strong>Dependências</strong>
O desenvolvimento de código em Angular CLI V.11, em geral, usufrui de um significativo conjunto de bibliotecas e frameworks. Esta reutilização é incorporada em um projeto por meio de dependências.

- Framework Primeng 
https://www.primefaces.org/primeng/
npm install primeng --save
npm install primeicons --save
npm install @angular/animations --save
npm install primeflex --save

Dentro de app.module.ts importar:
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

Dentro do angular.json:
    "styles": [
      "src/styles.css",
      "node_modules/primeng/resources/themes/saga-blue/theme.css",
      "node_modules/primeng/resources/primeng.min.css",
      "node_modules/primeicons/primeicons.css",
      "node_modules/primeflex/primeflex.css"
    ],

<strong>Licença</strong>
Não se aplica.