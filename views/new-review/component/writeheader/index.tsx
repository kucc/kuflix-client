import Link from 'next/link';
import * as S from './styles';

interface WriteHeaderProps {
    title;
    date;
    movieId;
}

const WriteHeader: React.FC<WriteHeaderProps> = ({ title, date, movieId }) => {
    return (
        <S.WriteHeaderContainer>
            <S.HeaderInfoContainer>
                <S.HeaderInfoTitle>{title} | </S.HeaderInfoTitle>
                <S.HeaderInfoDate>{date}</S.HeaderInfoDate>
            </S.HeaderInfoContainer>
            <Link href={{ path: `/movie/${movieId}`, query: { movieId: movieId } }}><S.HeaderLink>자세히보기</S.HeaderLink></Link>
        </S.WriteHeaderContainer>
    );
};

export default WriteHeader;
