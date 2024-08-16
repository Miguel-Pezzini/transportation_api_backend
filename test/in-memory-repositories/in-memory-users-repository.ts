import { UserRepository } from '../../src/domain/transportation/application/repositories/userRepository';
import { User } from '../../src/domain/transportation/enterprise/entities/User';

export class InMemoryUsersRepository implements UserRepository {
  public items: User[] = [];
  async create(user: User) {
    this.items.push(user);
  }

  async findByCpf(cpf: string) {
    const user = this.items.find((item) => item.cpf == cpf);

    if (!user) {
      return null;
    }

    return user;
  }
  async delete(userId: string) {
    const index = this.items.findIndex((item) => item.id.toString() === userId);

    this.items.splice(index, 1);
  }
}
