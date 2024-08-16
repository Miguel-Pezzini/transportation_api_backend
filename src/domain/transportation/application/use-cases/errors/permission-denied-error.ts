import { UseCaseError } from 'src/core/errors/use-case-error';

export class PermissionDeniedError extends Error implements UseCaseError {
  constructor() {
    super('Permisson denied');
  }
}
