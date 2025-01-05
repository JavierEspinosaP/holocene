import { DataSource } from 'typeorm';
import { DefenseType } from '../../modules/defenses/entities/defense-type.entity';
import { DefenseTypes } from '../../modules/defenses/seeds/defense-types.seed';
import { ShipType } from '../../modules/ships/entities/ship-type.entity';
import { ShipTypes } from '../../modules/ships/seeds/ship-types.seed';
import { BuildingType } from '../../modules/buildings/entities/building-type.entity';
import { BuildingTypes } from '../../modules/buildings/seeds/building-types.seed';
import { Research } from '../../modules/research/entities/research.entity';
import { ResearchTypes } from '../../modules/research/seeds/research-types.seed';
import { ResourceType } from '../../modules/resources/entities/resource-type.entity';
import { ResourceTypes } from '../../modules/resources/seeds/resource-types.seed';
import { PlanetType } from '../../modules/planets/entities/planet-type.entity';
import { PlanetTypes } from '../../modules/planets/seeds/planet-types.seed';

export async function seedDatabase(dataSource: DataSource) {
  const planetTypeRepo = dataSource.getRepository(PlanetType);
  const defenseTypeRepo = dataSource.getRepository(DefenseType);
  const shipTypeRepo = dataSource.getRepository(ShipType);
  const buildingTypeRepo = dataSource.getRepository(BuildingType);
  const researchRepo = dataSource.getRepository(Research);
  const resourceTypeRepo = dataSource.getRepository(ResourceType);

  // Insert defense types
  await defenseTypeRepo.save(DefenseTypes);

  // Insert ship types
  await shipTypeRepo.save(ShipTypes);

  // Insert building types
  await buildingTypeRepo.save(BuildingTypes);

  // Insert research types
  await researchRepo.save(ResearchTypes);

  // Insert resource types
  await resourceTypeRepo.save(ResourceTypes);

  // Insert planet types
  await planetTypeRepo.save(PlanetTypes);

  console.log('Database seeded successfully!');
}
