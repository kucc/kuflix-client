import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/layout';
import Info from './component/info';
import Quote from './component/quote';
import Review from './component/review';
import { useMovie } from './hooks';
import * as S from './styles';


interface MoviePageProps {
  rest;
  movieId;
  initialMovie;
  initialReview;
  initialQuote;
}

const MoviePage: NextPage<MoviePageProps> = ({ movieId, initialMovie, initialReview, initialQuote }) => {
  const { infos, reviews, quotes } = useMovie({ movieId, initialMovie, initialReview, initialQuote })
  return (
    <Layout>
      <S.MoviePageContainer>
        <h1>영화정보 페이지</h1>
        <S.MovieComponentContainer>
          {infos.map((info, i) => (
            <Info info={info} key={i} />
          ))}
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
        <S.MovieComponentTitle>
            리뷰
            <Link href={{ pathname: `/movie/${movieId}/new-review`, query: { movieId: movieId, title: infos[0].title, date: infos[0].release_date } }}><S.MovieInfoNew>+</S.MovieInfoNew></Link>
            {/* <Link href={{ pathname: `/movie/${1}/new-review`, query: { movieId: 1, title: infos[0].title, date: infos[0].release_date } }}><S.MovieInfoNew>+</S.MovieInfoNew></Link> */}
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
            {/* <Link href={{ pathname: `/movie/${movieId}/new-quote`, query: { movieId: movieId, title: infos[0].title, date: infos[0].release_date } }}><S.MovieInfoNew>+</S.MovieInfoNew></Link> */}
            <Link href={{ pathname: `/movie/${1}/new-quote`, query: { movieId: 1, title: infos[0].title, date: infos[0].release_date } }}><S.MovieInfoNew>+</S.MovieInfoNew></Link>
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
  const response1 = await fetch(
    `${baseURL}/infos`
  );
  const response2 = await fetch(
    `${baseURL}/reviews`
  );
  const response3 = await fetch(
    `${baseURL}/quotes`
  );
  const initialMovie = await response1.json()
  const initialReview = await response2.json()
  const initialQuote = await response3.json()

  return { movieId, initialMovie, initialReview, initialQuote, rest };
};

export default MoviePage;
