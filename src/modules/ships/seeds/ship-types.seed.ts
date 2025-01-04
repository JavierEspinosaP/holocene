import { ShipType } from '../entities/ship-type.entity';

export const ShipTypes: Partial<ShipType>[] = [
  {
    name: 'Cazador ligero',
    baseAttack: 50,
    baseDefense: 25,
    baseSpeed: 12000,
    baseCapacity: 1000,
    baseFuelConsumption: 20,
    cost: {
      metal: 3000,
      crystal: 1000,
      deuterium: 0,
      energy: 100
    },
    researchRequirementId: 1
  },
  {
    name: 'Cazador pesado',
    baseAttack: 150,
    baseDefense: 75,
    baseSpeed: 8000,
    baseCapacity: 2000,
    baseFuelConsumption: 50,
    cost: {
      metal: 8000,
      crystal: 4000,
      deuterium: 0,
      energy: 300
    },
    researchRequirementId: 2
  },
  {
    name: 'Crucero',
    baseAttack: 400,
    baseDefense: 200,
    baseSpeed: 10000,
    baseCapacity: 5000,
    baseFuelConsumption: 100,
    cost: {
      metal: 20000,
      crystal: 15000,
      deuterium: 1000,
      energy: 800
    },
    researchRequirementId: 3
  },
  {
    name: 'Nave de batalla',
    baseAttack: 1000,
    baseDefense: 500,
    baseSpeed: 6000,
    baseCapacity: 10000,
    baseFuelConsumption: 300,
    cost: {
      metal: 50000,
      crystal: 30000,
      deuterium: 5000,
      energy: 1500
    },
    researchRequirementId: 4
  },
  {
    name: 'Destructor',
    baseAttack: 2000,
    baseDefense: 1000,
    baseSpeed: 4000,
    baseCapacity: 20000,
    baseFuelConsumption: 500,
    cost: {
      metal: 100000,
      crystal: 80000,
      deuterium: 10000,
      energy: 3000
    },
    researchRequirementId: 5
  }
];
