import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const userId = this.usersRepository.findById(user_id);

    if(!userId){
      throw new Error("Mensagem do erro");
    }
    const resultUserAdmin = this.usersRepository.turnAdmin(userId);

    return resultUserAdmin;

  }
}

export { TurnUserAdminUseCase };
