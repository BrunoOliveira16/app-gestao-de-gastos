import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Main: styled.main`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
  `,
  Section: styled.section`
    padding: 4rem 0;
  `,
  ContainerA: styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      display: block;
    }
  `,
  ContainerB: styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column-reverse;
    }
  `,
  Image: styled.img`
    width: 50%;
    border: 2px solid #000;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
    }
  `,
  Details: styled.div`
    line-height: 1.3rem;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  `,
  Title: styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `
}
