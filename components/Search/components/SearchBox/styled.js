import styled, { css } from "styled-components"

import {
  FONT,
  MOBILE_HEADER_HEIGHT,
  EXTRA_MOBILE_HEADER_HEIGHT,
} from "src/developers/constants"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${props => (props.$isFocused ? "100%" : "fit-content")};
  margin-right: 24px;

  input {
    ::-webkit-input-placeholder {
      color: ${props =>
        props.$isFocused
          ? props.theme.searchPlaceholderActive
          : props.theme.searchPlaceholder};
    }

    ::-ms-input-placeholder {
      color: ${props =>
        props.$isFocused
          ? props.theme.searchPlaceholderActive
          : props.theme.searchPlaceholder};
    }

    ::placeholder {
      color: ${props =>
        props.$isFocused
          ? props.theme.searchPlaceholderActive
          : props.theme.searchPlaceholder};
    }
  }

  :hover {
    input {
      ::-webkit-input-placeholder {
        color: ${props => !props.$isFocused && props.theme.text};
      }

      ::-ms-input-placeholder {
        color: ${props => !props.$isFocused && props.theme.text};
      }

      ::placeholder {
        color: ${props => !props.$isFocused && props.theme.text};
      }
    }

    .shortcut-icon {
      svg {
        path {
          fill: ${props => !props.$isFocused && props.theme.text};
          fill-opacity: 1;
        }
      }
    }
  }

  .shortcut-icon {
    display: flex;
    align-items: center;

    svg {
      path {
        transition: 0.3s;
      }
    }
  }

  .btn {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    outline: none;
    padding: 0;
    cursor: pointer;

    .reset-icon {
      path {
        transition: 0.3s;
        fill: ${props => props.theme.text};
      }

      :hover {
        path {
          fill: ${props => props.theme.socLinkHover};
        }
      }
    }

    .search-icon {
      margin-right: 8px;
      display: ${props => (props.$isFocused ? "none" : "block")};

      path {
        transition: 0.3s;
        fill: ${props => props.theme.text};
      }
    }
  }

  @media only screen and (max-width: 1199px) {
    width: ${props => (props.$isFocused ? "100%" : "142px")};
    margin-right: 0;
    padding: 0;
    border-bottom: 1px solid
      ${props => (props.$isFocused ? "#DEE0E6" : "rgba(0, 0, 0, 0)")};

    .shortcut-icon {
      display: none;
    }

    .search-icon {
      display: ${props => (props.$isFocused ? "none" : "block")};
    }

    .reset-icon {
      margin-right: 16px;
    }

    input {
      height: ${props =>
        props.$isFocused ? MOBILE_HEADER_HEIGHT + "px" : "auto"};
      margin: 0;
      padding: ${props => (props.$isFocused ? "14px 16px" : "0")};
      transition: none;
    }
  }

  @media (max-width: 910px) {
    width: ${props => (props.$isFocused ? "100%" : "40px")};
  }

  @media (max-width: 805px) {
    width: ${props => (props.$isFocused ? "100%" : 0)};

    input {
      min-width: 0;
      opacity: ${props => (props.$isFocused ? 1 : 0)};
    }
  }

  @media (max-width: 670px) {
    .btn {
      margin-right: 16px;

      svg {
        margin: 0;
      }
    }
  }

  @media (max-width: 599px) {
    input {
      height: ${props =>
        props.$isFocused ? EXTRA_MOBILE_HEADER_HEIGHT + "px" : "auto"};
    }
  }
`

const placeholderFocusedStyle = css`
  ::-webkit-input-placeholder {
    color: #99a2b4;
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    font-family: ${FONT.PRIMARY};
  }

  ::-ms-input-placeholder {
    color: #99a2b4;
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    font-family: ${FONT.PRIMARY};
  }

  ::placeholder {
    color: #99a2b4;
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    font-family: ${FONT.PRIMARY};
  }
`

export const Input = styled.input`
  min-width: ${props => (props.$isFocused ? 84 : 0)}px;
  width: ${props => (props.$isFocused ? 100 : 0)}%;

  :not(:focus) {
    cursor: pointer;
  }

  transition: 0.3s color;

  outline: none;
  border: none;
  background-color: transparent;

  padding: 0;
  margin-right: 8px;

  font-family: ${FONT.PRIMARY};
  font-weight: normal;
  font-size: 15px;
  line-height: 28px;
  color: ${props => props.theme.text};

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    transition: 0.3s color;
    color: rgba(0, 21, 83, 0.5);
    font-weight: 600;
    font-size: 13px;
    line-height: 12px;
    font-family: ${FONT.PRIMARY};
  }

  ::-ms-input-placeholder {
    transition: 0.3s color;
    color: rgba(0, 21, 83, 0.5);
    font-weight: 600;
    font-size: 13px;
    line-height: 12px;
    font-family: ${FONT.PRIMARY};
  }

  ::placeholder {
    transition: 0.3s color;
    color: rgba(0, 21, 83, 0.5);
    font-weight: 600;
    font-size: 13px;
    line-height: 12px;
    font-family: ${FONT.PRIMARY};
  }

  ${props => props.$isFocused && placeholderFocusedStyle}

  @media only screen and (max-width: 1199px) {
    font-size: 15px;
    line-height: 28px;
    padding: 14px 16px;
  }
`

export const Label = styled.div`
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 13px;
  line-height: 12px;
  margin-right: 8px;

  display: ${props => (props.$isFocused ? "none" : "block")};

  color: ${props => props.theme.searchPlaceholder};
  transition: 0.3s;

  :hover {
    color: ${props => props.theme.text};
  }

  @media (max-width: 1199px) {
    margin-right: 0;
  }

  @media (max-width: 910px) {
    display: none;
  }
`
