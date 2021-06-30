import axios from '../axios';

const reviewAPI = {
  postReview: async (): Promise<{ reviewId: number }> => {
    const { data: reviewId } = await axios.post<{ reviewId: number }>(process.env.REVIEW_API);

    return reviewId;
  },

  postReviewLike: async (reviewId: number) => {
    await axios.post(`${process.env.REVIEW_API}/${reviewId}/like`).catch((err) => {
      console.error(err);
      return false;
    });

    return true;
  },

  deleteReviewLike: async (reviewId: number) => {
    await axios.delete(`${process.env.REVIEW_API}/${reviewId}/like`).catch((err) => {
      console.error(err);
      return false;
    });

    return true;
  },
};

export default reviewAPI;
