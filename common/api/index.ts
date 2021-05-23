import axios from '../axios';
import endpoints from '../endpoints';
import { SubjectSection } from '../model/subject-poster';

const indexAPI = {
  getSubjectSections: async (): Promise<SubjectSection[]> => {
    const { data } = await axios
      .get<{ sections: SubjectSection[] }>(endpoints.INDEX_API)
      .catch(() => {
        return { data: null };
      });

    if (data) return data.sections;
  },
};

export default indexAPI;
