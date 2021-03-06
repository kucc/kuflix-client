import router from 'next/router';
import { useState } from 'react';
import subjectAPI from '../../common/api/subject';

export const useQuote = (subjectId) => {
  const [quoteForm, setquoteForm] = useState({
    content: '',
  });

  const handleChange = (e) => {
    setquoteForm({ ...quoteForm, [e.target.name]: e.target.value });
  };

  const disabled = !Object.values(quoteForm).every((el) => Boolean(el));

  const handleSubmit = async () => {
    setquoteForm(quoteForm);
    const data: { famousLineId: number } = await subjectAPI.postSubjectQuote(
      subjectId,
      quoteForm.content
    );
    if (data) {
      return router.push(`/movie/${subjectId}/complete-quote`);
    }
    //TODO: error handling
  };
  return {
    quoteForm,
    setquoteForm,
    handleChange,
    disabled,
    handleSubmit,
  };
};
