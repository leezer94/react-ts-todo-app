import { useSetRecoilState } from 'recoil';
import { categoryState } from '../../states/index';

import { CATEGORIES } from '../../constants/index';
import { UUID } from '../../utils';
import CategoryTab from '../@commons/CategoryTab/CategoryTab';
import * as S from './Header.styled';

const Header = () => {
  const setCurrentCategory = useSetRecoilState<string>(categoryState);

  return (
    <S.Header className='my-4'>
      <S.HomeLink href='/' className='text-black'>
        <S.Title className='text-center font-bold'>📋 TODO LIST APP</S.Title>
      </S.HomeLink>
      <S.Nav className='d-flex justify-center flex-wrap'>
        {CATEGORIES.map(({ name }) => {
          return (
            <CategoryTab
              type='button'
              key={UUID()}
              title={name}
              onClick={() => {
                setCurrentCategory(name);
              }}
            />
          );
        })}
      </S.Nav>
    </S.Header>
  );
};

export default Header;
