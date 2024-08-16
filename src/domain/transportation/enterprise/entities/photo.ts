import { Entity } from 'src/core/entities/entity';
import { UniqueEntityId } from './value-objects/UniqueEntityID';

interface PhotoProps {
  shipmentId: UniqueEntityId;
  url: string;
  createdAt: Date;
}
export class Photo extends Entity<PhotoProps> {
  static create(props: PhotoProps, id?: UniqueEntityId) {
    const photo = new Photo(props, id);

    return photo;
  }
}
