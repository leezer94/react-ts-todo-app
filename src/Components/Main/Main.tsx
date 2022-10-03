import * as S from './Main.style';
import TodoForm from './TodoForm/TodoForm';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoList/TodoList';

const Main = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </S.Wrapper>
    </S.Main>
  );
};

export default Main;
