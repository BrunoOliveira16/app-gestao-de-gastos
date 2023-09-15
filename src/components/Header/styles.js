import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Header: styled.header`
    background-color: ${theme.colors.secondColor};
  `,
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    max-width: 1440px;
    min-width: 360px;
    margin: 0 auto;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      display: block;
    }
  `,
  HeaderBrand: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-style: italic;

    img {
      width: 64px;
      height: 64px;
      margin-right: 0.5rem;
    }

    h1 {
      color: ${theme.colors.textThirdyColor};
    }
  `
}
