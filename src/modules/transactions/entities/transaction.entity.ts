import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ResourceType } from '../../resources/entities/resource-type.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.transactions)
  user: User;

  @Column()
  type: 'resource' | 'fleet' | 'defense' | 'credit';

  @Column('json')
  details: {
    resourceType?: ResourceType,
    quantity?: number,
    price?: number,
    fleetType?: string,
    defenseType?: string
  };

  @Column()
  status: 'pending' | 'completed' | 'cancelled';

  @Column()
  date: Date;

  @Column({ nullable: true })
  counterpartyId: number; // ID del otro usuario en la transacción
}
