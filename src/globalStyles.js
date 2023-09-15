import styled, { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textPrimaryColor};
    min-width: 360px;
}

a,
li,
button,
svg {
    cursor: pointer;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`

export default GlobalStyle
