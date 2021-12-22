import styled, { css } from "styled-components";

import { media, colors } from "../../styles";
import { FONT } from "../../constants";

const theme = {
  font: FONT.SECONDARY,

  button: {
    size: {
      large: "56px",
      small: "40px",
    },
    state: {
      inverse: {
        dark: {
          purple: {
            text: "#fff",
            color: colors.white,
            hover: "#6F6CFA",
            pressed: "#4B48F2",
          },
          cyan: {
            text: "#fff",
            color: "#001553",
            hover: "#02cccb",
            pressed: "#02b7ba",
          },
        },
        light: {
          purple: {
            text: "#5855F4",
            color: colors.white,
            hover: "#6F6CFA",
            pressed: "#4B48F2",
          },
          cyan: {
            text: "#2FD6D3",
            color: "#001553",
            hover: "#02cccb",
            pressed: "#02b7ba",
          },
        },
      },
      white: {
        text: "#5855F4",
        color: "#fff",
        hover: "#fff",
        pressed: "#fff",
      },
      cyan: {
        text: colors.white,
        color: colors.cyan["500"],
        hover: colors.cyan["400"],
        pressed: colors.cyan["600"],
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      purple: {
        text: colors.white,
        color: "#5855F4",
        hover: "#6F6CFA",
        pressed: "#4B48F2",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      yellow: {
        text: colors.white,
        color: colors.yellow["900"],
        hover: colors.yellow["700"],
        pressed: colors.yellow.darken,
      },
      blue: {
        text: colors.white,
        color: colors.blue["500"],
        hover: colors.blue["400"],
        pressed: colors.blue["600"],
      },
      turquoise: {
        text: colors.white,
        color: "#02CCCB",
        hover: "#02CCCB",
        pressed: "#02CCCB",
      },
    },
  },
};

const get =
  (key) =>
  ({ color, inverse, theme: currentTheme }) => {
    return inverse
      ? currentTheme.button.state.inverse[color][key]
      : theme.button.state[color][key];
  };

const buttonStyle = ({ size = "large" }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${size === "large" ? "20px 26px" : "12.5px 16px"};
  font-family: ${theme.font};
  width: fit-content;
  cursor: pointer;
  border: none;
  border-radius: ${size === "large" ? 12 : 8}px;
  text-transform: uppercase;
  font-size: ${size === "large" ? 15 : 13}px;
  line-height: ${size === "large" ? 16 : 15}px;
  font-weight: bold;
  text-align: center;
  outline: none;
  transition: 0.3s;
  margin: 0;
  white-space: nowrap;

  :disabled {
    color: rgba(255, 255, 255, 0.5);
  }

  @media ${media.mobile} {
    white-space: normal;
  }
`;

export const Button = styled.button`
  ${(props) => buttonStyle(props)};

  ${({ full }) => full && `width: 100%;`};
  width: 280px;
  height: 56px;
  background-color: ${get("color")};
  color: ${get("text")};
  text-decoration: none;

  :not(:disabled):hover {
    background-color: ${get("hover")};
  }

  :active {
    background-color: ${get("pressed")};
  }

  @media (max-width: 599px) {
    width: 300px;
    height: 48px;
  }
`;

Button.defaultProps = {
  color: "purple",
  full: false,
};

const inversedButtonStyle = ({ size = "large" }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${size === "large" ? "20px 28px" : "12.5px 16px"};
  font-family: ${theme.font};
  width: fit-content;
  cursor: pointer;
  border-radius: ${size === "large" ? 12 : 8}px;
  text-transform: uppercase;
  font-size: ${size === "large" ? 15 : 13}px;
  line-height: ${size === "large" ? 16 : 15}px;
  font-weight: bold;
  text-align: center;
  outline: none;
  transition: 0.3s;
  margin: 0;
  white-space: nowrap;
  text-decoration: none;

  @media ${media.mobile} {
    white-space: normal;
  }
`;

export const InversedButton = styled.button`
  ${(props) => inversedButtonStyle(props)};

  ${({ full }) => full && `width: 100%;`};
  width: 280px;
  height: 56px;
  background-color: transparent;
  color: ${get("text")};
  border: 2px solid ${get("border")};

  :not(:disabled):hover {
    color: ${get("hoverText")};
    border-color: ${get("hover")};
  }
  :active {
    color: ${get("pressed")};
    border-color: ${get("pressed")};
  }

  @media (max-width: 599px) {
    height: 48px;
    width: 300px;
  }
`;

InversedButton.defaultProps = {
  color: "purple",
  full: false,
};

export const StrokeButton = styled.button`
  font-family: ${theme.font};
  font-weight: 600;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: 0.4px;
  outline: none;
  transition: 0.3s color;
  cursor: pointer;
  background: none;
  color: ${(props) =>
    props.color === "purple" ? "#313C9D" : "rgba(255, 255, 255, 0.85)"};
  border: none;
  ${({ full }) => full && `width: 100%;`};
  text-decoration: underline;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  :not(:disabled):hover {
    color: ${(props) => (props.color === "purple" ? "#313C9D" : "#fff")};
  }

  @media ${media.mobile} {
    white-space: normal;
  }
`;

StrokeButton.defaultProps = {
  full: false,
};
