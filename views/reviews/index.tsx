import * as S from './styles';
import Layout from '../../components/layout';
import subjectAPI from '../../common/api/subject';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import SubjectHeader from 'components/subject-header';
import { getMockdata } from 'views/movie/mock-data';

const ReviewsPage = ({ reviews }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: subject } = useQuery(['subject', id], () =>
    subjectAPI.getSubjectById(parseInt(id as string))
  );

  return (
    <Layout>
      <S.ReviewsPage>
        <SubjectHeader subject={subject} />
      </S.ReviewsPage>
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
