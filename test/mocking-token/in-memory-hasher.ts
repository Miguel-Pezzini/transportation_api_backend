import { Hasher } from 'src/core/encryptation/hasher';

export class InMemoryHasher implements Hasher {
  async hash(password: string): Promise<string> {
    const passwordArrayHashed = password.split('');
    const passwordReverseHashed = passwordArrayHashed.reverse();
    const passwordHashed = await passwordReverseHashed.join('');

    return passwordHashed;
  }
  async compare(password: string, passwordHashed: string): Promise<boolean> {
    const passwordArrayHashed = passwordHashed.split('');
    const passwordReverseHashed = passwordArrayHashed.reverse();
    const passwordUnhashed = await passwordReverseHashed.join('');

    if (passwordUnhashed !== password) {
      return false;
    }

    return true;
  }
}
