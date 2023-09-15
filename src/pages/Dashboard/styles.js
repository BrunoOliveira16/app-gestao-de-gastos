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
  `
}
