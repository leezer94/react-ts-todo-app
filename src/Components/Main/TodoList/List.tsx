const List = () => {
  return (
    <li data-name-id={undefined} className='menu-list-item d-flex items-center py-2'>
      <span className='w-100 pl-2 menu-name'>{undefined}</span>
      <button
        type='button'
        className='bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button'
        onClick={undefined}
      >
        완료
      </button>
      <button
        type='button'
        className='bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button'
        onClick={undefined}
      >
        수정
      </button>
      <button
        type='button'
        className='bg-gray-50 text-gray-500 text-sm menu-remove-button'
        onClick={undefined}
      >
        삭제
      </button>
    </li>
  );
};

export default List;
