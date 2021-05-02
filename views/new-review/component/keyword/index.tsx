import * as S from './styles';

interface KeywordProps {
}

const Keyword: React.FC<KeywordProps> = ({ }) => {
    return (
        <S.KeywordContainer>
            <S.KeywordButton>😆재미있는</S.KeywordButton>
            <S.KeywordButton>🏅연기 맛집인</S.KeywordButton>
            <S.KeywordButton>✍짜임새 있는</S.KeywordButton>
            <S.KeywordButton>😂감동적인</S.KeywordButton>
            <S.KeywordButton>✨연출 맛집인</S.KeywordButton>
            <S.KeywordButton>😱소름돋는</S.KeywordButton>
        </S.KeywordContainer>
    );
};

export default Keyword;
