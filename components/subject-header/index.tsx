import * as S from './styles';
import React from 'react';
import { SubjectHeaderProps } from './types';
import { useRouter } from 'next/router';

const SubjectHeader: React.FC<SubjectHeaderProps> = ({ subject, height }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${subject.id}`);
  };

  if (!subject) return <></>;

  return (
    <S.SubjectHeaderContainer height={height}>
      <S.HeaderInfoContainer>
        <S.HeaderLink onClick={onClick}>{'<'}</S.HeaderLink>
        {/* TODO: Need icon */}
        <S.HeaderInfoTitle>{subject.name} </S.HeaderInfoTitle>
        <S.Separator>|</S.Separator>
        <S.HeaderInfoDate>{subject.releasedDate}</S.HeaderInfoDate>
      </S.HeaderInfoContainer>
    </S.SubjectHeaderContainer>
  );
};

export default React.memo(SubjectHeader);
