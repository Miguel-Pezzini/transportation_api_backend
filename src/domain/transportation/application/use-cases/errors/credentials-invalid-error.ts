import { UseCaseError } from 'src/core/errors/use-case-error';

export class CredentialsInvalidError extends Error implements UseCaseError {
  constructor() {
    super('Credentials are invalid');
  }
}
