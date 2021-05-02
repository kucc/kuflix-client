import styled from 'styled-components';

export const LoginPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
  padding-top: 150px;
`;

export const LoginPageTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: var(--clr-grey-800);
  letter-spacing: 1px;

  margin-bottom: 2rem;
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// export const ServiceLogo = styled.image``
export const ServiceLogo = styled.div`
  width: 144px;
  height: 144px;
  background-color: #d1d6db;
  border-radius: 20px;

  margin-bottom: 40px;
`;
