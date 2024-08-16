import { UseCaseError } from 'src/core/errors/use-case-error';

export class UserDoesNotExists extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`user "${identifier}" does not exists`);
  }
}
