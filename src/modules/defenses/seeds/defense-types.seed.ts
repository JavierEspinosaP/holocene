import { DefenseType } from '../entities/defense-type.entity';

export const DefenseTypes: Partial<DefenseType>[] = [
  {
    name: 'Láser pequeño',
    baseAttack: 50,
    baseDefense: 100,
    baseRange: 1,
    cost: {
      metal: 1000,
      crystal: 500,
      deuterium: 0,
      energy: 50
    },
    researchRequirementId: 1
  },
  {
    name: 'Láser grande',
    baseAttack: 150,
    baseDefense: 250,
    baseRange: 2,
    cost: {
      metal: 5000,
      crystal: 3000,
      deuterium: 0,
      energy: 150
    },
    researchRequirementId: 2
  },
  {
    name: 'Cañón Gauss',
    baseAttack: 500,
    baseDefense: 300,
    baseRange: 3,
    cost: {
      metal: 10000,
      crystal: 8000,
      deuterium: 1000,
      energy: 500
    },
    researchRequirementId: 3
  },
  {
    name: 'Cañón iónico',
    baseAttack: 300,
    baseDefense: 500,
    baseRange: 4,
    cost: {
      metal: 15000,
      crystal: 12000,
      deuterium: 2000,
      energy: 800
    },
    researchRequirementId: 4
  },
  {
    name: 'Láser de plasma',
    baseAttack: 800,
    baseDefense: 600,
    baseRange: 5,
    cost: {
      metal: 30000,
      crystal: 25000,
      deuterium: 5000,
      energy: 1500
    },
    researchRequirementId: 5
  }
];
