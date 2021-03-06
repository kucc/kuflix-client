import router from 'next/router';
import subjectAPI from '../../common/api/subject';
import SubjectModel from '../../common/model/subject';
import Layout from '../../components/layout';
import Register from 'components/register';
import * as S from './styles';

const CompleteReviewPage = ({ subject }) => {
  const handleClick = (link: string) => {
    router.push(`/movie/${subject.id}/${link}`);
  };
  return (
    <Layout>
      <S.CompleteReviwPageContainer>
        <S.CompleteMessageContainer>
          π
          <S.CompleteMessage>
            '{subject.name}'μ
            <br />
            λ¦¬λ·°λ₯Ό λ±λ‘νμ΄μ!
          </S.CompleteMessage>
          π
        </S.CompleteMessageContainer>
        <S.CompleteRegisterContainer>
          <Register
            message="κ°μ μν λͺλμ¬ λ±λ‘νκΈ°"
            handleClick={() => handleClick('new-quote')}
          />
          <Register
            message="λ±λ‘ν λ¦¬λ·° λ³΄κΈ°"
            handleClick={() => handleClick('')}
            color="secondary"
          />
        </S.CompleteRegisterContainer>
      </S.CompleteReviwPageContainer>
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

export default CompleteReviewPage;
