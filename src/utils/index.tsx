import { CATEGORIES } from '../constants';

export const UUID = (): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export type CategoryTypes = {
  readonly name: string;
  readonly path: string;
};

export const getCurrentPath = (currentCategory: string) => {
  const current = CATEGORIES.find(
    (category: CategoryTypes) => category.name === currentCategory,
  );

  return current?.path;
};
