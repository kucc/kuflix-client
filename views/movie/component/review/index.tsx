import * as S from './styles';

interface ReviewProps {
    review;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
    return (
        <S.MovieReview>
            <S.ReviewTItle>{review.title}</S.ReviewTItle>
            <S.ReviewContent>{review.content}</S.ReviewContent>
        </S.MovieReview>
    );
};

export default Review;
