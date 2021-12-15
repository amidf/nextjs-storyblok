import styled from "styled-components"

import { FONT } from "src/developers/constants"

export const List = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  max-height: 516px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 8px 0;
  margin: 0;
  background-color: ${props => props.theme.searchBg};
  box-shadow: 0px 1px 4px ${props => props.theme.searchOutline};
  border-radius: 0 0 4px 4px;

  list-style: none;

  border-top: 1px solid ${props => props.theme.searchBorder};

  display: ${props => (props.empty ? "flex" : "block")};
  align-items: center;
  justify-content: center;

  .empty-msg {
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: #6c768a;
    max-width: 100%;
    text-align: center;
    padding: 0 24px;
    word-wrap: break-word;
  }

  @media only screen and (max-width: 1199px) {
    top: 56px;
    max-height: calc(100vh - 56px);
    box-shadow: none;
  }
`

export const Category = styled.li`
  padding: 0 24px;
  margin-bottom: 16px;

  > span {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0.2px;
    color: #0a1c61;
    margin-bottom: 8px;
    display: block;
  }

  :last-child {
    margin-bottom: 0;

    ul {
      margin-bottom: 0;
      border-bottom: none;

      li:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export const InnerList = styled.ul`
  list-style: none;
  padding: 0;
  border-bottom: 1px solid #dee0e6;
`

export const ListItem = styled.li`
  margin: 8px;
  margin-bottom: 0;
  margin-top: 0;
  transition: 0.3s background-color;
  border-radius: 4px;
  position: relative;

  ::after {
    content: "";
    display: block;
    width: calc(100% - 32px);
    height: 1px;
    position: absolute;
    bottom: -1px;
    background-color: ${props => props.theme.searchBorder};
    margin-left: 16px;
  }

  :hover {
    .hover-bg {
      background-color: ${props => props.theme.searchResultHover};
    }

    .text-container {
      border-bottom-color: transparent;
    }
  }

  :last-child {
    margin-bottom: 16px;

    ::after {
      display: none;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text};
    padding: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.2px;

    width: 100%;
  }

  svg {
    position: relative;
    top: 4px;
    margin-left: 4px;
    margin-right: 4px;

    path {
      stroke: ${props => props.theme.text};
    }
  }

  .hover-bg {
    position: absolute;
    width: 100%;
    height: calc(100% + 1px);
    top: 0;
    left: 0;
    z-index: 2;
    background-color: transparent;
    transition: 0.3s;
    border-radius: 4px;
  }

  .title-container,
  .text-container {
    font-family: ${FONT.PRIMARY};
    z-index: 3;
    position: relative;
  }

  svg {
    position: relative;
    top: 2px;
  }

  .title {
    font-weight: bold;
    font-size: 15px;
    line-height: 28px;
    color: ${props => props.theme.text};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .text-container {
    margin-top: 4px;
    transition: 0.3s;
  }

  .text {
    font-weight: normal;
    font-size: 13px;
    line-height: 24px;
    color: ${props => props.theme.searchResultText};
  }

  @media only screen and (max-width: 414px) {
    margin: 0;
    border-radius: 0;

    a {
      padding: 8px;
    }

    .title,
    .text {
      line-height: 22px;
    }
  }
`
