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

  const current = getCurrentPath(currentCategory);

  useEffect(() => {
    if (current) {
      axios
        .get(ENDPOINT + current)
        .then((res) => {
          const list: CurrentListTypes[] = res.data;
          setCurrentList(list);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [current, setCurrentList]);

  return (
    <S.Ul data-category-name={currentCategory}>
      {currentList.map(({ id, title }) => {
        return <List key={UUID()} id={id} title={title} path={current} />;
      })}
    </S.Ul>
  );
};

export default TodoList;
