import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import WriteHeader from '../new-review/component/writeheader';
import Quote from './component/quote';
import * as S from './styles';
import subjectAPI from '../../common/api/subject';
import SubjectModel from '../../common/model/subject';
import { useQuote } from './hooks';

const NewQuotePage = ({ subject }) => {
  const { quoteForm, setquoteForm, handleChange, disabled, handleSubmit } = useQuote(subject.id);
  return (
    <Layout>
      <S.QuotePageContainer>
        {console.log(quoteForm)}
        <WriteHeader name={subject.name} releasedDate={subject.releasedDate} movieId={subject.id} />
        <S.QuoteComponentContainer>
          <S.QuoteComponentTitle>명대사 작성</S.QuoteComponentTitle>
          <S.QuoteWriteContainer>
            <Quote quoteForms={quoteForm} handleChange={handleChange} />
          </S.QuoteWriteContainer>
        </S.QuoteComponentContainer>
        <S.QuoteComponentContainer>
          <Register
            message="명대사 등록하기"
            movieId={subject.id}
            link="complete-quote"
            handleClick={handleSubmit}
            disabled={disabled}
          />
        </S.QuoteComponentContainer>
      </S.QuotePageContainer>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const movieId = params.id;
  const data: SubjectModel = await subjectAPI.getSubjectById(movieId);
  if (!data) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
  return {
    props: {
      subject: data,
    },
  };
};

export default NewQuotePage;
