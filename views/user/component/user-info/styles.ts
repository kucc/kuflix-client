import styled from 'styled-components';

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  border: 0.5px solid var(--clr-grey-400);
  background-color: white;
  cursor: pointer;

  padding: 15px 20px;
  margin-bottom: 18px;
`;

export const UserName = styled.div`
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.5px;
  color: var(--clr-grey-800);

  margin-bottom: 3px;
`;

export const UserActivity = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--clr-grey-600);
`;
