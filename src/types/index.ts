export * from './product';
export * from './contact';
export * from './navigation';
export * from './ui';
export * from './validation';

export interface AppConfig {
  name: string;
  version: string;
  description: string;
}

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  name: string;
  id: string;
}