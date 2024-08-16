import { InMemoryHasher } from 'test/mocking-token/in-memory-hasher';
import { User } from '../../enterprise/entities/User';
import { InMemoryUsersRepository } from 'test/in-memory-repositories/in-memory-users-repository';
import { AuthenticateUserUseCase } from './authenticate-use-case';

let sut: AuthenticateUserUseCase;
let inMemoryAdminRepository: InMemoryUsersRepository;
let inMemoryHasher: InMemoryHasher;
describe('Authenticate Use Case', () => {
  beforeAll(() => {
    inMemoryHasher = new InMemoryHasher();
    inMemoryAdminRepository = new InMemoryUsersRepository();
    sut = new AuthenticateUserUseCase(inMemoryAdminRepository, inMemoryHasher);
  });
  it('should be able to login into an account', async () => {
    const cpf = '123456789';
    const password = '123456';
    User.create({
      name: 'JohnDoe',
      cpf: cpf,
      password: password,
      isAdmin: true,
    });

    const result = await sut.execute({ cpf, password });

    expect(result.isRight).toBeTruthy();
  });

  it('should be able to login with wrong password', async () => {
    const cpf = '123456789';
    const fakePassword = '12345';
    const password = '123456';
    User.create({
      name: 'JohnDoe',
      cpf: cpf,
      password: fakePassword,
      isAdmin: true,
    });

    const result = await sut.execute({ cpf, password });

    expect(result.isLeft()).toBeTruthy();
  });
});
