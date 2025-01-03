import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { ResourceType } from './resource-type.entity';

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

  @Column('json')
  terms: {
    resourceType?: ResourceType,
    quantity?: number,
    frequency?: number,
    duration?: number,
    price?: number
  };

  @Column()
  status: 'pending' | 'active' | 'completed' | 'cancelled';

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;
}
