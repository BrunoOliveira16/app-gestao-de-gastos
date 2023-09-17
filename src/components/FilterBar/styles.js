import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Container: styled.div`
    width: 60%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 90%;
      padding: 1rem;
    }
  `,
  Content: styled.div`
    width: 50%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 100%;
      padding: 0;
      flex-direction: column;
      gap: 5px;

      h3 {
        font-size: 1rem;
      }
    }
  `,
  Select: styled.select`
    width: 50%;
    font-size: 1.2rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 100%;
      font-size: 1rem;
    }
  `,
  FilterValue: styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  `
}
