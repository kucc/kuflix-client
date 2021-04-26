import * as S from './styles';
import { ContainerTitle } from '../../components/container-title/styles';
import Layout from '../../components/layout';
import { getMockdata } from './mock-data';
import { useState } from 'react';
import { NextPage } from 'next';

interface IndexPageProps {
  movieData;
}
const IndexPage: NextPage<IndexPageProps> = ({ movieData }) => {
  const [movies] = useState(movieData);

  return (
    <Layout>
      <ContainerTitle>감동적인 영화</ContainerTitle>

      <ContainerTitle>웃음을 주는 영화</ContainerTitle>

      <ContainerTitle>가족과 함께 보는 영화</ContainerTitle>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const movieData = await getMockdata();

  return { movieData };
};

export default IndexPage;
