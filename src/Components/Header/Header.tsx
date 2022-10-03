import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  categoryState,
  categoriesState,
  CategoryStateTypes,
} from '../../states/index';

import { ENDPOINT } from '../../constants/index';
import { convertKoToEn, UUID } from '../../utils';
import CategoryTab from '../@commons/CategoryTab/CategoryTab';
import * as S from './Header.styled';
import createIcon from '../../styles/fontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const setCurrentCategory = useSetRecoilState<string>(categoryState);
  const categoryInputRef = useRef<HTMLInputElement>(null);
  const [categories, setCategories] =
    useRecoilState<CategoryStateTypes[]>(categoriesState);

  const addNewCategory = () => {
    const currentInput = categoryInputRef.current;

    if (currentInput) {
      const newCategory = {
        id: categories.length + 1,
        name: currentInput.value,
        path: convertKoToEn(currentInput.value),
      };

      axios
        .post(`${ENDPOINT}/categories`, newCategory)
        .then(() => {
          setCategories([...categories, newCategory]);
          currentInput.value = '';
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const fetchCategories = () => {
    axios.get(`${ENDPOINT}/categories`).then((res) => {
      setCategories(res.data);
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <S.Header>
      <S.HomeLink href='/'>
        <S.Title>📋 TODO LIST APP</S.Title>
      </S.HomeLink>
      <S.InputContainer>
        <S.Input
          ref={categoryInputRef}
          type='input'
          placeholder='카테고리를 입력해주세요.'
          maxLength={7}
        />
        <FontAwesomeIcon
          icon={createIcon('pen')}
          style={{ position: 'relative', cursor: 'pointer', right: 30 }}
          onClick={addNewCategory}
        />
      </S.InputContainer>
      <S.Nav>
        {categories.map(({ name }) => {
          return (
            <CategoryTab
              type='button'
              key={UUID()}
              title={name}
              onClick={() => setCurrentCategory(name)}
            />
          );
        })}
      </S.Nav>
    </S.Header>
  );
};

export default Header;
