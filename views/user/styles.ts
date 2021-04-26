import styled from 'styled-components';
import { ColumnStyleProps } from './types';

export const UserPage = styled.div`
  width: 100%;
  padding: 0 30px;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Column = styled.div<ColumnStyleProps>`
  width: 100%;
  max-height: ${(props) => (props.showAll ? '1000px' : '280px')};
  overflow: hidden;
  transition: max-height 0.5s linear;
`;
