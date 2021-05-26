import * as S from './styles';
import React from 'react';
import { ReviewModel } from 'common/model/review';
import { useReviewToggle } from './hooks';

export interface ReviewBoxProps {
  review: ReviewModel;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ review }) => {
  const { isClicked, reviewLikeButton, toggleReviewShow, toggleReviewLike } = useReviewToggle(
    review.id
  );

  return (
    <S.ReviewBoxContainer onClick={(e) => toggleReviewShow(e)}>
      <S.ReviewTitle>{review.title}</S.ReviewTitle>
      <S.ReviewContent>
        {isClicked ? review.content : review.content.substring(0, 70) + '...'}
      </S.ReviewContent>

      {isClicked && (
        <S.ReviewMetaInfoContainer>
          <S.ReviewLikeButton ref={reviewLikeButton} onClick={(e) => toggleReviewLike(e)}>
            <S.ReviewLikeIcon>👍</S.ReviewLikeIcon>
            {/* TODO : need Icon, liked여부에 따른 아이콘 구별 */}
            <S.ReviewLikeCount>{review.likeCount}</S.ReviewLikeCount>
          </S.ReviewLikeButton>

          <S.ReviewUserContainer>
            <S.ReviewUser>{review.author}</S.ReviewUser>|
            <S.ReviewDate>{review.createdDateTime}</S.ReviewDate>
          </S.ReviewUserContainer>
        </S.ReviewMetaInfoContainer>
      )}
    </S.ReviewBoxContainer>
  );
};

export default React.memo(ReviewBox);
