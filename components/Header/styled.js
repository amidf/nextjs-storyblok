import styled from "styled-components";

import {
  DESKTOP_HEADER_HEIGHT,
  MOBILE_HEADER_HEIGHT,
  EXTRA_MOBILE_HEADER_HEIGHT,
  FONT,
} from "../../constants";

export const Container = styled.header`
  width: 100%;
  min-height: ${DESKTOP_HEADER_HEIGHT}px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${(props) => props.theme.headerBorder};
  background-color: ${(props) => props.theme.bg || "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .inner {
    max-width: 1440px;
    width: 100%;
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    margin-right: 24px;

    a:first-child {
      margin-right: 24px;
    }

    a,
    button {
      width: 100%;
      height: 32px;
    }

    button {
      padding: 0 8.5px;
    }

    a,
    a:hover,
    a:active,
    button:hover,
    button:active,
    button {
      ${(props) =>
        props.theme.buttonInverseColor
          ? "color: " + props.theme.buttonInverseColor
          : ""};
    }
  }

  .soc-container {
    display: flex;
    align-items: center;

    margin: 0 24px;
  }

  @media only screen and (max-width: 1199px) {
    height: ${MOBILE_HEADER_HEIGHT}px;

    &.search-open {
      top: -12px;
    }
  }

  @media only screen and (max-width: 599px) {
    height: ${EXTRA_MOBILE_HEADER_HEIGHT}px;

    &.search-open {
      top: -15px;
    }
  }
`;

export const LogoContainer = styled.div``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const SocLink = styled.a`
  margin-right: 24px;

  svg {
    path {
      transition: 0.3s;
      fill: ${(props) => props.theme.text};
    }
  }

  :hover {
    svg {
      path {
        fill: ${(props) => props.theme.socLinkHover};
      }
    }
  }

  :last-child {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: 0.3s;
  margin: 0 12px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }

  :hover {
    color: ${(props) => props.theme.socLinkHover};
  }

  @media (max-width: 1199px) {
    margin: 0 8px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  z-index: 2;

  opacity: ${(props) => (props.searchFocused ? 0 : 1)};
  visibility: ${(props) => (props.searchFocused ? "hidden" : "visible")};

  @media only screen and (max-width: 910px) {
    > a:not(:nth-child(2)) {
      display: none;
    }

    > a {
      margin: 0 16px;
    }
  }

  @media only screen and (max-width: 670px) {
    > a {
      display: none;
    }
  }
`;
