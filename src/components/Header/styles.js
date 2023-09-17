import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Header: styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
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
      padding: 8px;
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

      @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
        font-size: 1.2rem;
      }
    }
  `
}
