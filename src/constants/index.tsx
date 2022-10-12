import { UUID } from '../utils/index';
export type DefaultType = {
  readonly CATEGORY: { id: string; name: string; path: string };
  readonly LIST: {
    category: string;
    id: string;
    title: string;
    completed: boolean;
  };
};

export const ENDPOINT = 'http://localhost:4000' as const;

export const DEFUALT: DefaultType = {
  CATEGORY: {
    id: UUID(),
    name: '집안일',
    path: '/wlqdksdlf',
  },
  LIST: {
    category: '집안일',
    id: UUID(),
    title: '방청소 하기',
    completed: false,
  },
} as const;
