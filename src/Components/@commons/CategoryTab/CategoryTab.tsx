import * as S from './CategoryTab.style';
import axios from 'axios';
import { ENDPOINT } from '../../../constants/index';
import { CategoryStateTypes, categoriesState } from '../../../states/index';
import { useRecoilState } from 'recoil';

interface Props {
  type: 'button' | 'submit' | 'reset';
  category: CategoryStateTypes;
  onClick: () => void;
}

const CategoryTab = ({ type, category, onClick }: Props) => {
  const [categories, setCategories] =
    useRecoilState<CategoryStateTypes[]>(categoriesState);
  const { id, name } = category;

  const handleDeleteCategory = () => {
    axios.delete(`${ENDPOINT}/categories/${id}`).then(() => {
      const index = categories.findIndex((category) => category.id === id);

      const deleted = [
        ...categories.slice(0, index),
        ...categories.slice(index + 1),
      ];

      setCategories(deleted);
    });
  };

  return (
    <>
      <S.Button type={type} onClick={onClick}>
        {name}
        <S.Close onClick={handleDeleteCategory}>&times;</S.Close>
      </S.Button>
    </>
  );
};

export default CategoryTab;
