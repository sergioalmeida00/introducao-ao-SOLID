import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const resultUserAdmin = this.usersRepository.findById(user_id);

    if(!resultUserAdmin.admin && resultUserAdmin){
      throw new Error("Mensagem do erro");
    }
    return this.usersRepository.list();

  }
}

export { ListAllUsersUseCase };
