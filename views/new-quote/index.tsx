import { NextPage } from 'next';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import WriteHeader from '../new-review/component/writeheader';
import Review from './component/review';
import * as S from './styles';
import { NewQuotePageProps } from './types';
import { getMockdata } from '../movie/mock-data';
// import { useQuote } from './hooks';

const NewQuotePage: NextPage<NewQuotePageProps> = ({ name, releasedDate, movieId }) => {
  // const { } = useQuote()
  return (
    <Layout>
      <S.QuotePageContainer>
        <WriteHeader name={name} releasedDate={releasedDate} movieId={movieId} />
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
            handleClick={() => {}}
          />
        </S.QuoteComponentContainer>
      </S.QuotePageContainer>
    </Layout>
  );
};

NewQuotePage.getInitialProps = async ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const response = await getMockdata();
  const name = response.name;
  const releasedDate = response.releasedDate;
  return { movieId, name, releasedDate, rest };
};

export default NewQuotePage;
