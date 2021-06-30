import styled from 'styled-components';

export const QuoteContainer = styled.div`
    border: 1px solid;
    border-radius: 10px;
    min-height: 150px;
    width: 100%;
    display: grid;
    padding: 15px;
`
export const QuoteInputTitle = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid #B0B8C1;
    ::placeholder {
      color: #B0B8C1;
      font-size: 16px;  
      font-weight: 700;
    }
`
export const QuoteInputContent = styled.textarea`
    width: 100%;
    border: none;
    padding: 5px;
    min-height: 100px;
    background-color: rgba(0, 0, 0, 0);
    ::placeholder {
      color: #B0B8C1;
      font-size: 16px;
      font-weight: 700;
    }
`
