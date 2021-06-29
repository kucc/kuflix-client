import styled from 'styled-components';
import { ButtonStyleProps } from './types';

export const RegisterContainer = styled.div``;
export const RegisterButton = styled.button<ButtonStyleProps>`
  width: 100%;
  height: 56px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.color == 'secondary' ? '#333D4B' : '#F9FAFB')};
  background: ${(props) => (props.color == 'secondary' ? '#F9FAFB' : '#333D4B')};
  border: 1px solid #8B95A1;
  border-radius: 10px;
  margin: 5px 0px 5px;
`;
