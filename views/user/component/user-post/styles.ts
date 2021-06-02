import styled from 'styled-components';
import { PostContentStyleProps } from './types';

export const UserPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  color: var(--clr-grey-800);
  border-radius: 8px;
  background-color: white;
  border: 1px solid #b0b8c1;

  cursor: pointer;
  margin-bottom: 18px;

  /* animation: show 0.5s linear forwards
  @keyframes show {
    from {
      transform: translateY(-4px);
    }
    to {
      transform: translateY(0);
    }
  }*/
`;

export const MovieInfo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  line-height: 42px;
  color: var(--clr-grey-100);
  border-radius: 7px 7px 0px 0px;
  background-color: var(--clr-grey-800);

  padding: 0 20px;
`;

export const MovieTitle = styled.div`
  font-size: 15px;
  font-weight: 500;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-right: 10px;
`;

export const MovieYear = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-left: 10px;
`;

export const PostContainer = styled.div`
  width: 100%;
  padding: 10px 18px 13px 18px;
`;

export const PostTitleRow = styled.div<PostContentStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  white-space: ${(props) => (props.showAll ? 'none' : 'nowrap')};
`;

export const PostTitle = styled.div<PostContentStyleProps>`
  width: 80%;
  font-weight: 500;
  font-size: 15px;
  color: var(--clr-grey-800);
  background-color: white;

  margin-top: 1px;
  text-overflow: ellipsis;
  overflow: ${(props) => (props.showAll ? 'none' : 'hidden')};
`;

export const PostLikes = styled.div`
  height: 20px;
  width: 65px;
  display: flex;
  align-items: center;

  border: 1px solid var(--clr-grey-400);
  color: var(--clr-grey-600);
  border-radius: 20px;
  font-size: 12px;
  line-height: 12px;

  padding: 0 8px;
  margin-right: 10px;
`;

export const LikeIcon = styled.div`
  font-size: 10px;
  line-height: 10px;

  margin-right: 5px;
`;

export const PostContent = styled.div<PostContentStyleProps>`
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  color: var(--clr-grey-700);

  border-radius: 0px 0px 8px 8px;
  background-color: white;

  overflow: ${(props) => (props.showAll ? 'none' : 'hidden')};
  display: ${(props) => (props.showAll ? 'flex' : '-webkit-box')};
  -webkit-line-clamp: 2; //IE not supported
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  padding: 0px 2px;
  margin-top: 10px;
`;
