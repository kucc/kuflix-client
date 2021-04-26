import React from 'react';
import * as S from './styles';

function GoogleLoginButton() {
  const clickHandler = () => {
    window.location.href = `(api)/auth/google`; //TODO
  };

  return (
    <S.GoogleLoginButton onClick={clickHandler}>
      <S.logoImg src="/images/google.png" />
      구글로 쉬운 시작하기
    </S.GoogleLoginButton>
  );
}

export default React.memo(GoogleLoginButton);
