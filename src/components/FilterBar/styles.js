import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Container: styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 90%;
      padding: 1rem;
    }
  `,
  Content: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 50%;
      flex-direction: column;
      gap: 5px;

      h3 {
        font-size: 1rem;
      }
    }
  `,
  Select: styled.select`
    width: 95%;
    font-size: 1.2rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      font-size: 1rem;
    }
  `,
  FilterValue: styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  `
}
