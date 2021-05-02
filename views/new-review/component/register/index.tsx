import Link from 'next/link';
import * as S from './styles';

interface RegisterProps {
  message;
  src;
  movieId;
  handlechange;
}

const Register: React.FC<RegisterProps> = ({ message, src, movieId, handlechange }) => {
  return (
    <S.RegisterContainer>
      <Link href={{ path: src, query: { movieId: movieId } }}>
        <S.RegisterButton onClick={handlechange}>{message}</S.RegisterButton>
      </Link>
    </S.RegisterContainer>
  );
};

export default Register;
