import * as S from './styles';
import Layout from '../../components/layout';
import subjectAPI from '../../common/api/subject';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import SubjectHeader from 'components/subject-header';
import LoadingSpinner from 'components/loading';
import { getMockdata } from 'views/movie/mock-data';
import ReviewBox from 'components/review-box';

const ReviewsPage = ({ reviews }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: subject, isLoading } = useQuery(['subject', id], () =>
    subjectAPI.getSubjectById(parseInt(id as string))
  );

  console.log(reviews);

  return (
    <Layout>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <S.ReviewsPage>
            <SubjectHeader subject={subject} />

            {reviews &&
              reviews.map((review) => {
                return <ReviewBox key={review.id} review={review} />;
              })}
          </S.ReviewsPage>
        </>
      )}
    </Layout>
  );
};

export default ReviewsPage;

export async function getServerSideProps({ params, resolvedUrl, query }) {
  console.log(params);
  // const data = await subjectAPI.getSubjectReviews(params.id, 30, 1); // SERVER_ERROR
  const data = await getMockdata();

  return {
    props: { reviews: data.reviews, url: resolvedUrl, query },
  };
}
