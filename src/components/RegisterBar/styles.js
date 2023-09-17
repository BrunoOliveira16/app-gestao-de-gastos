import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Form: styled.form`
    max-width: 90%;
    margin: 2rem auto;
    padding: 0.8rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.textThirdyColor};
    color: ${theme.colors.secondColor};
    border-radius: 5px;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.8rem;
      margin: 1rem auto;
      gap: 12px;
    }
  `,
  InputContainer: styled.div`
    width: 19%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 22.5%;
      gap: 5px;
    }

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 48%;
      gap: 1px;
    }
  `,
  Input: styled.input`
    width: 100%;
    padding: 2px;
    font-size: 1.1rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 95%;
      font-size: 1rem;
    }
  `,
  Select: styled.select`
    width: 100%;
    padding: 2px;
    font-size: 1.1rem;

    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 95%;
      font-size: 1rem;
    }
  `,
  Label: styled.label`
    font-size: 1.1rem;
    font-weight: bold;
  `,
  Button: styled.button`
    padding: 1.1rem 1.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: ${theme.colors.hoverPrimaryColor};
    color: ${theme.colors.textThirdyColor};
    border: none;
    border-radius: 5px;
    transition: all 0.6s;

    &:hover {
      background-color: ${theme.colors.secondColor};
    }

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
      padding: 0.5rem;
    }
  `
}
