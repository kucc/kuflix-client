import Layout from '../../components/layout';

import { getMockdata } from 'views/movie/mock-data';

const ReviewsPage = ({ reviews }) => {
  return <Layout>리뷰목록 페이지</Layout>;
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
