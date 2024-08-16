import { Either, left, right } from 'src/core/either';
import { UserAlredyExistsError } from './errors/admin-alredy-exists-error';
import { UserRepository } from '../repositories/userRepository';
import { User } from '../../enterprise/entities/User';

export interface RegisterAdminUseCaseRequest {
  name: string;
  cpf: string;
  password: string;
  isAdmin: boolean;
}

type RegisterAdminUseCaseResponse = Either<
  UserAlredyExistsError,
  {
    user: User;
  }
>;
export class RegisterAdminUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    cpf,
    password,
    name,
    isAdmin,
  }: RegisterAdminUseCaseRequest): Promise<RegisterAdminUseCaseResponse> {
    const userWithSameCpf = await this.userRepository.findByCpf(cpf);

    if (userWithSameCpf) {
      return left(new UserAlredyExistsError(cpf));
    }

    const user = User.create({ name, cpf, password, isAdmin });

    await this.userRepository.create(user);

    return right({ user });
  }
}
