import { UseCaseError } from 'src/core/errors/use-case-error';

export class UserAlredyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`Admin "${identifier}" alredy exists`);
  }
}
