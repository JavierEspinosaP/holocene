import { BuildingType } from '../entities/building-type.entity';

export const BuildingTypes: Partial<BuildingType>[] = [
  {
    name: 'Mina de metal',
    description: 'Extrae metal de los asteroides cercanos',
    constructionCosts: [
      { metal: 60, crystal: 15, deuterium: 0 },
      { metal: 90, crystal: 22, deuterium: 0 },
      { metal: 135, crystal: 33, deuterium: 0 },
      { metal: 202, crystal: 50, deuterium: 0 },
      { metal: 303, crystal: 75, deuterium: 0 }
    ],
    benefits: [
      { production: 30 },
      { production: 45 },
      { production: 68 },
      { production: 102 },
      { production: 153 }
    ]
  },
  {
    name: 'Mina de cristal',
    description: 'Extrae cristales de las formaciones geológicas',
    constructionCosts: [
      { metal: 48, crystal: 24, deuterium: 0 },
      { metal: 72, crystal: 36, deuterium: 0 },
      { metal: 108, crystal: 54, deuterium: 0 },
      { metal: 162, crystal: 81, deuterium: 0 },
      { metal: 243, crystal: 121, deuterium: 0 }
    ],
    benefits: [
      { production: 20 },
      { production: 30 },
      { production: 45 },
      { production: 68 },
      { production: 102 }
    ]
  },
  {
    name: 'Sintetizador de deuterio',
    description: 'Extrae y procesa deuterio de los océanos planetarios',
    constructionCosts: [
      { metal: 225, crystal: 75, deuterium: 0 },
      { metal: 337, crystal: 112, deuterium: 0 },
      { metal: 506, crystal: 168, deuterium: 0 },
      { metal: 759, crystal: 253, deuterium: 0 },
      { metal: 1138, crystal: 379, deuterium: 0 }
    ],
    benefits: [
      { production: 10 },
      { production: 15 },
      { production: 23 },
      { production: 34 },
      { production: 51 }
    ]
  },
  {
    name: 'Planta de energía solar',
    description: 'Genera energía a partir de la luz solar',
    constructionCosts: [
      { metal: 75, crystal: 30, deuterium: 0 },
      { metal: 112, crystal: 45, deuterium: 0 },
      { metal: 168, crystal: 68, deuterium: 0 },
      { metal: 252, crystal: 102, deuterium: 0 },
      { metal: 378, crystal: 153, deuterium: 0 }
    ],
    benefits: [
      { energy: 20 },
      { energy: 30 },
      { energy: 45 },
      { energy: 68 },
      { energy: 102 }
    ]
  },
  {
    name: 'Almacén de recursos',
    description: 'Almacena recursos adicionales',
    constructionCosts: [
      { metal: 1000, crystal: 0, deuterium: 0 },
      { metal: 2000, crystal: 0, deuterium: 0 },
      { metal: 4000, crystal: 0, deuterium: 0 },
      { metal: 8000, crystal: 0, deuterium: 0 },
      { metal: 16000, crystal: 0, deuterium: 0 }
    ],
    benefits: [
      { storage: 10000 },
      { storage: 20000 },
      { storage: 40000 },
      { storage: 80000 },
      { storage: 160000 }
    ]
  }
];
