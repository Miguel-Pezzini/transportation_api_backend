export abstract class Hasher {
  abstract hash(password: string): Promise<string>;
  abstract compare(password: string, passwordHashed: string): Promise<boolean>;
}
