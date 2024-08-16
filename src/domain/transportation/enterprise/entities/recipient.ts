import { Entity } from 'src/core/entities/entity';
import { UniqueEntityId } from './value-objects/UniqueEntityID';

interface RecipientProps {
  name: string;
  address: string;
  phone: string;
}

export class Recipient extends Entity<RecipientProps> {
  get name() {
    return this.props.name;
  }

  get address() {
    return this.props.address;
  }

  get phone() {
    return this.props.phone;
  }
  static create(props: RecipientProps, id?: UniqueEntityId) {
    const recipient = new Recipient(props, id);

    return recipient;
  }
}
