import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-grey-50: #f9fafb;
    --clr-grey-100: #f2f4f6;
    --clr-grey-200: #e5e8eb;
    --clr-grey-300: #d1d6db;
    --clr-grey-400: #b0b8c1;
    --clr-grey-500: #8b95a1;
    --clr-grey-600: #6b7684;
    --clr-grey-700: #4e5968;
    --clr-grey-800: #333d4b;
    --clr-grey-900: #191f28;;
    --clr-red-light: #F43434;
  
    --transition: all 0.3s linear;
  }
  * {
    margin: 0;
    padding: 0;
    font-display: 'block';
    box-sizing: border-box; /* 테두리를 기준으로 박스의 크기를 결정함 */
    -webkit-font-smoothing: antialiased; /* 폰트를 부드럽게 해줌 */
    -moz-osx-font-smoothing: grayscale;
  }
  html,
  body {
    font-family: 'NanumSquare', sans-serif;
    width : 100%;
    height: 100%;
    margin: 0;

    background-color: var(--clr-grey-50);

  }::-webkit-scrollbar { /* 스크롤바 제거 */
    display: none;
  }

  button {
    cursor: pointer;
    background-color: none;
  }

  input[type=password] {
    font-family: "Arial";
  }

  textarea:focus {
    outline: none;
  }
  
  button:focus {
    outline: none;
  }

  input:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  /* @media screen and (min-width: 640px) {
  } */
`;

export default GlobalStyles;
