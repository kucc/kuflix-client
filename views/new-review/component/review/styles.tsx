import styled from 'styled-components';

export const ReviewContainer = styled.div`
    border: 1px solid;
    border-radius: 10px;
    min-height: 150px;
    width: 100%;
    display: grid;
    padding: 15px;
`
export const ReviewInputTitle = styled.input`
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
export const ReviewInputContent = styled.textarea`
    width: 100%;
    border: none;
    padding: 5px;
    min-height: 100px;
    ::placeholder {
      color: #B0B8C1;
      font-size: 16px;
      font-weight: 700;
    }
`
