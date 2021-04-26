import React, { useState } from 'react';
import * as S from './styles';

//temp
type Post = {
  id: number;
  userId: number;
  categoryId: number;
  movieId: number;
  movieTitle: string;
  movieYear: string;
  reviewTitle?: string;
  reviewContent?: string;
  quote?: string;
  likedCount: number;
};

interface UserPostProps {
  post: Post;
}

function UserPost({ post }: UserPostProps) {
  const [showAll, setShowAll] = useState(false);
  const clickHandler = () => {
    setShowAll(!showAll);
    // router.push(`/movie/${post.movieId}`); //OR to moviePage
  };

  return (
    <S.UserPost onClick={clickHandler}>
      <S.MovieInfo>
        <S.MovieTitle>{post.movieTitle}</S.MovieTitle>|<S.MovieYear>{post.movieYear}</S.MovieYear>
      </S.MovieInfo>

      <S.PostContainer>
        <S.PostTitleRow showAll={showAll}>
          <S.PostLikes>
            <S.LikeIcon>❤️</S.LikeIcon>
            {post.likedCount}개
          </S.PostLikes>
          {post.reviewTitle && <S.PostTitle showAll={showAll}>{post.reviewTitle}</S.PostTitle>}
          {post.quote && <S.PostTitle showAll={showAll}>"{post.quote}"</S.PostTitle>}
        </S.PostTitleRow>

        {post.reviewContent && (
          <S.PostContent showAll={showAll}>{post.reviewContent}</S.PostContent>
        )}
      </S.PostContainer>
    </S.UserPost>
  );
}

export default React.memo(UserPost);
