import * as S from './styles';
import { RegisterProps } from './types';

const Register: React.FC<RegisterProps> = ({ message, handleClick, color, disabled }) => {
  return (
    <S.RegisterContainer>
      <S.RegisterButton onClick={handleClick} color={color} disabled={disabled}>
        {message}
      </S.RegisterButton>
    </S.RegisterContainer>
  );
};

export default Register;
