import { useRouter } from 'next/router';
import * as S from './styles';
import { RegisterProps } from './types';

const Register: React.FC<RegisterProps> = ({ message, movieId, link, color }) => {
  const router = useRouter();

  const clickHandler = (movieId: number, link: string) => {
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <S.RegisterContainer>
      <S.RegisterButton onClick={() => clickHandler(movieId, link)} color={color}>{message}</S.RegisterButton>
    </S.RegisterContainer>
  );
};

export default Register;
