import * as S from './styles';

interface InfoProps {
  info;
}

const Info: React.FC<InfoProps> = ({ info }) => {
  return (
    <S.MovieInfo>
      <S.InfoImg src={info.posterImageUrl} alt={`${info.name}Poster`} />
      <S.InfoContainer>
        <S.InfoTitleContainer>
          <S.InfoTitle>{info.name} |</S.InfoTitle>
          <S.InfoOriginalTitle>{info.englishName}</S.InfoOriginalTitle>
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
              <S.InfoValue>{info.genre}</S.InfoValue>
              <S.InfoValue>{info.releasedDate}</S.InfoValue>
              <S.InfoValue>{info.director}</S.InfoValue>
              <S.InfoValue>{info.audienceCount}</S.InfoValue>
              <S.InfoValue>⭐️{info.score}</S.InfoValue>
            </S.InfoTableRow>
          </S.InfoTableBody>
        </S.InfoTable>
        <S.InfoOverview>{info.description}</S.InfoOverview>
      </S.InfoContainer>
    </S.MovieInfo>
  );
};

export default Info;
