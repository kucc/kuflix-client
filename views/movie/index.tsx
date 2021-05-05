import { NextPage } from 'next';
import Layout from '../../components/layout';
import Info from './component/info';
import Quote from './component/quote';
import Review from './component/review';
import { useMovie } from './hooks';
import { useRouter } from 'next/router';
import * as S from './styles';

interface MoviePageProps {
  rest;
  movieId;
  initialMovie;
  initialReview;
  initialQuote;
}

const MoviePage: NextPage<MoviePageProps> = ({
  movieId,
  initialMovie,
  initialReview,
  initialQuote,
}) => {
  const router = useRouter();
  const { infos, reviews, quotes } = useMovie({
    movieId,
    initialMovie,
    initialReview,
    initialQuote,
  });

  const clickHandler = (movieId: number, link: string) => {
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <Layout>
      <S.MoviePageContainer>
        <S.MovieComponentContainer>
          {infos.map((info, i) => (
            <Info info={info} key={i} />
          ))}
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentTitle>
            리뷰
            <S.MovieInfoNew onClick={() => clickHandler(movieId, 'new-review')}>+</S.MovieInfoNew>
          </S.MovieComponentTitle>
          {reviews.map((review, i) => (
            <S.MovieReviewContainer>
              <Review review={review} key={i} />
            </S.MovieReviewContainer>
          ))}
          <S.MovieInfoMore>더보기</S.MovieInfoMore>
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentTitle>
            명대사
            <S.MovieInfoNew onClick={() => clickHandler(movieId, 'new-quote')}>+</S.MovieInfoNew>
          </S.MovieComponentTitle>
          {quotes.map((quote, i) => (
            <S.MovieQuoteContainer>
              <Quote quote={quote} key={i} />
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
  const baseURL = `http://localhost:3000/api/movie`;
  const responseMovie = await fetch(`${baseURL}/infos`);
  const responseReview = await fetch(`${baseURL}/reviews`);
  const responseQuote = await fetch(`${baseURL}/quotes`);
  const initialMovie = await responseMovie.json();
  const initialReview = await responseReview.json();
  const initialQuote = await responseQuote.json();

  return { movieId, initialMovie, initialReview, initialQuote, rest };
};

export default MoviePage;
