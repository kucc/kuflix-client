import React from 'react';
import * as S from './styles';

interface MoreButtonProps {
  handleClick: () => void;
}

function MoreButton({ handleClick }: MoreButtonProps) {
  return <S.MoreButton onClick={handleClick}> 더보기 </S.MoreButton>;
}

export default React.memo(MoreButton);
