import * as S from './styles';

interface KeywordProps {
  reviewForms;
  setReviewForm;
}

const button = [false, false, false, false, false, false];

const Keyword: React.FC<KeywordProps> = ({ reviewForms, setReviewForm }) => {
  const categories = [
    { id: 0, title: 'πμ¬λ―Έμλ' },
    { id: 1, title: 'πμ°κΈ° λ§μ§μΈ' },
    { id: 2, title: 'βμ§μμ μλ' },
    { id: 3, title: 'πκ°λμ μΈ' },
    { id: 4, title: 'β¨μ°μΆ λ§μ§μΈ' },
    { id: 5, title: 'π±μλ¦λλ' },
  ];
  const handleClick = (index) => {
    button.splice(index, 1, !button[index]);
    setReviewForm({ ...reviewForms, categoryIds: button });
  };
  return (
    <S.KeywordContainer>
      {categories.map((category) => (
        <S.KeywordButton key={category.id} onClick={() => handleClick(category.id)}>
          {category.title}
        </S.KeywordButton>
      ))}
    </S.KeywordContainer>
  );
};

export default Keyword;
