import * as S from './styles';
import React from 'react';
import { ReviewModel } from 'common/model/review';

export interface ReviewBoxProps {
  review: ReviewModel;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ review }) => {
  return (
    <S.ReviewBoxContainer>
      <S.ReviewTitle>{review.title}</S.ReviewTitle>
      <S.ReviewContent>{review.content}</S.ReviewContent>

      <S.ReviewMetaInfoContainer>
        <S.ReviewLikeButton>
          <S.ReviewLikeIcon>👍</S.ReviewLikeIcon>
          {/* TODO : need Icon, liked여부에 따른 아이콘 구별 */}
          <S.ReviewLikeCount>{review.likeCount}</S.ReviewLikeCount>
        </S.ReviewLikeButton>

        <S.ReviewUserContainer>
          <S.ReviewUser>{review.author}</S.ReviewUser>|
          <S.ReviewDate>{review.createdDateTime}</S.ReviewDate>
        </S.ReviewUserContainer>
      </S.ReviewMetaInfoContainer>
    </S.ReviewBoxContainer>
  );
};

export default React.memo(ReviewBox);
