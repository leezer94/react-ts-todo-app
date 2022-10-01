import * as S from './Main.style';
import TodoForm from './TodoForm/TodoForm';
import TodoHeader from './TodoHeader/TodoHeader';
import TodoList from './TodoList/TodoList';

const Main = () => {
  return (
    <S.Main className='main-container mt-10 d-flex justify-center'>
      <S.Wrapper className='wrapper bg-white p-10'>
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </S.Wrapper>
    </S.Main>
  );
};

export default Main;
