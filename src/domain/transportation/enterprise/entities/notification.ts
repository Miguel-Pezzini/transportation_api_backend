import { Entity } from 'src/core/entities/entity';
import { UniqueEntityId } from './value-objects/UniqueEntityID';

interface NotificationProps {
  recipientId: UniqueEntityId;
  shipmentId: UniqueEntityId;
  message: string;
  createdAt: Date;
}

export class Notification extends Entity<NotificationProps> {
  get shipmentId() {
    return this.props.shipmentId;
  }
  get recipientId() {
    return this.props.recipientId;
  }
  get message() {
    return this.props.message;
  }
  set message(message) {
    this.props.message = message;
  }
  static create(props: NotificationProps, id?: UniqueEntityId) {
    const notification = new Notification(props, id);

    return notification;
  }
}
