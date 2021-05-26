import styled from 'styled-components';
import { SubjectHeaderStyleProps } from './types';

export const SubjectHeaderContainer = styled.div<SubjectHeaderStyleProps>`
  position: absolute;
  left: 0px;
  top: 60px;

  width: 100%;
  height: ${(props) => (props.height ? props.height : '60px')};

  background: #333d4b;
  padding: 30px;

  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

export const HeaderInfoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 200px;
  height: 50px;
  cursor: pointer;
`;

export const HeaderLink = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  /* color: #8b95a1; */
  color: #e5e5e5;
  margin-right: 15px;
`;

export const HeaderInfoTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  margin-right: 10px;
  font-weight: 600;

  color: #e5e5e5;
`;

export const Separator = styled.div`
  font-size: 18px;
  line-height: 21px;
  margin-right: 10px;

  color: #e5e5e5;
`;

export const HeaderInfoDate = styled.div`
  font-size: 16px;
  line-height: 19px;

  color: #e5e5e5;
`;
