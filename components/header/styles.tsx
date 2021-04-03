import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;

  border-bottom: 1px solid var(--clr-grey-300);
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const LogoIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--clr-red-light);
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  float: right;
`;

export const LoginButton = styled.button`
  border: none;

  background-color: var(--clr-grey-300);
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &:hover {
    background-color: var(--clr-grey-400);
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  /* img {
    width: 30px;
    height: 30px;
  } */
`;
