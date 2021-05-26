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
    await reviewAPI.postReviewLike(reviewId);
    //TODO: error handling
  };

  return {
    isClicked,
    reviewLikeButton,
    toggleReviewShow,
    toggleReviewLike,
  };
};
