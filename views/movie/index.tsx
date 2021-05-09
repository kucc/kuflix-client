import { NextPage } from 'next';
import Layout from '../../components/layout';
import Info from './component/info';
import Quote from './component/quote';
import Review from './component/review';
import { useRouter } from 'next/router';
import axios from 'axios';
import * as S from './styles';

interface MoviePageProps {
  rest;
  movieId;
  infos;
  reviews;
  quotes;
}

const MoviePage: NextPage<MoviePageProps> = ({ movieId, infos, reviews, quotes }) => {
  const router = useRouter();
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
  const responseMovie = await axios.get(`${baseURL}/infos`);
  const responseReview = await axios.get(`${baseURL}/reviews`);
  const responseQuote = await axios.get(`${baseURL}/quotes`);
  const infos = await responseMovie.data;
  const reviews = await responseReview.data;
  const quotes = await responseQuote.data;

  return { movieId, infos, reviews, quotes, rest };
};

export default MoviePage;
