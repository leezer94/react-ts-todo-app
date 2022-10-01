import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header className='my-4'>
      <S.HomeLink href='/' className='text-black'>
        <S.Title className='text-center font-bold'>📋 TODO LIST APP</S.Title>
      </S.HomeLink>
      <S.Nav className='d-flex justify-center flex-wrap'>
        <S.CategoryTab>집안일</S.CategoryTab>
        <S.CategoryTab>청소</S.CategoryTab>
        <S.CategoryTab>머시기</S.CategoryTab>
        <S.CategoryTab>조시기</S.CategoryTab>
        <S.CategoryTab>카시기</S.CategoryTab>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
