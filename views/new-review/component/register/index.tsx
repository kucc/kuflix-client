import Link from 'next/link';
import { useRouter } from 'next/router';
import * as S from './styles';

interface RegisterProps {
  message;
  movieId;
  link;
  handleClick;
}

const Register: React.FC<RegisterProps> = ({ message, movieId, link, handleClick }) => {
  const router = useRouter();

  const clickHandler = (movieId: number, link: string) => {
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <S.RegisterContainer>
      <S.RegisterButton onClick={() => clickHandler(movieId, link)}>
        {message}
      </S.RegisterButton>
    </S.RegisterContainer>
  );
};

export default Register;
