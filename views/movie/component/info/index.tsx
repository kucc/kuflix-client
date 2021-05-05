import * as S from './styles';

interface InfoProps {
    info;
}

const Info: React.FC<InfoProps> = ({ info }) => {
    return (
        <S.MovieInfo>
            <S.InfoImg src={info.poster_path} alt={`${info.title}Poster`} />
            <S.InfoContainer>
                <S.InfoTitleContainer>
                    <S.InfoTitle>{info.title} |</S.InfoTitle>
                    <S.InfoOriginalTitle>{info.original_title}</S.InfoOriginalTitle>
                </S.InfoTitleContainer>
                <S.InfoTable>
                    <S.InfoTableHeader>
                        <S.InfoTableRow>
                            <S.InfoValueMeta>장르</S.InfoValueMeta>
                            <S.InfoValueMeta>개봉</S.InfoValueMeta>
                            <S.InfoValueMeta>감독</S.InfoValueMeta>
                            <S.InfoValueMeta>관객수</S.InfoValueMeta>
                            <S.InfoValueMeta>평점</S.InfoValueMeta>
                            <S.InfoValueMeta></S.InfoValueMeta>
                        </S.InfoTableRow>
                    </S.InfoTableHeader>
                    <S.InfoTableBody>
                        <S.InfoTableRow>
                            <S.InfoValue>{info.genre_ids}</S.InfoValue>
                            <S.InfoValue>{info.release_date}</S.InfoValue>
                            <S.InfoValue>토드 필립스</S.InfoValue>
                            <S.InfoValue>525만명</S.InfoValue>
                            <S.InfoValue>⭐️{info.vote_average}</S.InfoValue>
                            <S.InfoValue></S.InfoValue>
                        </S.InfoTableRow>
                    </S.InfoTableBody>
                </S.InfoTable>
                <S.InfoOverview>{info.overview}</S.InfoOverview>
            </S.InfoContainer>
        </S.MovieInfo>
    );
};

export default Info;
