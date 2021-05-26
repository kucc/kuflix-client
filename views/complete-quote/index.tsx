import { NextPage } from 'next';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import * as S from './styles';
import { CompleteQuotePageProps } from './types';
// import WriteHeader from '../new-review/component/writeheader';

const CompleteQuotePage: NextPage<CompleteQuotePageProps> = ({ title, movieId }) => {
  return (
    <Layout>
      <S.CompleteQuotePageContainer>
        <S.CompleteMessageContainer>
          🎉
          <S.CompleteMessage>
            '{title}'에
            <br />
            명대사를 등록했어요!
          </S.CompleteMessage>
          🎉
        </S.CompleteMessageContainer>
        <S.CompletRegisterContainer>
          <Register
            message="같은 영화 리뷰 등록하기"
            movieId={movieId}
            link="new-review"
            handleClick={() => {}}
            color="primary"
          />
          <Register
            message="등록한 명대사 보기"
            movieId={movieId}
            link=""
            handleClick={() => {}}
            color="secondary"
          />
        </S.CompletRegisterContainer>
      </S.CompleteQuotePageContainer>
    </Layout>
  );
};

CompleteQuotePage.getInitialProps = ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const title = query.title;

  return { movieId, title, rest };
};

export default CompleteQuotePage;
