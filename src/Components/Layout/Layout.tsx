import * as S from '../Layout/Layout.style';
import Header from '../Header/Header';
import Main from '../Main/Main';

export const TodoApp = () => {
  return (
    <S.Layout>
      <S.Container>
        <Header />
        <Main />
      </S.Container>
    </S.Layout>
  );
};
