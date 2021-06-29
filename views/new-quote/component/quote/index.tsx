import * as S from './styles';

interface QuoteProps {
  quoteForms;
  handleChange;
}

const Quote: React.FC<QuoteProps> = ({ quoteForms, handleChange }) => {
  return (
    <S.QuoteContainer>
      <S.QuoteInputContent
        id="quoteContentInput"
        name="content"
        value={quoteForms.content}
        onChange={handleChange}
        placeholder="명대사를 입력해주세요. 글자 수는 N자로 제한됩니다."
      />
    </S.QuoteContainer>
  );
};

export default Quote;
