import axios from '../axios';
import endpoints from '../endpoints';

const reviewAPI = {
  postReview: async (): Promise<{ reviewId: number }> => {
    const { data: reviewId } = await axios.post<{ reviewId: number }>(endpoints.REVIEW_API);

    return reviewId;
  },

  postReviewLike: async (reviewId: number) => {
    await axios.post(`${endpoints.REVIEW_API}/${reviewId}/like`);
  },

  deleteReviewLike: async (reviewId: number) => {
    await axios.delete(`${endpoints.REVIEW_API}/${reviewId}/like`);
  },
};

export default reviewAPI;
