import IPeoples from "./IPeople";

// superclasse, que tem as caracteristicas que os outors elementos vão ter
export default class MiddleEarthPeoples implements IPeoples {
  public _name: string;
  public height: number;
  protected _languages: string[];

  constructor(name: string) {
      this._name = name
      this.height = parseFloat((Math.random() * (2.1 - 0.6) + 0.6).toFixed(2));
      this._languages = ["Westron"]
  }

  get name(): string {
      return this._name;
  }

  get languages(): string[] {
      return this._languages;
  }

  protected getRandomHeight(min: number, max: number): number {
      const random = (Math.random() * (max - min) + min).toFixed(2);
      return parseFloat(random)
  }

  public printName(name: string): void {
      console.log(name);
  }
}

// protected permite apenas que a subclasse tenha acesso