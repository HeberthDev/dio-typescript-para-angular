//classes

// data modifiers
// public - Conseque acessar em qualquer lugar. Valor padrão.
// private - Só pode ser acessado dentro da própria classe.
// protected - Só é acessado na própria classe e quem herda as suas características (subclasses) (implements);
class Character {
    private name?: string;
    stregth: number;
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

const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();