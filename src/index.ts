//classes

// data modifiers
// public - Conseque acessar em qualquer lugar. Valor padrão.
// private - Só pode ser acessado dentro da própria classe.
// protected - Só é acessado na própria classe e quem herda as suas características (subclasses) (extends);
class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints: number;

    constructor(
        name: string, 
        stregth: number, 
        skill: number,
        magicPoints: number,
    ){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
console.log(p1);
p1.attack();