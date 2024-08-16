import { Either, left, right } from 'src/core/either';
import { UserRepository } from '../repositories/userRepository';
import { UserDoesNotExists } from './errors/user-not-found-error';
import { User } from '../../enterprise/entities/User';

interface DeleteUserUseCaseRequest {
  user: User;
}

type DeleteUserCaseResponse = Either<
  UserDoesNotExists,
  {
    null;
  }
>;

export class DeleteUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    user,
  }: DeleteUserUseCaseRequest): Promise<DeleteUserCaseResponse> {
    const userFound = await this.usersRepository.findByCpf(user.cpf);

    if (!userFound) {
      return left(new UserDoesNotExists(user.cpf));
    }

    await this.usersRepository.delete(user.id.toString());

    return right({ null });
  }
}
