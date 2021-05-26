import subjectAPI from '../../common/api/subject';
import SubjectModel from '../../common/model/subject';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import * as S from './styles';

const CompleteReviewPage = ({ subject }) => {
  return (
    <Layout>
      <S.CompleteReviwPageContainer>
        <S.CompleteMessageContainer>
          🎉
          <S.CompleteMessage>
            '{subject.name}'에
            <br />
            리뷰를 등록했어요!
          </S.CompleteMessage>
          🎉
        </S.CompleteMessageContainer>
        <S.CompleteRegisterContainer>
          <Register message="같은 영화 명대사 등록하기" movieId={subject.id} link="new-quote" />
          <Register message="등록한 리뷰 보기" movieId={subject.id} link="" color="secondary" />
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
