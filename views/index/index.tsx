import * as S from './styles';
import { ContainerTitle } from '../../components/container-title/styles';
import Layout from '../../components/layout';
import { getMockdata } from './mock-data';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface IndexPageProps {
  movieData;
}
const IndexPage: NextPage<IndexPageProps> = ({ movieData }) => {
  const router = useRouter();
  const [movies] = useState(movieData);

  const clickHandler = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <Layout>
      <S.IndexPage>
        <ContainerTitle>감동적인 영화</ContainerTitle>
        <S.MovieGroup>
          {movies.map((movie) => {
            return (
              <S.MovieImage
                src={movie.image}
                key={movie.id}
                onClick={() => clickHandler(movie.id)}
              />
            );
          })}
        </S.MovieGroup>

        <ContainerTitle>웃음을 주는 영화</ContainerTitle>
        <S.MovieGroup>
          {movies.map((movie) => {
            return (
              <S.MovieImage
                src={movie.image}
                key={movie.id}
                onClick={() => clickHandler(movie.id)}
              />
            );
          })}
        </S.MovieGroup>

        <ContainerTitle>가족과 함께 보는 영화</ContainerTitle>
        <S.MovieGroup>
          {movies.map((movie) => {
            return (
              <S.MovieImage
                src={movie.image}
                key={movie.id}
                onClick={() => clickHandler(movie.id)}
              />
            );
          })}
        </S.MovieGroup>
      </S.IndexPage>
    </Layout>
  );
};

IndexPage.getInitialProps = async () => {
  const movieData = await getMockdata();

  return { movieData };
};

export default IndexPage;
