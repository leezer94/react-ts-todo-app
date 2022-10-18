import axios from 'axios';
import * as S from './TodoList.style';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getCurrentPath, UUID } from '../../../utils/index';
import {
  categoryState,
  currentListState,
  CurrentListTypes,
} from '../../../states/index';
import { useEffect } from 'react';
import { ENDPOINT } from '../../../constants/index';
import List from './List';

const TodoList = () => {
  const currentCategory = useRecoilValue<string>(categoryState);
  const [currentList, setCurrentList] =
    useRecoilState<CurrentListTypes[]>(currentListState);

  const path = getCurrentPath(currentCategory);
  useEffect(() => {
    if (path) {
      axios
        .get(ENDPOINT + '/todolist')
        .then((res) => {
          const lists: CurrentListTypes[] = res.data;
          const filteredList = lists.filter(
            (list) => list.category === currentCategory,
          );

          setCurrentList(filteredList);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [path, setCurrentList]);

  return (
    <S.Ul data-category-name={currentCategory}>
      {currentList.map(({ id, title }) => {
        return <List key={UUID()} id={id} title={title} />;
      })}
    </S.Ul>
  );
};

export default TodoList;
