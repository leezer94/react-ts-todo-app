import * as S from './CategoryTab.style';

interface Props {
  type: 'button' | 'submit' | 'reset';
  title?: string;
  onClick: () => void;
}
const CategoryTab = ({ type, title, onClick }: Props) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {title}
    </S.Button>
  );
};

export default CategoryTab;
