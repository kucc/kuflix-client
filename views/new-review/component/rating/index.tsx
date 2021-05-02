import * as S from './styles';

interface RatingProps {
}

const Rating: React.FC<RatingProps> = ({}) => {
    return (
        <S.RatingContainer>
            <S.RatingImg src="https://media.istockphoto.com/vectors/five-stars-rating-vector-id1152705981" />
            <S.RatingScore>4.7 / 5</S.RatingScore>
        </S.RatingContainer>
    );
};

export default Rating;
