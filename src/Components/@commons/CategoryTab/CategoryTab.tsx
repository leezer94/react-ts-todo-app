import * as S from './CategoryTab.style';
import axios from 'axios';
import { ENDPOINT } from '../../../constants/index';
import {
  CategoryStateTypes,
  categoriesState,
  CurrentListTypes,
  currentListState,
  categoryState,
} from '../../../states/index';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface Props {
  type: 'button' | 'submit' | 'reset';
  category: CategoryStateTypes;
  onClick: () => void;
}

const CategoryTab = ({ type, category, onClick }: Props) => {
  const setCurrentCategory = useSetRecoilState<string>(categoryState);
  const [categories, setCategories] =
    useRecoilState<CategoryStateTypes[]>(categoriesState);
  const [currentList, setCurrentList] =
    useRecoilState<CurrentListTypes[]>(currentListState);

  const { id, name } = category;

  const handleDeleteCategoryTab = () => {
    axios.delete(`${ENDPOINT}/categories/${id}`).then(() => {
      const index = categories.findIndex((category) => category.id === id);
      const deleted = [
        ...categories.slice(0, index),
        ...categories.slice(index + 1),
      ];
      setCategories(deleted);
    });
  };

  const deleteAllCategoryItems = async () => {
    if (currentList.length === 0) {
      handleDeleteCategoryTab();
      return;
    }

    if (currentList[0].category !== category.name) {
      alert('카테고리 탭이 일치하지 않습니다.');
      return;
    }
    const len = currentList.length;

    let i = 0;

    while (i < len) {
      const targetId = currentList[i].id;

      await axios.delete(`${ENDPOINT}/todolist/${targetId}`);

      i++;
    }

    handleDeleteCategoryTab();
    setCurrentList([]);
    setCurrentCategory('');
  };

  return (
    <>
      <S.Button type={type} onClick={onClick}>
        {name}
        <S.Close onClick={deleteAllCategoryItems}>&times;</S.Close>
      </S.Button>
    </>
  );
};

export default CategoryTab;
