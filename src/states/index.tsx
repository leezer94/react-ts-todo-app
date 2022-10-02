import { atom } from 'recoil';

export type CurrentListTypes = {
  id: number;
  title: string;
  completed: boolean;
};

export const categoryState = atom<string>({
  key: 'category',
  default: '청소',
});

export const currentListState = atom<CurrentListTypes[]>({
  key: 'currentList',
  default: [],
});
