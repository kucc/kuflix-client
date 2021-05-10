import * as S from './styles';
import { ContainerTitle } from '../../components/container-title/styles';
import Layout from '../../components/layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SubjectSection } from '../../common/model/subject-poster';
import indexAPI from '../../common/api';

const IndexPage = ({ sectionData }) => {
  const router = useRouter();
  const [sections] = useState<SubjectSection[]>(sectionData);

  const clickHandler = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <Layout>
      <S.IndexPage>
        {sections &&
          sections.map((section, id) => {
            return (
              <div key={id}>
                <ContainerTitle>{section.title}</ContainerTitle>
                <S.MovieGroup>
                  {section.subjects.map((subject) => {
                    return (
                      <S.MovieImage
                        src={subject.posterImageUrl}
                        key={subject.id}
                        onClick={() => clickHandler(subject.id)}
                      />
                    );
                  })}
                </S.MovieGroup>
              </div>
            );
          })}
      </S.IndexPage>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const data: SubjectSection[] = await indexAPI.getSubjectSections();

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
      sectionData: data,
    },
  };
};

export default IndexPage;
