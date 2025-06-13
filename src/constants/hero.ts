import { Stat } from '../types';
import { APP_CONFIG } from '../config';

export const HERO_STATS: Stat[] = [
  { 
    number: APP_CONFIG.business.totalProducts, 
    label: 'Productos' 
  },
  { 
    number: APP_CONFIG.business.happyCustomers, 
    label: 'Clientes satisfechos' 
  },
  { 
    number: APP_CONFIG.business.satisfactionRate, 
    label: 'Tasa de satisfacción' 
  }
];