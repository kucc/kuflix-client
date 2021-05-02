import * as S from './styles';

interface QuoteProps {
    quote;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
    return (
        <S.MovieQuote>
            <S.QuoteContent>{quote.content}</S.QuoteContent>
        </S.MovieQuote>
    );
};

export default Quote;
