import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  MyExpenses: styled.div`
    position: relative;
  `,
  Title: styled.h2`
    text-align: center;
    text-transform: uppercase;
    padding-block: 2rem;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding-block: 0.8rem;
      font-size: 1rem;
    }
  `,
  Container: styled.div`
    max-width: 90%;
    margin: 2rem auto;
    background-color: ${theme.colors.thirdyColor};
    color: ${theme.colors.secondColor};
    display: block;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: none;
    }
  `,
  HeaderContent: styled.div`
    display: flex;
    // background-color: ${theme.colors.textThirdyColor};
  `,
  Header: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      display: none;
    }
  `,
  HeaderItem: styled.li`
    width: 25%;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      font-size: 1rem;
    }
  `,
  HeaderAction: styled.li`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.3rem;
    font-weight: bold;
  `,
  BodyContent: styled.div`
    display: flex;
    background-color: ${theme.colors.textThirdyColor};
  `,
  Body: styled.ul`
    width: 100%;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    background-color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      flex-wrap: wrap;
      gap: 1rem;
    }
  `,
  BodyItem: styled.li`
    width: 25%;
    font-size: 1.1rem;
    text-align: center;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 45%;
      font-size: 1rem;

      ${(props) =>
        props.$textBold &&
        `
        font-weight: bold;
        font-size: 1.1rem;
      `}
    }
  `,
  BodyAction: styled.li`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 30%;
      flex-direction: column;
    }
  `
}
