import subjectAPI from '../../common/api/subject';
import SubjectModel from '../../common/model/subject';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import * as S from './styles';

const CompleteQuotePage = ({ subject }) => {
  return (
    <Layout>
      <S.CompleteQuotePageContainer>
        <S.CompleteMessageContainer>
          🎉
          <S.CompleteMessage>
            '{subject.name}'에
            <br />
            명대사를 등록했어요!
          </S.CompleteMessage>
          🎉
        </S.CompleteMessageContainer>
        <S.CompletRegisterContainer>
          <Register message="같은 영화 리뷰 등록하기" movieId={subject.id} link="new-review" />
          <Register message="등록한 명대사 보기" movieId={subject.id} link="" color="secondary" />
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
