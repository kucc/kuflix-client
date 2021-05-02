import React from 'react';
import * as S from './styles';

interface ContainerTitleProps {
  children: React.ReactNode;
}

const ContainerTitle: React.FC<ContainerTitleProps> = ({ children }) => {
  return <S.ContainerTitle>{children}</S.ContainerTitle>;
};

export default React.memo(ContainerTitle);
