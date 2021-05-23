import styled from 'styled-components';

export const IndexPage = styled.div`
  width: 100%;
  padding-left: 20px;
  margin-top: 35px;
`;

export const MovieGroup = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  margin-bottom: 35px;
`;

export const MovieImage = styled.img`
  width: 135px;
  height: 189px;
  border-radius: 12px;

  margin-right: 12px;
`;

export const SearchButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  position: absolute;
  position: fixed;
  right: 30px;
  bottom: 50px;

  border: none;
  background: #ff0000;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 1);
`;
