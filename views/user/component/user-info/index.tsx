import React from 'react';
import * as S from './styles';

interface UserInfoProps {
  username: string;
  reviewCount: number;
  quoteCount: number;
}

function UserInfo({ username, reviewCount, quoteCount }: UserInfoProps) {
  return (
    <S.UserInfo>
      <S.UserName>{username} 님</S.UserName>
      <S.UserActivity>
        리뷰 {reviewCount}개 | 명대사 {quoteCount}개
      </S.UserActivity>
    </S.UserInfo>
  );
}

export default React.memo(UserInfo);
