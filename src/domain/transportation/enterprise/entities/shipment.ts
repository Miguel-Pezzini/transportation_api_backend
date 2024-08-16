import { Entity } from 'src/core/entities/entity';
import { UniqueEntityId } from './value-objects/UniqueEntityID';

enum State {
  'waiting',
  'widhdrawal',
  'arrived',
  'returned',
}
interface ShipmentProps {
  delivererId?: UniqueEntityId | null;
  recipientId: UniqueEntityId;
  description: string;
  state: State;
  createdAt: Date;
  withDrawDate?: Date | null;
  arrivedDate?: Date | null;
  returnedDate?: Date | null;
  address: string;
}
export class Shipment extends Entity<ShipmentProps> {
  static create(props: ShipmentProps, id?: UniqueEntityId) {
    const shipment = new Shipment(props, id);

    return shipment;
  }
}
