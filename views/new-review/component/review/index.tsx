import * as S from './styles';

interface ReviewProps {
}

const Review: React.FC<ReviewProps> = ({ }) => {
    return (
        <S.ReviewContainer>
            <S.ReviewInputTitle type="text" name="title" placeholder="리뷰 제목을 입력해주세요." />
            <S.ReviewInputContent name="content" placeholder="리뷰 내용을 입력해주세요. 글자 수는 N자로 제한됩니다." />
        </S.ReviewContainer>
    );
};

export default Review;
