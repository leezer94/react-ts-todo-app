import { useRecoilValue } from 'recoil';
import * as S from './TodoHeader.style';
import {
  categoryState,
  currentListState,
  CurrentListTypes,
} from '../../../states/index';

const TodoHeader = () => {
  const currentCategory = useRecoilValue<string>(categoryState);
  const currentList = useRecoilValue<CurrentListTypes[]>(currentListState);

  return (
    <S.Header>
      <S.Title>{currentCategory ? currentCategory : '예시'} 리스트</S.Title>
      <S.Span>총 {currentList.length} 개</S.Span>
    </S.Header>
  );
};

export default TodoHeader;
