import { atom } from 'recoil';

export type CurrentListTypes = {
  id: number;
  title: string;
  completed: boolean;
};

export type CategoryStateTypes = {
  id: number;
  name: string;
  path: string;
};

export const categoryState = atom<string>({
  key: 'category',
  default: '청소',
});

export const currentListState = atom<CurrentListTypes[]>({
  key: 'currentList',
  default: [],
});

export const categoriesState = atom<CategoryStateTypes[]>({
  key: 'categories',
  default: [],
});
