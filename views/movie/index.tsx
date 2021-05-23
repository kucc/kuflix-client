import { NextPage } from 'next';
import Layout from '../../components/layout';
import Info from './component/info';
import Quote from './component/quote';
import Review from './component/review';
import { useRouter } from 'next/router';
import * as S from './styles';
import { MoviePageProps } from './types';
import { getMockdata } from './mock-data';

const MoviePage: NextPage<MoviePageProps> = ({ movieId, infos, reviews, quotes }) => {
  const router = useRouter();
  const clickHandler = (movieId: number, link: string) => {
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <Layout>
      <S.MoviePageContainer>
        <S.MovieComponentContainer>
          <Info info={infos} />
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentTitle>
            리뷰
            <S.MovieInfoNew onClick={() => clickHandler(movieId, 'new-review')}>+</S.MovieInfoNew>
          </S.MovieComponentTitle>
          {reviews.map((review) => (
            <S.MovieReviewContainer key={review.id}>
              <Review review={review} />
            </S.MovieReviewContainer>
          ))}
          <S.MovieInfoMore>더보기</S.MovieInfoMore>
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentTitle>
            명대사
            <S.MovieInfoNew onClick={() => clickHandler(movieId, 'new-quote')}>+</S.MovieInfoNew>
          </S.MovieComponentTitle>
          {quotes.map((quote) => (
            <S.MovieQuoteContainer key={quote.id}>
              <Quote quote={quote} />
            </S.MovieQuoteContainer>
          ))}
          <S.MovieInfoMore>더보기</S.MovieInfoMore>
        </S.MovieComponentContainer>
      </S.MoviePageContainer>
    </Layout>
  );
};

MoviePage.getInitialProps = async ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const response = await getMockdata();
  const {
    id,
    name,
    englishName,
    description,
    releasedDate,
    score,
    genre,
    posterImageUrl,
    director,
    country,
    runningTime,
    audienceCount,
  } = response;
  const infos = {
    id,
    name,
    englishName,
    description,
    releasedDate,
    score,
    genre,
    posterImageUrl,
    director,
    country,
    runningTime,
    audienceCount,
  };
  const reviews = response.reviews;
  const quotes = response.famousLines;

  return { movieId, infos, reviews, quotes, rest };
};

export default MoviePage;
