import router from 'next/router';
import { useState } from 'react';
import reviewAPI from '../../common/api/review';

export const useReview = (subjectId) => {
  const [reviewForm, setReviewForm] = useState({
    score: 0,
    title: '',
    content: '',
    reviewSubjectId: subjectId,
    categoryIds: [],
  });

  const handleChange = (e) => {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  };

  const disabled = !Object.values(reviewForm).every((el) => Boolean(el));

  const handleSubmit = async () => {
    setReviewForm(reviewForm);
    const data: { reviewId: number } = await reviewAPI.postReview(reviewForm);
    if (data) {
      return router.push(`/movie/${subjectId}/complete-review`);
    }
    //TODO: error handling
  };
  return {
    reviewForm,
    setReviewForm,
    handleChange,
    disabled,
    handleSubmit,
  };
};
