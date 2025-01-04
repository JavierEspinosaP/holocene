import { ResourceType } from '../entities/resource-type.entity';

export const ResourceTypes: Partial<ResourceType>[] = [
  {
    name: 'Metal',
    description: 'Metal básico utilizado para construcciones y fabricaciones',
    baseValue: 1,
    isTradable: true
  },
  {
    name: 'Cristal',
    description: 'Cristales utilizados para componentes electrónicos y tecnologías avanzadas',  
    baseValue: 2,
    isTradable: true
  },
  {
    name: 'Deuterio',
    description: 'Combustible avanzado utilizado en naves y tecnologías de alto consumo energético',
    baseValue: 3,
    isTradable: true
  }
];
