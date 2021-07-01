import React from 'react';
import * as S from './styles';
import Image from 'next/image';

const LoadingSpinner = (): JSX.Element => {
  return (
    <S.LoadingContainer>
      {/* temp icon */}
      <Image src="/images/circles.gif" alt="loading..." width="80px" height="80px" />
    </S.LoadingContainer>
  );
};

export default LoadingSpinner;
