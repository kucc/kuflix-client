import axios from '../axios';
import endpoints from 'common/endpoints';
import { PostReviewBody } from '../model/review';

const reviewAPI = {
  postReview: async (reviewForm: PostReviewBody): Promise<{ reviewId: number }> => {
    const { data: reviewId } = await axios.post<{ reviewId: number }>(
      endpoints.REVIEW_API,
      reviewForm
    );

    return reviewId;
  },

  postReviewLike: async (reviewId: number) => {
    await axios.post(`${endpoints.REVIEW_API}/${reviewId}/like`).catch((err) => {
      console.error(err);
      return false;
    });

    return true;
  },

  deleteReviewLike: async (reviewId: number) => {
    await axios.delete(`${endpoints.REVIEW_API}/${reviewId}/like`).catch((err) => {
      console.error(err);
      return false;
    });

    return true;
  },
};

export default reviewAPI;
