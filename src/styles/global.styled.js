import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

 html {
    color: ${(props) => props.theme.text};
  }
`
