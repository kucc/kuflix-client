import * as S from './styles';

interface ReviewProps {
  reviewForms;
  handleChange;
}

const Review: React.FC<ReviewProps> = ({ reviewForms, handleChange }) => {
  return (
    <S.ReviewContainer>
      <S.ReviewInputTitle
        type="text"
        name="title"
        value={reviewForms.title}
        onChange={handleChange}
        placeholder="리뷰 제목을 입력해주세요."
      />
      <S.ReviewInputContent
        name="content"
        value={reviewForms.content}
        onChange={handleChange}
        placeholder="리뷰 내용을 입력해주세요. 글자 수는 N자로 제한됩니다."
      />
    </S.ReviewContainer>
  );
};

export default Review;
