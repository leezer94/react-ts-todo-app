import * as S from './TodoForm.style';

export const TodoForm = () => {
  return (
    <S.Form>
      <S.FormContainer className='d-flex w-100'>
        <label htmlFor='menu-name' className='input-label' hidden>
          할일 추가 하기
        </label>
        <S.Input
          type='text'
          name='menuName'
          className='input-field'
          placeholder='추가할 할 일을 적어주세요.'
          autoComplete='off'
        />
        <S.Button
          data-category-name='espresso'
          type='button'
          name='submit'
          className='input-submit bg-green-600 ml-2'
        >
          확인
        </S.Button>
      </S.FormContainer>
    </S.Form>
  );
};

export default TodoForm;
