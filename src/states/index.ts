import { atom } from 'recoil';

export type CurrentListTypes = {
  category: string;
  id: string;
  title: string;
  completed: boolean;
};

export type CategoryStateTypes = {
  id: string;
  name: string;
  path: string;
};

export const categoryState = atom<string>({
  key: 'category',
  default: '',
});

export const currentListState = atom<CurrentListTypes[]>({
  key: 'currentList',
  default: [],
});

export const categoriesState = atom<CategoryStateTypes[]>({
  key: 'categories',
  default: [],
});
