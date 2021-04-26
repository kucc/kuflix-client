import * as S from './styles';
import { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../../components/layout';
import ContainerTitle from '../../components/container-title';
import UserInfo from './component/user-info';
import MoreButton from './component/more-button';
import UserPost from './component/user-post';
import { getMockdata } from './mock-data';
import { UserPageProps } from './types';

const UserPage: NextPage<UserPageProps> = ({ userData, reviewData, quoteData }: UserPageProps) => {
  const [user] = useState(userData);
  const [reviews] = useState(reviewData);
  const [quotes] = useState(quoteData);
  const [showReviews, setShowReviews] = useState(false);
  const [showQuotes, setShowQuotes] = useState(false);

  return (
    <Layout>
      <S.UserPage>
        <S.UserContainer>
          <ContainerTitle>내 정보</ContainerTitle>
          <UserInfo username={user.name} reviewCount={reviews.length} quoteCount={quotes.length} />
        </S.UserContainer>

        <S.UserContainer>
          <S.Row>
            <ContainerTitle>내가 쓴 리뷰</ContainerTitle>
            <MoreButton handleClick={() => setShowReviews(!showReviews)}></MoreButton>
          </S.Row>
          {showReviews
            ? reviews.map((review) => <UserPost key={review.id} post={review} />)
            : reviews.slice(0, 2).map((review) => <UserPost key={review.id} post={review} />)}
        </S.UserContainer>

        <S.UserContainer>
          <S.Row>
            <ContainerTitle>내가 쓴 명대사</ContainerTitle>
            <MoreButton handleClick={() => setShowQuotes(!showQuotes)}></MoreButton>
          </S.Row>
          {showQuotes
            ? quotes.map((quoute) => <UserPost key={quoute.id} post={quoute} />)
            : quotes.slice(0, 2).map((quoute) => <UserPost key={quoute.id} post={quoute} />)}
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
