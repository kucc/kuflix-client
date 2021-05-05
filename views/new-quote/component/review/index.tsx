import * as S from './styles';

interface ReviewProps {
}

const Review: React.FC<ReviewProps> = ({ }) => {
    return (
        <S.ReviewContainer>
            <S.ReviewInputContent name="content" placeholder="명대사를 입력해주세요. 글자 수는 N자로 제한됩니다." />
        </S.ReviewContainer>
    );
};

export default Review;
