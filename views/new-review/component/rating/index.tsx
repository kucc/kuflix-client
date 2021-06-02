import * as S from './styles';

interface RatingProps {
  reviewForms;
  handleChange;
}

const Rating: React.FC<RatingProps> = ({ reviewForms, handleChange }) => {
  return (
    <S.RatingContainer>
      <S.RatingImg src="https://media.istockphoto.com/vectors/five-stars-rating-vector-id1152705981" />
      <S.RatingInput type="number" name="score" value={reviewForms.score} onChange={handleChange} />
      <S.RatingScore> {reviewForms.score} / 5</S.RatingScore>
    </S.RatingContainer>
  );
};

export default Rating;
