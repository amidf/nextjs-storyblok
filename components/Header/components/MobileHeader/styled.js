import styled from "styled-components"
import {
  MOBILE_HEADER_HEIGHT,
  EXTRA_MOBILE_HEADER_HEIGHT,
} from "../../../constants"

import { LogoContainer, SocLink, Nav, Box, Link, InnerLink } from "../../styled"

export const Container = styled.div`
  position: relative;

  &.inner {
    display: flex;
    padding: 0 16px;
    height: 100%;
  }

  ${LogoContainer} {
    display: flex;
    align-items: center;
  }

  ${Nav} {
    position: static;
  }

  @media only screen and (min-width: 1200px) {
    &.inner {
      display: none;
    }
  }

  @media only screen and (max-width: 1199px) {
    &.inner {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
  }

  @media (max-width: 599px) {
    ${Nav} {
      > div {
        margin: 0;
      }
    }
  }
`

export const SocIcons = styled.div`
  display: flex;
  align-items: center;

  margin: 0 40px;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`

export const ButtonsContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  display: flex;

  a,
  button {
    height: 32px;
    width: 100%;
    padding: 0 8.5px;
    border-radius: 6px;
  }

  a:first-child {
    margin-right: 16px;
  }

  a,
  a:hover,
  a:active,
  button:hover,
  button:active,
  button {
    ${props =>
      props.theme.buttonInverseColor
        ? "color: " + props.theme.buttonInverseColor
        : ""};
  }

  @media (max-width: 910px) {
    margin-left: 0;
  }

  @media only screen and (max-width: 767px) {
    button {
      flex: 1;
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: 599px) {
    display: none;
  }
`

export const MenuBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  width: 24px;
  height: 24px;
  margin-right: 16px;
  padding: 0;

  svg {
    path {
      fill: ${props => props.theme.menuBtn};
    }
  }
`

export const HiddenMenu = styled.div`
  visibility: ${props => (props.$isOpened ? "visible" : "hidden")};
  opacity: ${props => (props.$isOpened ? 1 : 0)};
  position: fixed;
  top: ${props => props.$offset + MOBILE_HEADER_HEIGHT}px;
  left: 0;
  width: ${props => (props.opened ? "calc(100% - 16px)" : "100%")};
  height: 100%;
  transition: 0.3s opacity, 0.3s visibility;
  z-index: 9998;

  > nav {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }

  button:hover,
  button:active,
  button {
    ${props =>
      props.theme.buttonInverseColor
        ? "color: " + props.theme.buttonInverseColor
        : ""};
  }

  @media only screen and (max-width: 599px) {
    top: ${props => props.$offset + EXTRA_MOBILE_HEADER_HEIGHT}px;
    height: 100vh;

    > nav {
      border-bottom: none;
      height: 100%;
      width: 100%;
      position: fixed;
      overflow-y: scroll;
      background-color: ${props => props.theme.bg};

      top: ${props => props.$offset + MOBILE_HEADER_HEIGHT}px;
      height: ${props =>
        `calc(100% - ${EXTRA_MOBILE_HEADER_HEIGHT + props.$offset}px)`};
    }
  }
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${props => props.theme.menuOverlay};

  @media (max-width: 413px) {
    background-color: ${props => props.theme.bg};
  }
`

export { LogoContainer, SocLink, Nav, Box, Link, InnerLink }
