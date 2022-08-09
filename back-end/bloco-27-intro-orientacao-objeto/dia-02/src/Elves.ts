import MiddleEarthPeoples from "./middleEarthPeoples";

export default class Elves extends MiddleEarthPeoples {
    private imortality: string;
    private art: string;
    private wisdom: string;
    private combat: string;

    constructor(name: string) {
        super(name)
        this.height = this.getRandomHeight(0.6, 1.20);
        this.languages.push("Hobbitish");
        this.imortality = 'Imortais'
        this.art = 'Art nórdica'
        this.wisdom = 'Conhecem a luz e o fogo'
        this.combat = 'São resistentes'
    }
}

const char = new Elves("Calaça");
console.log("char: ", char)