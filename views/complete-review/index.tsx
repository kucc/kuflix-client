import { NextPage } from 'next';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import * as S from './styles';
// import WriteHeader from '../new-review/component/writeheader';

interface CompleteReviewPageProps {
  title;
  movieId;
}

const CompleteReviewPage: NextPage<CompleteReviewPageProps> = ({ title, movieId }) => {
  return (
    <Layout>
      <S.CompleteReviwPageContainer>
        <S.CompleteMessageContainer>
          🎉<S.CompleteMessage>'{title}'에 리뷰를 등록했어요!</S.CompleteMessage>🎉
        </S.CompleteMessageContainer>
        <S.CompleteRegisterContainer>
          <Register
            message="같은 영화 명대사 등록하기"
            src={`/movie/${movieId}/new-quote`}
            movieId={movieId}
            handlechange={console.log('으악')}
          />
          <Register
            message="등록한 리뷰 보기"
            src={`/movie/${movieId}`}
            movieId={movieId}
            handlechange={console.log('히히')}
          />
        </S.CompleteRegisterContainer>
      </S.CompleteReviwPageContainer>
    </Layout>
  );
};

CompleteReviewPage.getInitialProps = ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const title = query.title;

  return { movieId, title };
};

export default CompleteReviewPage;
