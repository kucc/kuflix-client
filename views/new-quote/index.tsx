import { NextPage } from 'next';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import WriteHeader from '../new-review/component/writeheader';
import Review from './component/review';
import * as S from './styles';
import { NewQuotePageProps } from './types';
// import { useQuote } from './hooks';


const NewQuotePage: NextPage<NewQuotePageProps> = ({ title, date, movieId }) => {
  // const { } = useQuote()
  return (
    <Layout>
      <WriteHeader title={title} date={date} movieId={movieId} />
      <h1>명대사작성 페이지</h1>
      <S.QuoteComponentContainer>
        <S.QuoteComponentTitle>명대사 작성</S.QuoteComponentTitle>
        <S.QuoteWriteContainer>
          <Review />
        </S.QuoteWriteContainer>
      </S.QuoteComponentContainer>
      <S.QuoteComponentContainer>
        <Register
          message="명대사 등록하기"
          movieId={movieId}
          link="complete-quote"
          handleClick={console.log('hi')}
        />
      </S.QuoteComponentContainer>
    </Layout>
  );
};

NewQuotePage.getInitialProps = ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const title = query.title;
  const date = query.date;

  return { movieId, title, date };
};

export default NewQuotePage;
