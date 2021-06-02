import Layout from '../../components/layout';
import Info from './component/info';
import Quote from './component/quote';
import Review from './component/review';
import { useRouter } from 'next/router';
import * as S from './styles';
import SubjectModel from '../../common/model/subject';
import subjectAPI from '../../common/api/subject';

const MoviePage = ({ subject }) => {
  const router = useRouter();
  const clickHandler = (movieId: number, link: string) => {
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <Layout>
      <S.MoviePageContainer>
        <S.MovieComponentContainer>
          <Info info={subject} />
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentHeader>
            <S.MovieComponentTitle>
              리뷰
              <S.MovieInfoNew onClick={() => clickHandler(subject.id, 'new-review')}>
                ✏️
              </S.MovieInfoNew>
            </S.MovieComponentTitle>
            <S.MovieInfoMore>더보기</S.MovieInfoMore>
          </S.MovieComponentHeader>
          {subject &&
            subject.reviews.map((review) => (
              <S.MovieReviewContainer key={review.id}>
                <Review review={review} />
              </S.MovieReviewContainer>
            ))}
        </S.MovieComponentContainer>
        <S.MovieComponentContainer>
          <S.MovieComponentHeader>
            <S.MovieComponentTitle>
              명대사
              <S.MovieInfoNew onClick={() => clickHandler(subject.id, 'new-quote')}>
                ✏️
              </S.MovieInfoNew>
            </S.MovieComponentTitle>
            <S.MovieInfoMore>더보기</S.MovieInfoMore>
          </S.MovieComponentHeader>
          {subject &&
            subject.famousLines.map((quote) => (
              <S.MovieQuoteContainer key={quote.id}>
                <Quote quote={quote} />
              </S.MovieQuoteContainer>
            ))}
        </S.MovieComponentContainer>
      </S.MoviePageContainer>
    </Layout>
  );
};

export const getServerSideProps = async ({  params }) => {
  const subjectId = params.id;
  const data: SubjectModel = await subjectAPI.getSubjectById(subjectId);
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

export default MoviePage;
