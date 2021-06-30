import styled from 'styled-components';

export const MovieInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const InfoImg = styled.img`
  border-radius: 1em;
  width: 45%;
  max-height: 250px;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  width: 50%;
  min-width: 150px;
`;

export const InfoTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
  margin: 5px;
`;

export const InfoTitle = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  // border-right: 1px solid #C4C4C4;
`;

export const InfoOriginalTitle = styled.div`
  padding: 5px;
`;

export const InfoTable = styled.table`
  font-size: 12px;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const InfoTableHeader = styled.thead`
  color: #999999;
`;

export const InfoTableRow = styled.tr`
  text-align: left;
`;

export const InfoValueMeta = styled.th`
  display: block;
  padding-right: 10px;
  padding-bottom: 5px;
  border-right: 2px solid #c4c4c4;
`;

export const InfoTableBody = styled.tbody`
  display: flex;
  margin-left: 10px;
`;

export const InfoValue = styled.td`
  display: block;
  padding-bottom: 5px;
`;

export const InfoOverview = styled.div`
  padding: 5px 0;
  font-size: 11px;
`;
