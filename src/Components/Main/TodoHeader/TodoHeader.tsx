import { useRecoilValue } from 'recoil';
import * as S from './TodoHeader.style';
import { categoryState } from '../../../states/index';

const TodoHeader = () => {
  const currentCategory = useRecoilValue<string>(categoryState);

  return (
    <S.Header>
      <S.Title>{currentCategory} 리스트</S.Title>
      <S.Span>총 0 개</S.Span>
    </S.Header>
  );
};

export default TodoHeader;
