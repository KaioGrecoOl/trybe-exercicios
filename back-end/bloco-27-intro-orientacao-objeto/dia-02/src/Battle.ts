import Elves from "./Elves";
import Hobbit from "./Hobbit";

export default class Battle {
    private battlename: string
    private hobbit: Hobbit[] = []
    private elves: Elves[] = []

    constructor() {
        this.battlename = 'A última batalha'
    }

    public criarHobbits(numero: number) {

    }
}