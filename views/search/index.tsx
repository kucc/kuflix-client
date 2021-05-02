import Layout from '../../components/layout';
import * as S from './styles';

const SearchPage = () => {
  return (
    <Layout>
      <S.SearchPage>
        <S.SearchInput placeholder="제목 또는 감독을 입력해주세요." />
      </S.SearchPage>
    </Layout>
  );
};

export default SearchPage;
