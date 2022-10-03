import Inko from 'inko';
import { useRecoilValue } from 'recoil';
import { CategoryStateTypes, categoriesState } from '../states/index';

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
  const categories = useRecoilValue<CategoryStateTypes[]>(categoriesState);

  const current = categories.find(
    (category: CategoryTypes) => category.name === currentCategory,
  );

  return current?.path;
};

export const convertKoToEn = (input: string) => {
  const inko = new Inko();

  const ko2en = inko.ko2en(input);

  return '/' + ko2en;
};
