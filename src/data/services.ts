import { SERVICES_URL } from './constants';

/**
 * Service categories shown on the homepage.
 *
 * These are high-level categories only — individual bookable services live
 * in GlossGenius (linked via `exploreUrl`). Do NOT list every service here.
 *
 * `icon` is a small key consumed by the Services component to pick a minimal
 * inline SVG. TODO: swap descriptors/copy for final client-approved wording.
 */
export type ServiceIcon = 'lashes' | 'brows' | 'skin' | 'pmu' | 'waxing';

export interface Service {
  id: string;
  name: string;
  descriptor: string;
  icon: ServiceIcon;
  exploreUrl: string;
}

export const services: Service[] = [
  {
    id: 'lashes',
    name: 'Lashes',
    descriptor: 'Extensions, lifts & tinting',
    icon: 'lashes',
    exploreUrl: SERVICES_URL,
  },
  {
    id: 'brows',
    name: 'Brows',
    descriptor: 'Shaping, tinting & lamination',
    icon: 'brows',
    exploreUrl: SERVICES_URL,
  },
  {
    id: 'skin',
    name: 'Skin',
    descriptor: 'Korean facials & custom treatments',
    icon: 'skin',
    exploreUrl: SERVICES_URL,
  },
  {
    id: 'permanent-beauty',
    name: 'Permanent Beauty',
    descriptor: 'Brows, eyeliner & lip blush',
    icon: 'pmu',
    exploreUrl: SERVICES_URL,
  },
  {
    id: 'waxing-beauty',
    name: 'Waxing + Beauty',
    descriptor: 'Body waxing, makeup & more',
    icon: 'waxing',
    exploreUrl: SERVICES_URL,
  },
];
