import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ResourceType } from '../../resources/entities/resource-type.entity';

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.initiatedContracts)
  initiator: User;

  @ManyToOne(() => User, user => user.receivedContracts)
  receiver: User;

  @Column()
  type: 'resource' | 'fleet' | 'defense';

  @ManyToOne(() => ResourceType, resourceType => resourceType.contracts)
  resourceType: ResourceType;

  @Column('json')
  terms: {
    quantity?: number,
    frequency?: number,
    duration?: number,
    price?: number
  };

  @Column()
  status: 'pending' | 'active' | 'completed' | 'cancelled';

  @Column()
  startDate: Date;
  endDate: Date;
}
