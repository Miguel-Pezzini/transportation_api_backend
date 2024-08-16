import { InMemoryUsersRepository } from 'test/in-memory-repositories/in-memory-users-repository';
import { User } from '../../enterprise/entities/User';
import { RegisterAdminUseCase } from './register-user-use-case';

let inMemoryUsersRepository: InMemoryUsersRepository;
let sut: RegisterAdminUseCase;
describe('Register Use Case', () => {
  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    sut = new RegisterAdminUseCase(inMemoryUsersRepository);
  }),
    it('should be able to register a admin', async () => {
      const user = User.create({
        name: 'JohnDoe',
        cpf: '123456789',
        password: '123456',
        isAdmin: true,
      });

      await sut.execute(user);

      expect(inMemoryUsersRepository.items).toHaveLength(1);
    });

  it('should not be able to register a admin with the same cpf', async () => {
    const adminOne = User.create({
      name: 'JohnDoe',
      cpf: '123456789',
      password: '123456',
      isAdmin: true,
    });

    const adminTwo = User.create({
      name: 'JohnDoe',
      cpf: '123456789',
      password: '123456',
      isAdmin: true,
    });

    sut.execute(adminOne);
    const result = await sut.execute(adminTwo);

    expect(inMemoryUsersRepository.items).toHaveLength(1);
    expect(result.isLeft()).toBeTruthy();
  });
});
