import axios from 'axios';
import { useRef, useState, useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  categoryState,
  currentListState,
  CurrentListTypes,
} from '../../../states/index';

import { ENDPOINT } from '../../../constants/index';
import { getCurrentPath, UUID } from '../../../utils/index';

import * as S from './TodoForm.style';

export const TodoForm = () => {
  const currentCategory = useRecoilValue<string>(categoryState);
  const [currentList, setCurrentList] =
    useRecoilState<CurrentListTypes[]>(currentListState);
  const [title, setTitle] = useState<string>('');
  const path = getCurrentPath(currentCategory);
  const titleRef = useRef<HTMLInputElement>(null);

  const postNewTodo = useCallback(() => {
    if (path) {
      const newTodo: {
        category: string;
        id: string;
        title: string;
        completed: boolean;
      } = {
        category: currentCategory,
        id: UUID(),
        title,
        completed: false,
      };

      axios
        .post(`${ENDPOINT}/todolist`, newTodo)
        .then(() => setCurrentList([...currentList, newTodo]));

      if (titleRef.current) titleRef.current.value = '';
    }
  }, [path, currentList, setCurrentList, title]);

  const handleKeypressEvent = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    postNewTodo();
  };

  return (
    <S.Form onSubmit={handleKeypressEvent}>
      <S.FormContainer>
        <label htmlFor='menu-name' hidden>
          할일 추가 하기
        </label>
        <S.Input
          ref={titleRef}
          type='text'
          placeholder='추가할 할 일을 적어주세요.'
          autoComplete='off'
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Button
          data-category-name='espresso'
          type='button'
          name='submit'
          onClick={postNewTodo}
        >
          확인
        </S.Button>
      </S.FormContainer>
    </S.Form>
  );
};

export default TodoForm;
