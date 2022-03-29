import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const resultUser = this.usersRepository.findById(user_id);
    if(!resultUser){
      throw new Error("Mensagem do erro");
    }
    return resultUser;
  }
}

export { ShowUserProfileUseCase };
