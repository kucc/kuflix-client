import router from 'next/router';
import subjectAPI from '../../common/api/subject';
import SubjectModel from '../../common/model/subject';
import Layout from '../../components/layout';
import Register from 'components/register';
import * as S from './styles';

const CompleteQuotePage = ({ subject }) => {
  const handleClick = (link: string) => {
    router.push(`/movie/${subject.id}/${link}`);
  };
  return (
    <Layout>
      <S.CompleteQuotePageContainer>
        <S.CompleteMessageContainer>
          π
          <S.CompleteMessage>
            '{subject.name}'μ
            <br />
            λͺλμ¬λ₯Ό λ±λ‘νμ΄μ!
          </S.CompleteMessage>
          π
        </S.CompleteMessageContainer>
        <S.CompletRegisterContainer>
          <Register
            message="κ°μ μν λ¦¬λ·° λ±λ‘νκΈ°"
            handleClick={() => handleClick('new-review')}
          />
          <Register
            message="λ±λ‘ν λͺλμ¬ λ³΄κΈ°"
            handleClick={() => handleClick('')}
            color="secondary"
          />
        </S.CompletRegisterContainer>
      </S.CompleteQuotePageContainer>
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

export default CompleteQuotePage;
