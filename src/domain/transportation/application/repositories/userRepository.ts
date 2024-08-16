import { User } from '../../enterprise/entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByCpf(cpf: string): Promise<User | null>;
  abstract delete(id: string): Promise<void>;
}
