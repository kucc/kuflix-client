import * as S from './styles';
import { NextPage } from 'next';
import { useState } from 'react';
import ContainerTitle from '../../components/container-title';
import Layout from '../../components/layout';
import { getMockdata } from './mock-data';
import UserInfo from './component/user-info';

interface UserPageProps {
  userData;
  reviewData;
  quoteData;
}

const UserPage: NextPage<UserPageProps> = ({ userData, reviewData, quoteData }: UserPageProps) => {
  const [user] = useState(userData);
  const [reviews] = useState(reviewData);
  const [quotes] = useState(quoteData);

  return (
    <Layout>
      <S.UserPage>
        <S.UserContainer>
          <ContainerTitle>내 정보</ContainerTitle>
          <UserInfo username={user.name} reviewCount={reviews.length} quoteCount={quotes.length} />
        </S.UserContainer>

        <S.UserContainer>
          <ContainerTitle>내가 쓴 리뷰</ContainerTitle>
        </S.UserContainer>

        <S.UserContainer>
          <ContainerTitle>내가 쓴 명대사</ContainerTitle>
        </S.UserContainer>
      </S.UserPage>
    </Layout>
  );
};

UserPage.getInitialProps = async () => {
  const userData = await getMockdata('user');
  const reviewData = await getMockdata('review');
  const quoteData = await getMockdata('quote');

  return { userData, reviewData, quoteData };
};

export default UserPage;
