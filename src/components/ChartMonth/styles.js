import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    margin: 0 auto;
    background-color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      padding: 0.5rem;
    }
  `,
  Menu: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    select {
      margin-left: 1rem;
      font-size: 1.2rem;

      @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      padding: 0.5rem;

      h2 {
        font-size: 1.1rem;
      }
    }
  `,
  Content: styled.div`
    width: 100%;
    height: 400px;
    display: flex;
  `
}
