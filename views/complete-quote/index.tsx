import { NextPage } from 'next';
import Layout from '../../components/layout';
import Register from '../new-review/component/register';
import * as S from './styles';
// import WriteHeader from '../new-review/component/writeheader';

interface CompleteQuotePageProps {
    title;
    movieId;
}

const CompleteQuotePage: NextPage<CompleteQuotePageProps> = ({ title, movieId }) => {
    return (
        <Layout>
            <S.CompleteQuotePageContainer>
                <S.CompleteMessageContainer>
                    🎉<S.CompleteMessage>'{title}'에<br/>명대사를 등록했어요!</S.CompleteMessage>🎉
                </S.CompleteMessageContainer>
                <S.CompletRegisterContainer>
                    <Register message="같은 영화 리뷰 등록하기" src={`/movie/[${movieId}]/new-review`} movieId={movieId} handlechange={console.log("뻐꾹")} />
                    <Register message="등록한 명대사 보기" src={`/movie/${movieId}`} movieId={movieId} handlechange={console.log("응애")} />
                </S.CompletRegisterContainer>
            </S.CompleteQuotePageContainer>
        </Layout >
    );
};

CompleteQuotePage.getInitialProps = ({ req, res, query, ...rest }) => {
    const movieId = query.movieId;
    const title = query.title;

    return { movieId, title }
};

export default CompleteQuotePage;
