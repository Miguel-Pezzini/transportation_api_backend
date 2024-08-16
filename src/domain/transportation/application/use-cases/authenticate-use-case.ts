import { Either, left, right } from 'src/core/either';
import { CredentialsInvalidError } from './errors/credentials-invalid-error';
import { Hasher } from 'src/core/encryptation/hasher';
import { UserRepository } from '../repositories/userRepository';
import { User } from '../../enterprise/entities/User';
import { PermissionDeniedError } from './errors/permission-denied-error';

export interface AuthenticateUserRequest {
  cpf: string;
  password: string;
}

type AuthenticateUserResponse = Either<
  CredentialsInvalidError | PermissionDeniedError,
  { user: User }
>;

export class AuthenticateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private hasher: Hasher,
  ) {}
  async execute({
    cpf,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const user = await this.userRepository.findByCpf(cpf);

    if (!user) {
      return left(new CredentialsInvalidError());
    }

    const passwordHashed = await this.hasher.hash(password);

    const isPasswordRight = await this.hasher.compare(password, passwordHashed);

    if (!isPasswordRight) {
      return left(new CredentialsInvalidError());
    }

    return right({ user });
  }
}
