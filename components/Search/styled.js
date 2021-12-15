import styled, { css } from "styled-components"

const alternativeStlyeOfSearch = css`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`

export const Container = styled.div`
  width: ${props =>
    props.focused ? 520 : props.locale.includes("en") ? 187 : 272}px;

  background-color: ${props =>
    props.focused ? props.theme.searchBg : "transparent"};
  box-shadow: ${props =>
    props.focused
      ? `0px 1px 4px ${props.theme.searchOutline}`
      : "0px 1px 4px transparent"};
  border-radius: ${props => (props.empty ? "4px 4px 0 0" : "4px")};
  padding: 6px 9px;

  position: ${props => (props.focused ? "absolute" : "relative")};
  ${props => props.focused && alternativeStlyeOfSearch}

  svg.search-icon {
    path {
      fill: ${props => (props.focused ? "#979797" : "#C7CBD5")};
    }
  }

  @media only screen and (max-width: 1199px) {
    width: ${props => (props.focused ? "100%" : "fit-content")};
    height: ${props => (props.focused ? "100vh" : "24px")};
    position: ${props => (props.focused ? "absolute" : "relative")};
    left: 0;
    top: ${props => (props.focused ? "14px" : 0)};
    padding: 0;
    border-radius: 0;
    z-index: 9999;

    display: ${props => (props.focused ? "block" : "flex")};
    align-items: center;
  }

  @media (max-width: 805px) {
    width: ${props => (props.focused ? "100%" : "13px")};
  }
`
