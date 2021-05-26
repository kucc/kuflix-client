import axios from '../axios';
import { SubjectSection } from '../model/subject-poster';

const indexAPI = {
  getSubjectSections: async (): Promise<SubjectSection[]> => {
    const { data } = await axios
      .get<{ sections: SubjectSection[] }>(process.env.INDEX_API)
      .catch((err) => {
        console.error(err);
        return { data: null };
      });

    if (data) return data.sections;
  },
};

export default indexAPI;
