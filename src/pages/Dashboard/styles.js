import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Title: styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin-block: 2rem;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin-block: 0.8rem;
      font-size: 1rem;
    }
  `,
  Container: styled.div`
    width: 95%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
      gap: 1rem;
    }
  `,
  Content: styled.div`
    width: 49.5%;
    padding: 1rem;
    text-align: center;
    background-color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
    }
  `
}
