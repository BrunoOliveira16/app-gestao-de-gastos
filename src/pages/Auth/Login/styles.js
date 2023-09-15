import styled from 'styled-components'
import theme from '../../../theme'

export const S = {
  Login: styled.div`
    @media screen and (max-width: ${theme.breakpoints.mobileLG}) {
      width: 90%;
      margin: 0 auto;
      padding-bottom: 3rem;
    }
  `,
  Title: styled.h2`
    text-align: center;
    text-transform: uppercase;
    margin-block: 2rem;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin-block: 0.8rem;
      font-size: 1rem;
    }
  `,
  Form: styled.form`
    max-width: 40%;
    margin: 2rem auto;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      max-width: 60%;
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      max-width: 90%;
    }
  `,
  Input: styled.input`
    width: 100%;
    padding: 0.5rem;
    font-size: 1.2rem;
  `,
  Label: styled.label`
    display: flex;
    flex-direction: column;
    margin-block: 1rem;
    font-size: 1.3rem;
  `,
  Button: styled.button`
    width: 100%;
    padding: 0.5rem 0;
    margin-block: 1.5rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: ${theme.colors.textSecondColor};
    color: ${theme.colors.textPrimaryColor};
    border: none;
    border-radius: 5px;
    transition: all 0.6s;

    &:hover {
      background-color: ${theme.colors.hoverPrimaryColor};
    }
  `,
  Text: styled.p`
    text-align: center;

    a {
      color: ${theme.colors.textSecondColor};
    }
  `,
  TextError: styled.p`
    text-align: center;
    color: ${theme.colors.errorColor};
  `
}
