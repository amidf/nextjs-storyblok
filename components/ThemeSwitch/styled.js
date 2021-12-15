import styled from "styled-components"

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 14px;

  label {
    opacity: 0;
    visibility: hidden;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .circle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props =>
      props.currentTheme === "light" ? "#b0b6cc" : "#3a3997"};
    transition: 0.4s;
    border-radius: 7px;
    z-index: 1;
  }

  .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    left: ${props => (props.currentTheme === "light" ? 0 : 13)}px;
    bottom: -3px;
    z-index: 2;
    box-shadow: 0px 0.25px 1px rgba(0, 0, 0, 0.039),
      0px 0.85px 3px rgba(0, 0, 0, 0.19);
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${props =>
      props.currentTheme === "light" ? "#fff" : "#817FF2"};
    transition: 0.4s;
    border-radius: 50%;
  }
`
