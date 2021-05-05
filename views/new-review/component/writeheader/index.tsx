import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

interface WriteHeaderProps {
  title;
  date;
  movieId;
}

const WriteHeader: React.FC<WriteHeaderProps> = ({ title, date, movieId }) => {
  const router = useRouter();

  const clickHandler = (movieId: number) => {
    router.push(`/movie/${movieId}`);
  };

  return (
    <S.WriteHeaderContainer>
      <S.HeaderInfoContainer>
        <S.HeaderInfoTitle>{title} | </S.HeaderInfoTitle>
        <S.HeaderInfoDate>{date}</S.HeaderInfoDate>
      </S.HeaderInfoContainer>
      <S.HeaderLink onClick={() => clickHandler(movieId)}>자세히보기</S.HeaderLink>
    </S.WriteHeaderContainer>
  );
};

export default WriteHeader;
