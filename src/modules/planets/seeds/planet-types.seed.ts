import { PlanetType } from '../entities/planet-type.entity';

export const PlanetTypes: PlanetType[] = [
  {
    id: 1,
    name: 'Terrestre',
    description: 'Planeta rocoso con condiciones habitables',
    resourceModifiers: {
      metal: 1.2,
      crystal: 1.0,
      deuterium: 0.8
    },
    habitability: {
      temperatureRange: [-50, 50],
      sizeRange: [200, 400],
      gravity: 1.0,
      atmosphere: 'Nitrógeno-Oxígeno'
    },
    specialFeatures: {
      energyProduction: 1.1,
      defenseBonus: 1.2
    }
  },
  {
    id: 2,
    name: 'Gaseoso',
    description: 'Planeta compuesto principalmente de gases',
    resourceModifiers: {
      metal: 0.8,
      crystal: 1.1,
      deuterium: 1.5
    },
    habitability: {
      temperatureRange: [-200, -100],
      sizeRange: [500, 800],
      gravity: 2.5,
      atmosphere: 'Hidrógeno-Helio'
    },
    specialFeatures: {
      energyProduction: 1.5
    }
  },
  {
    id: 3,
    name: 'Helado',
    description: 'Planeta con superficie congelada',
    resourceModifiers: {
      metal: 0.9,
      crystal: 1.3,
      deuterium: 1.2
    },
    habitability: {
      temperatureRange: [-150, -50],
      sizeRange: [100, 300],
      gravity: 0.8,
      atmosphere: 'Metano-Nitrógeno'
    },
    specialFeatures: {
      defenseBonus: 1.3
    }
  }
];
