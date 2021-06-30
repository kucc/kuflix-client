import { useRef, useState } from 'react';
import reviewAPI from 'common/api/review';

export const useReviewToggle = (reviewId: number) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const reviewLikeButton = useRef<HTMLDivElement>(null);

  const toggleReviewShow = (e) => {
    if (
      reviewLikeButton.current &&
      (e.target === reviewLikeButton.current || reviewLikeButton.current.contains(e.target))
    ) {
      return;
    }

    setIsClicked(!isClicked);
  };

  const toggleReviewLike = async (e) => {
    e.preventDefault();
    const result = await reviewAPI.postReviewLike(reviewId);
    if (!result) alert('서버 점검중입니다. 잠시 후 다시 시도해주세요:) ');
  };

  return {
    isClicked,
    reviewLikeButton,
    toggleReviewShow,
    toggleReviewLike,
  };
};
