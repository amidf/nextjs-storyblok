import { Link as GLink } from "gatsby"
import styled from "styled-components"

import { media } from "src/uikit"
import { FONT } from "src/developers/constants"

export const ToggleButton = styled.button`
  display: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  text-transform: uppercase;
  color: rgba(0, 21, 83, 0.5);
  border: none;
  border-bottom: 1px solid #e8ebf4;
  background-color: transparent;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  outline: none;
  height: 64px;
  padding-left: 0;
  padding-right: 40px;
  cursor: pointer;

  @media ${media.tablet} {
    display: flex;
  }

  @media ${media.mobile} {
    padding-right: 16px;
  }
`

export const Caption = styled.span`
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: ${props => props.theme.footerCaption || "rgba(0, 21, 83, 0.5)"};
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;

  @media (max-width: 599px) {
    margin-bottom: 12px;
  }
`

export const Navigation = styled.nav`
  display: block;
`

export const Item = styled.li`
  margin-top: 10px;
  font-size: 13px;
  line-height: 20px;
  color: ${props => props.theme.text || "#142470"};

  &:last-child {
    margin-bottom: 24px;
  }

  @media (max-width: 1199px) {
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 599px) {
    &:last-child {
      margin-bottom: 16px;
    }
  }
`

export const Container = styled.div`
  flex: 2;
  max-width: 160px;
  margin-right: 100px;

  &.mobile-links {
    display: none;
  }

  &:nth-last-child(2) {
    margin-right: 0;
  }

  &.mobile-soc-icons {
    display: none;
  }

  &.desktop-soc-icons {
    display: block;
    margin-bottom: 16px;
  }

  @media (max-width: 1279px) {
    max-width: 260px;
    min-width: 176px;
    width: 100%;
    margin-right: 0;
  }

  @media (max-width: 959px) {
    max-width: 160px;
    min-width: 160px;
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(2) {
      order: 5;
    }

    &:nth-child(3) {
      order: 1;
    }

    &:nth-child(4) {
      order: 2;
    }

    &:nth-child(5) {
      order: 3;
    }

    &:nth-child(6) {
      order: 4;
    }

    &:last-child {
      order: 10;
    }

    &.mobile-soc-icons {
      display: none;
    }

    &.desktop-soc-icons {
      display: block;
    }
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(2) {
      order: 5;
    }

    &:nth-child(3) {
      order: 1;
    }

    &:nth-child(4) {
      order: 2;
    }

    &:nth-child(5) {
      order: 3;
    }

    &:nth-child(6) {
      order: 4;
    }

    &:last-child {
      order: 6;
    }

    &.mobile-soc-icons {
      display: none;
    }

    &.desktop-soc-icons {
      display: block;
    }
  }

  @media only screen and (max-width: 414px) {
    min-width: 50%;
    margin-left: 0;

    &:nth-child(2) {
      order: 5;
    }

    &:nth-child(6) {
      order: 4;
    }

    &:last-child {
      order: 4;
    }
  }

  @media only screen and (max-width: 413px) {
    min-width: 100%;
  }
`

export const List = styled.ul`
  margin: 0;
  list-style: none;
`

export const InnerContainer = styled.div`
  width: 160px;
`

export const Link = styled(GLink)`
  text-decoration: none;
  color: inherit;
  font-style: normal;
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: ${props => props.theme.text || "#142470"};
  display: block;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.socLinkHover || "#5855f4"};
  }
`
