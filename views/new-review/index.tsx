import { NextPage } from 'next';
import Layout from '../../components/layout';
import Review from './component/review';
import Keyword from './component/keyword';
import Rating from './component/rating';
import Register from './component/register';
import WriteHeader from './component/writeheader';
import * as S from './styles';
import { NewReviewPageProps } from './types';
import { getMockdata } from '../movie/mock-data';
// import { useReview } from './hooks';

const NewReviewPage: NextPage<NewReviewPageProps> = ({ name, releasedDate, movieId }) => {
  // const { } = useReview()
  return (
    <S.ReviewPageContainer>
      <WriteHeader name={name} releasedDate={releasedDate} movieId={movieId} />
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

NewReviewPage.getInitialProps = async ({ req, res, query, ...rest }) => {
  console.log(query);
  const movieId = query.movieId;
  const baseURL = `http://localhost:3000/api/movie`;
  const response = await getMockdata();
  const name = response.name;
  const releasedDate = response.releasedDate;

  return { movieId, name, releasedDate, rest };
};

export default NewReviewPage;
