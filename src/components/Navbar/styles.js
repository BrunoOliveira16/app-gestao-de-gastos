import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  List: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 0;
      transition: all 1s;

      ${(props) =>
        props.$showmenu &&
        `
          width: 50%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 2;
          background-color: ${theme.colors.secondColor};
          transition: all 1s;
      `}
    }
  `,
  Mobile: styled.div`
    display: none;
    font-size: 1.8rem;
    color: ${theme.colors.textThirdyColor};

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      display: flex;
      justify-content: center;
      position: fixed;
      top: 5%;
      right: 3%;
      z-index: 3;
    }
  `,
  ListItem: styled.li`
    display: flex;
    font-size: 1.3rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      display: none;
      ${(props) => props.$showmenu && `display: flex;`}
    }

    a,
    svg {
      color: ${theme.colors.textThirdyColor};
      transition: all 0.5s;

      &:hover {
        color: ${theme.colors.textSecondColor};
      }
    }
  `
}
