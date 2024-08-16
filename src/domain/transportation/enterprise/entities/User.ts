import { Entity } from 'src/core/entities/entity';
import { UniqueEntityId } from './value-objects/UniqueEntityID';

interface UserProps {
  name: string;
  cpf: string;
  password: string;
  isAdmin: boolean;
  atualLocation?: string | null;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  set name(name) {
    this.props.name = name;
  }

  get cpf() {
    return this.props.cpf;
  }

  get atualLocation() {
    return this.props.atualLocation;
  }

  set cpf(cpf) {
    this.props.cpf = cpf;
  }

  get password() {
    return this.props.password;
  }

  set password(password) {
    this.props.password = password;
  }

  set isAdmin(isAdmin) {
    this.props.isAdmin = isAdmin;
  }

  static create(props: UserProps, id?: UniqueEntityId) {
    const admin = new User(props, id);
    return admin;
  }
}
