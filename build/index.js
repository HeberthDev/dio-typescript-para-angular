"use strict";
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "false";
let idade = 30;
let altura = 1.78;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "Heberth",
    cidade: "rj",
    idade: 30,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidade: 5,
};
//Arrays - Determina os tipos ignorando a orgem
let dados = ["felipe", "ana", "adriana"];
let dados2 = ["felipe", "ana", "adriana"];
let infos = ["felipe", 30];
//Tuplas - determina os tipos obrigatoriamente na mesma ordem passada
let boleto = ["agua", 215, 51616656];
//Arrays métodos
dados.pop();
//Datas
let aniversario = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
