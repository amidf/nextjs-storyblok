import styled from "styled-components"

export const Box = styled.div``

export const Container = styled.div`
  width: 100vw;
  @media (max-width: 600px) {
    margin-left: -24px;
  }
`

export const Dots = styled.div`
  margin-top: 32px;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 599px) {
    margin-top: 16px;
  }
`

export const Dot = styled.li`
  span {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin: 0 8px;
    background-color: ${p =>
      p.active ? p.theme.carauselDotActive : p.theme.carauselDot};
    transform: scale(1);
    outline: none;
    padding: 0;
  }

  @media (max-width: 599px) {
    span {
      width: 8px;
      height: 8px;
    }
  }
`
