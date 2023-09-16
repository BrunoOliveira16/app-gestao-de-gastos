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
  `,
  Header: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `,
  HeaderItem: styled.li`
    width: 20%;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  `,
  Body: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: ${theme.colors.textThirdyColor};
  `,
  BodyItem: styled.li`
    width: 20%;
    font-size: 1.1rem;
    text-align: center;
  `,
  BodyAction: styled.li`
    width: 20%;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  `

  //   Card: styled.div`
  //     width: 100%;
  //     padding: 1rem;
  //     display: flex;
  //     gap: 0.8rem;
  //     background-color: ${theme.colors.secondColor};
  //   `,
  //   CardLogo: styled.div`
  //     width: 10%;
  //     display: flex;
  //     align-items: center;
  //   `,
  //   CardBody: styled.div`
  //     width: 85%;
  //     display: flex;
  //     flex-direction: column;
  //     gap: 0.5rem;
  //   `,
  //   CardFeature: styled.div`
  //     width: 5%;
  //     display: flex;
  //     flex-direction: column;
  //     align-items: end;
  //     justify-content: center;
  //     gap: 1rem;
  //   `,
  //   CardContent: styled.div`
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //   `,
  //   TextPrimary: styled.h3`
  //     font-size: 1.1rem;
  //     font-weight: bold;
  //   `,
  //   TextSecond: styled.p`
  //     font-size: 0.8rem;
  //     font-style: italic;
  //     font-weight: 100;
  //     color: ${theme.colors.textThirdyColor};
  //   `
}
