import Link from 'next/link';
import * as S from './styles';

const Header: React.FC = () => {
  const user = {};

  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/">
          <S.LogoContainer>
            <S.LogoIcon />
          </S.LogoContainer>
        </Link>

        <S.ProfileContainer>
          {user ? (
            <Link href="/user">
              <S.ProfileAvatar>
                <S.LoginButton />
              </S.ProfileAvatar>
            </Link>
          ) : (
            <Link href="/login">
              <S.LoginButton />
            </Link>
          )}
        </S.ProfileContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
