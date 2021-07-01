import styled from 'styled-components';

export const ReviewBoxContainer = styled.div`
  padding: 9px;
  padding-bottom: 5px;
  margin-bottom: 20px;

  border: 1px solid #8b95a1;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export const ReviewTitle = styled.div`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 5px;
`;

export const ReviewContent = styled.div`
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;

  width: 100%;
`;

/* 리뷰 메타 정보 */
export const ReviewMetaInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 리뷰 좋아요 버튼
export const ReviewLikeButton = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;

  font-size: 14px;
  width: 60px;
  height: 28px;

  border: 1px solid #8b95a1;
  border-radius: 15px;

  cursor: pointer;
  display: flex;
`;

export const ReviewLikeIcon = styled.div`
  font-size: 12px;
  line-height: 12px;
  margin-right: 3px;
`;

export const ReviewLikeCount = styled.div`
  font-size: 12px;
  color: #999999;
  font-weight: bold;
  line-height: 15px;
  text-align: center;

  /* border: 0.5px solid black; */
  width: 20px;
`;

// 리뷰 작성자, 작성날짜
export const ReviewUserContainer = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #999999;

  display: flex;
`;

export const ReviewUser = styled.div`
  font-size: 12px;
  margin-right: 5px;
`;

export const ReviewDate = styled.div`
  font-size: 12px;
  margin-left: 5px;
`;
