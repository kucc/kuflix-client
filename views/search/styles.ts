import styled from 'styled-components';

export const SearchPage = styled.div`
  width: 100%;
  padding: 0 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 15px;

  border-radius: 10px;
  border: 1px solid var(--clr-grey-900);
  background: url('images/search.png') no-repeat;
  background-position: 15px center;
  background-size: 20px;

  padding-left: 50px;

  ::placeholder {
    color: #b1b8c1;
    font-weight: 500;
  }
`;
