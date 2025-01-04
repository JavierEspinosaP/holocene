import { Research } from '../entities/research.entity';

export const ResearchTypes: Partial<Research>[] = [
  {
    name: 'Tecnología de energía',
    description: 'Aumenta la eficiencia de las plantas de energía',
    costs: [
      { metal: 0, crystal: 800, deuterium: 400, energy: 0 },
      { metal: 0, crystal: 1600, deuterium: 800, energy: 0 },
      { metal: 0, crystal: 3200, deuterium: 1600, energy: 0 },
      { metal: 0, crystal: 6400, deuterium: 3200, energy: 0 },
      { metal: 0, crystal: 12800, deuterium: 6400, energy: 0 }
    ],
    benefits: [
      { production: 5 },
      { production: 10 },
      { production: 20 },
      { production: 40 },
      { production: 80 }
    ]
  },
  {
    name: 'Tecnología láser',
    description: 'Mejora los sistemas de armamento láser',
    costs: [
      { metal: 200, crystal: 100, deuterium: 0, energy: 0 },
      { metal: 400, crystal: 200, deuterium: 0, energy: 0 },
      { metal: 800, crystal: 400, deuterium: 0, energy: 0 },
      { metal: 1600, crystal: 800, deuterium: 0, energy: 0 },
      { metal: 3200, crystal: 1600, deuterium: 0, energy: 0 }
    ],
    benefits: [
      { attack: 5 },
      { attack: 10 },
      { attack: 20 },
      { attack: 40 },
      { attack: 80 }
    ]
  },
  {
    name: 'Tecnología iónica',
    description: 'Mejora los sistemas de armamento iónico',
    costs: [
      { metal: 1000, crystal: 300, deuterium: 100, energy: 0 },
      { metal: 2000, crystal: 600, deuterium: 200, energy: 0 },
      { metal: 4000, crystal: 1200, deuterium: 400, energy: 0 },
      { metal: 8000, crystal: 2400, deuterium: 800, energy: 0 },
      { metal: 16000, crystal: 4800, deuterium: 1600, energy: 0 }
    ],
    benefits: [
      { attack: 10 },
      { attack: 20 },
      { attack: 40 },
      { attack: 80 },
      { attack: 160 }
    ]
  },
  {
    name: 'Tecnología de hiperespacio',
    description: 'Permite viajes más rápidos y eficientes',
    costs: [
      { metal: 0, crystal: 4000, deuterium: 2000, energy: 0 },
      { metal: 0, crystal: 8000, deuterium: 4000, energy: 0 },
      { metal: 0, crystal: 16000, deuterium: 8000, energy: 0 },
      { metal: 0, crystal: 32000, deuterium: 16000, energy: 0 },
      { metal: 0, crystal: 64000, deuterium: 32000, energy: 0 }
    ],
    benefits: [
      { speed: 10 },
      { speed: 20 },
      { speed: 40 },
      { speed: 80 },
      { speed: 160 }
    ]
  },
  {
    name: 'Tecnología de plasma',
    description: 'Mejora los sistemas de armamento de plasma',
    costs: [
      { metal: 2000, crystal: 4000, deuterium: 1000, energy: 0 },
      { metal: 4000, crystal: 8000, deuterium: 2000, energy: 0 },
      { metal: 8000, crystal: 16000, deuterium: 4000, energy: 0 },
      { metal: 16000, crystal: 32000, deuterium: 8000, energy: 0 },
      { metal: 32000, crystal: 64000, deuterium: 16000, energy: 0 }
    ],
    benefits: [
      { attack: 20 },
      { attack: 40 },
      { attack: 80 },
      { attack: 160 },
      { attack: 320 }
    ]
  }
];
