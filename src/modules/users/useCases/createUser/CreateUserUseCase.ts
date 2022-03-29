import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    // Complete aqui

    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new Error("Mensagem do erro");
    }
    
    const resultUser = this.usersRepository.create({email,name});

    return resultUser;
  }
}

export { CreateUserUseCase };
