import styled from 'styled-components';
import Image from 'next/image';

export const LoadingContainer = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const Loader = styled(Image)`
  width: 100px;
`;
