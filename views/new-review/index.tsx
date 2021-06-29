import Layout from '../../components/layout';
import Review from './component/review';
import Keyword from './component/keyword';
import Rating from './component/rating';
import Register from './component/register';
import WriteHeader from './component/writeheader';
import * as S from './styles';
import SubjectModel from '../../common/model/subject';
import subjectAPI from '../../common/api/subject';
import { useReview } from './hooks';

const NewReviewPage = ({ subject }) => {
  const { reviewForm, setReviewForm, handleChange, disabled, handleSubmit } = useReview(subject.id);
  return (
    <Layout>
      <S.ReviewPageContainer>
        <WriteHeader name={subject.name} releasedDate={subject.releasedDate} movieId={subject.id} />
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>평점</S.ReviewComponentTitle>
          <S.ReviewRating>
            <Rating reviewForms={reviewForm} handleChange={handleChange} />
          </S.ReviewRating>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>영화 키워드</S.ReviewComponentTitle>
          <S.ReviewKeyword>
            <Keyword reviewForms={reviewForm} setReviewForm={setReviewForm} />
          </S.ReviewKeyword>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <S.ReviewComponentTitle>텍스트 리뷰 작성</S.ReviewComponentTitle>
          <S.ReviewWrite>
            <Review reviewForms={reviewForm} handleChange={handleChange} />
          </S.ReviewWrite>
        </S.ReviewComponentContainer>
        <S.ReviewComponentContainer>
          <Register
            message="리뷰 등록하기"
            movieId={subject.id}
            link="complete-review"
            handleClick={handleSubmit}
            disabled={disabled}
          />
        </S.ReviewComponentContainer>
      </S.ReviewPageContainer>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const movieId = params.id;
  const data: SubjectModel = await subjectAPI.getSubjectById(movieId);
  if (!data) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
  return {
    props: {
      subject: data,
    },
  };
};

export default NewReviewPage;
