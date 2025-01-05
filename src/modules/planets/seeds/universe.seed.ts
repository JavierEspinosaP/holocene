import { Universe } from '../entities/universe.entity';
import { SolarSystem } from '../entities/solar-system.entity';
import { Planet } from '../entities/planet.entity';
import { PlanetType } from '../entities/planet-type.entity';

const generatePlanets = (systemId: number): Planet[] => {
  const planets: Planet[] = [];
  for (let i = 1; i <= 10; i++) {
    planets.push({
      id: (systemId - 1) * 10 + i,
      name: `Planeta ${i}`,
      position: i,
      population: 0,
      availableEnergy: 0,
      availableArea: 0,
      system: { id: systemId } as SolarSystem,
      type: { 
        id: i <= 3 ? 1 : i <= 6 ? 2 : 3 // Asigna tipos en orden: 1-3 rocosos, 4-6 gaseosos, 7-10 helados
      } as PlanetType,
      owner: null,
      buildings: [],
      resources: [],
      moons: [],
      fleets: [],
      defenses: []
    });
  }
  return planets;
};

const generateSystems = (universeId: number): SolarSystem[] => {
  const systems: SolarSystem[] = [];
  for (let i = 1; i <= 100; i++) {
    systems.push({
      id: i,
      position: i,
      name: `Sistema Solar ${i}`,
      universe: { id: universeId } as Universe,
      planets: generatePlanets(i)
    });
  }
  return systems;
};

export const Universes: Universe[] = [
  {
    id: 1,
    name: 'Holocene',
    speed: 1,
    systems: generateSystems(1)
  }
];
