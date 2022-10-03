import axios from 'axios';
import { useRecoilState } from 'recoil';
import { CurrentListTypes } from '../../../states';
import { currentListState } from '../../../states/index';
import { ENDPOINT } from '../../../constants/index';

import * as S from './TodoList.style';

type Props = { id: number; title: string; path?: string };

const List = ({ id, title, path }: Props) => {
  const [currentList, setCurrentList] =
    useRecoilState<CurrentListTypes[]>(currentListState);
  const index = currentList.findIndex((list) => list.id === id);
  const currentTodo = currentList[index];
  const handleDelete = () => {
    axios.delete(ENDPOINT + path + `/${id}`).then(() => {
      const deleted = [
        ...currentList.slice(0, index),
        ...currentList.slice(index + 1),
      ];

      setCurrentList(deleted);
    });
  };

  const handleModify = () => {
    const newTodo = window.prompt('수정내용을 입력해 주세요.');

    if (newTodo === null || !newTodo) {
      window.alert('수정할 내용이 없습니다.');

      return;
    }

    axios.patch(ENDPOINT + path + `/${id}`, { title: newTodo }).then(() => {
      const modifiedTodo = {
        ...currentTodo,
        title: newTodo,
      };

      type ModifiedType = {
        id: number;
        title: string;
        completed: boolean;
      };

      const modified: ModifiedType[] = [
        ...currentList.slice(0, index),
        modifiedTodo,
        ...currentList.slice(index + 1),
      ];

      setCurrentList(modified);
    });
  };

  const handleComplete = () => {
    const { completed } = currentTodo;

    axios
      .patch(ENDPOINT + path + `/${id}`, { completed: !completed })
      .then(() => {
        const modifiedTodo = {
          ...currentTodo,
          completed: !completed,
        };

        const modified = [
          ...currentList.slice(0, index),
          modifiedTodo,
          ...currentList.slice(index + 1),
        ];

        setCurrentList(modified);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.List
      data-name-id={id}
      className='menu-list-item d-flex items-center py-2'
    >
      <S.Span className={currentTodo.completed ? 'sold-out' : undefined}>
        {title}
      </S.Span>
      <S.TaskButton type='button' onClick={handleComplete}>
        완료
      </S.TaskButton>
      <S.TaskButton type='button' onClick={handleModify}>
        수정
      </S.TaskButton>
      <S.DeleteButton type='button' onClick={handleDelete}>
        삭제
      </S.DeleteButton>
    </S.List>
  );
};

export default List;
