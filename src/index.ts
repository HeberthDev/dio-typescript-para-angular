//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "false";
let idade: number = 30;
let altura: number = 1.78;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "Heberth",
    cidade: "rj",
    idade: 30,
}

type ProdutoLoja = {
    nome: string,
    preco: number,
    unidade: number,
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidade: 5,
}

//Arrays - Determina os tipos ignorando a orgem
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

let infos: (string | number)[] = ["felipe", 30];

//Tuplas - determina os tipos obrigatoriamente na mesma ordem passada
let boleto: [string, number, number] = ["agua", 215, 51616656];

//Arrays métodos
dados.pop();