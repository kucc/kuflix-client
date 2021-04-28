import * as S from './styles';
import Layout from '../../components/layout';
import GoogleLoginButton from './component/google-login';

const LoginPage = () => {
  return (
    <Layout>
      <S.LoginPage>
        <S.LoginPageTitle>쿠플릭스 로그인</S.LoginPageTitle>
        <S.ServiceLogo />
        <S.LoginButtonContainer>
          <GoogleLoginButton />
        </S.LoginButtonContainer>
      </S.LoginPage>
    </Layout>
  );
};

export default LoginPage;
