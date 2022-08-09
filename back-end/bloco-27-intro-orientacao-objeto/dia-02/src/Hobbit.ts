import MiddleEarthPeoples from "./middleEarthPeoples";
//subclasse que herda elementos do da superclasse middleearthpeople

interface Question {
  pergunta: string;
}
export default class Hobbit extends MiddleEarthPeoples implements Question {
    private stealth: string;
    private hairyFeet: string;
    private braveness: string;
    pergunta: string;

    constructor(name: string) {
        super(name)
        this.stealth = "Possuem, desde o início, a arte de desaparecer rápida e silenciosamente...";
        this.hairyFeet = "Seus pés eram cobertos por pêlos grossos e encaracolados, muito parecido com os que tinham na cabeça...";
        this.braveness = "Eram valentes quando em apuros e se fosse preciso ainda sabiam manejar armas."
        this.height = super.getRandomHeight(0.6, 1.20);
        this.languages.push("Hobbitish");
    }

}

// super você acessa o contrutor da superclasse