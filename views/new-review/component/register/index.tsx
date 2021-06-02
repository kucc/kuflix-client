import { useRouter } from 'next/router';
import * as S from './styles';
import { RegisterProps } from './types';

const Register: React.FC<RegisterProps> = ({ message, movieId, link, handleClick, color, disabled }) => {
  const router = useRouter();

  const clickHandler = (movieId: number, link: string) => {
    // 서버 연결, 잘되면 push / 안되면 error
    router.push(`/movie/${movieId}/${link}`);
  };

  return (
    <S.RegisterContainer>
      <S.RegisterButton onClick={() => clickHandler(movieId, link)} color={color} disabled={disabled}>{message}</S.RegisterButton>
    </S.RegisterContainer>
  );
};

export default Register;
