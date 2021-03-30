const fs = require('fs');  //função
const { DOMParser } = require('xmldom');
const R = require('ramda'); //função

const { isValid, elementsToArray, getGitHubProject } = require('./xmlfilter'); //função

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2018AndUpdatedAfter2019 = isValid(R.__, 2018, 2019); //CURRIED

const addedApps = elementsToArray(document.getElementsByTagName('application')) //SIDE-EFFECTS //HIGH
    .filter(isAddedAfter2018AndUpdatedAfter2019)        //SIDE-EFFECTS  //HIGH
    .map(getGitHubProject); // SIDE-EFFECTS  //HIGH

console.log(addedApps.join('\n')); //SIDE-EFFECTS
 
// (Exercício 1) Identifique todas as declarações de funções neste projeto
    // Adicione um comentário identificando-as -------> OK

// (Exercício 2) Identifique quais funções no projeto possuem efeitos colaterais (side-effects)
    // Adicione um comentário identificando-as -------->OK

// (Exercício 3) Identifique quais funções são curried
    // Adicione um comentário identificando-as ------> OK

// (Exercício 4) Identifique quais funções são high-order
    // Adicione um comentário identificando-as   ------> OK

// (Exercício 5) Crie um novo arquivo main2.js (baseado no main.js) que seleciona todos as apps adicionadas
// depois do ano 2000 e atualizadas em 2020. Ao imprimir as apps, além do nome, imprima
// a data que foi adicionada e a data da última atualização.