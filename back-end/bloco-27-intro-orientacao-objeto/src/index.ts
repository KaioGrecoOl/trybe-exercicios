
class User { 
  private name: string;

  constructor() {
    console.log('chamou o contrutor');
    this.name = ''
  }

   public getUser = () => {
    return 'Users'
  }

  public setName = (name:string) => {
    if (name === 'Luiz')
    this.name = name;
  }
}

const user: User = new User();
// user.setName('Jose');

const user2: User = new User();
// com o private, não é possível acessar a propriedade name conforme abaixo
// user2.name = 'Marcos'
