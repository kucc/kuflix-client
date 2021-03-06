import React from 'react';
import * as S from './styles';
import Header from '../header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Layout>
  );
};

export default React.memo(Layout);
