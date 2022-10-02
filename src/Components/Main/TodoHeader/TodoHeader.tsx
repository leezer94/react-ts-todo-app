import { useRecoilValue } from 'recoil';
import * as S from './TodoHeader.style';
import { categoryState } from '../../../states/index';

const TodoHeader = () => {
  const currentCategory = useRecoilValue<string>(categoryState);

  return (
    <S.Header className='heading d-flex justify-between'>
      <S.Title id='category-title' className='mt-1'>
        {currentCategory} 리스트
      </S.Title>
      <S.Span className='mr-2 mt-4 menu-count'>총 0 개</S.Span>
    </S.Header>
  );
};

export default TodoHeader;
