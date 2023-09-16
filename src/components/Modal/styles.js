import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Fade: styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: ${theme.colors.overlayColor};
    z-index: 5;
  `,
  Modal: styled.div`
    max-width: 500px;
    padding: 2rem 1rem;
    margin: 0 auto;
    position: absolute;
    top: 8%;
    left: 0;
    right: 0;
    background-color: ${theme.colors.secondColor};
    border-radius: 10px;
  `,
  Form: styled.form`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  `,
  Label: styled.label`
    font-size: 1.3rem;
    color: ${theme.colors.textThirdyColor};
  `,
  Input: styled.input`
    font-size: 1.1rem;
    margin-bottom: 1rem;
    padding: 8px;
  `,
  ContainerButton: styled.div`
    display: flex;
    gap: 2%;
  `,
  Button: styled.button`
    width: 49%;
    padding: 8px;
    font-size: 1.1rem;
    border: none;

    &:hover {
      opacity: 0.8;
    }

    ${(props) =>
      props.colorButton === 'danger'
        ? `
            background-color: ${theme.colors.errorColor};
            color: ${theme.colors.textThirdyColor}
        `
        : `
            background-color: ${theme.colors.sucessColor};
            color: ${theme.colors.textThirdyColor}
        `};
  `
}
