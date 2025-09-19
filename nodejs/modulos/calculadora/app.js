//const funcoesMatematicas = require('./funcoes_matematicas');

import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("Soma: " + somar(5, 5));
console.log("Subtração: " + subtrair(5, 3));
console.log("Multiplicação: " + multiplicar(5, 3));
console.log("Divisão: " + dividir(5, 1));

console.log("Sua idade é: " + calculadora_idade.idade(2008));