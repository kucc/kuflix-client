import axios from '../axios';
import { ReviewModel } from '../model/review';
import SubjectModel from '../model/subject';
import { SubjectPoster } from '../model/subject-poster';
import endpoints from 'common/endpoints';

const subjectAPI = {
  searchSubjects: async (keyword: string): Promise<SubjectPoster[]> => {
    const { data } = await axios.get<{ results: SubjectPoster[] }>(
      `${endpoints.SUBJECT_API}/search?query=${keyword}}`
    );

    return data.results;
  },

  getSubjectById: async (id: number): Promise<SubjectModel> => {
    const { data: subject } = await axios.get(`${endpoints.SUBJECT_API}/${id}`).catch((err) => {
      console.error(err);
      return { data: null };
    });

    return subject;
  },

  getSubjectReviews: async (
    id: number,
    pageSize: number,
    page: number
  ): Promise<{ nextPageId: number; reviews: ReviewModel[] }> => {
    const { data: reviewList } = await axios.get(
      `${endpoints.SUBJECT_API}/${id}/reviews?size=${pageSize}&pageId=${page}`
    );

    return reviewList;
  },

  getSubjectQuotes: async (id: number, pageSize: number, page: number) => {
    const { data: famousLineId } = await axios.post(
      `${endpoints.SUBJECT_API}/${id}/famous-lines?size=${pageSize}&pageId=${page}`
    );

    return famousLineId;
  },

  postSubjectQuote: async (id: number, content: string): Promise<{ famousLineId: number }> => {
    const { data: famousLineId } = await axios.post(
      `${endpoints.SUBJECT_API}/${id}/famous-lines`,
      content
    );

    return famousLineId;
  },

  postSubjectFavorite: async (id: number) => {
    await axios.post(`${endpoints.SUBJECT_API}/${id}/favorite`);
  },

  deleteSubjectFavorite: async (id: number) => {
    await axios.delete(`${endpoints.SUBJECT_API}/${id}/favorite`);
  },
};

export default subjectAPI;
