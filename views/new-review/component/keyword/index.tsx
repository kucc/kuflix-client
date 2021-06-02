import * as S from './styles';

interface KeywordProps {
  reviewForms;
  setReviewForm;
}

const button = [false, false, false, false, false, false];

const Keyword: React.FC<KeywordProps> = ({ reviewForms, setReviewForm }) => {
  const categories = [
    { id: 0, title: '😆재미있는' },
    { id: 1, title: '🏅연기 맛집인' },
    { id: 2, title: '✍짜임새 있는' },
    { id: 3, title: '😂감동적인' },
    { id: 4, title: '✨연출 맛집인' },
    { id: 5, title: '😱소름돋는' },
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
