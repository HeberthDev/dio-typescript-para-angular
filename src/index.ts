// Funções
function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function callToPhone(phone: number | string): number | string {
    return phone;
}

async function getDatabase(id:number): Promise<string> {
    return "felipe";
}

let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello("Heberth"));
console.log(callToPhone(21995053415));