import { useRouter } from 'next/router';
import * as S from './styles';

interface WriteHeaderProps {
  name;
  releasedDate;
  movieId;
}

const WriteHeader: React.FC<WriteHeaderProps> = ({ name, releasedDate, movieId }) => {
  const router = useRouter();

  const clickHandler = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <S.WriteHeaderContainer>
      <S.HeaderInfoContainer>
        <S.HeaderInfoTitle>{name} | </S.HeaderInfoTitle>
        <S.HeaderInfoDate>{releasedDate}</S.HeaderInfoDate>
      </S.HeaderInfoContainer>
      <S.HeaderLink onClick={() => clickHandler(movieId)}>자세히보기</S.HeaderLink>
    </S.WriteHeaderContainer>
  );
};

export default WriteHeader;
