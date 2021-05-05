import { NextPage } from 'next';
import Layout from '../../components/layout';
import Review from './component/review';
import Keyword from './component/keyword';
import Rating from './component/rating';
import Register from './component/register';
import WriteHeader from './component/writeheader';
import * as S from './styles';
// import { useReview } from './hooks';

interface NewReviewPageProps {
  title;
  date;
  movieId;
}

const NewReviewPage: NextPage<NewReviewPageProps> = ({ title, date, movieId }) => {
  // const { } = useReview()
  return (
    <S.ReviewPageContainer>
      <WriteHeader title={title} date={date} movieId={movieId} />
      <Layout>
        <h1>리뷰작성페이지</h1>
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>평점</S.ReviewComponentTitle>
          <S.ReviewRating>
            <Rating />
          </S.ReviewRating>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>영화키워드</S.ReviewComponentTitle>
          <S.ReviewKeyword>
            <Keyword />
          </S.ReviewKeyword>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>텍스트리뷰작성</S.ReviewComponentTitle>
          <S.ReviewWrite>
            <Review />
          </S.ReviewWrite>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <Register
            message="리뷰 등록하기"
            movieId={movieId}
            link="complete-review"
            handleClick={console.log('hi')}
          />
        </S.ReviewComponentContainer>
      </Layout>
    </S.ReviewPageContainer>
  );
};

NewReviewPage.getInitialProps = ({ req, res, query, ...rest }) => {
  const movieId = query.movieId;
  const title = query.title;
  const date = query.date;

  return { movieId, title, date };
};

export default NewReviewPage;
