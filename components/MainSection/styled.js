import styled from "styled-components"
import { Section as UISection } from "../uikit/Layout"
import { Hero, Paragraph } from "../uikit/Typographic"
import ExampleCode from "../uikit/ExampleCode"

export const Section = styled(UISection)`
  padding: 0;
  margin-bottom: 144px;

  ${Paragraph} {
    margin-bottom: 32px;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: 280px;

    @media (max-width: 767px) {
      width: 288px;
      height: 48px;
      margin: 0 auto;
    }
  }

  @media (max-width: 1199px) {
    ${Paragraph} {
      margin-bottom: 24px;
    }
  }

  @media (max-width: 1024px) {
    max-width: calc(1024px);
    width: 100%;
    padding: 56px 32px 0 32px;
    margin-bottom: 56px;
  }

  @media (max-width: 806px) {
    padding: 0 42px 0 42px;
  }

  @media (max-width: 768px) {
    padding: 0 40px 0 40px;
  }

  @media (max-width: 767px) {
    padding: 0 31px 0 31px;
  }

  @media (max-width: 599px) {
    padding: 0 16px 0 16px;

    ${Paragraph} {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 414px) {
    margin-bottom: 48px;
  }
`

export const Title = styled(Hero)`
  margin-top: 80px;
  margin-bottom: 16px;

  @media (max-width: 1199px) {
    margin-top: 40px;
  }

  @media (max-width: 599px) {
    margin-top: 24px;
    margin-bottom: 8px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 294px;
    height: 56px;
  }

  a:first-child {
    margin-right: 32px;
  }

  a:last-child {
    color: ${props => props.theme.tryInBrowserColor};
  }

  a:last-child:hover {
    color: ${props => props.theme.tryInBrowserHoverColor};
  }

  @media (max-width: 677px) {
    a:first-child {
      margin-right: 0;
      order: 2;
    }

    a:last-child {
      margin-bottom: 16px;
    }

    flex-direction: column;
  }

  @media (max-width: 599px) {
    a {
      height: 48px;
    }
  }
`

export const Container = styled.div`
  margin: 80px auto;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    display: block;
    margin: auto;
    border-radius: 16px;
    background: rgb(113, 111, 246);
    left: -20px;
    right: -20px;
    top: 46px;
    bottom: 47px;
  }
`

export const CodeBlock = styled(ExampleCode)`
  min-width: 585px;
  width: 585px;
  height: 494px;
  border-radius: 16px;
  overflow: hidden;
`

export const Terminal = styled.div`
  width: 534px;
  height: 456px;
  background: #21254b;
  border-radius: 0 16px 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > button {
    width: 240px;
    min-height: 40px;
    height: 40px;
    position: absolute;
    bottom: 24px;
    margin-bottom: 26px;

    svg {
      margin-left: 8px;
    }
  }
`

export const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-top: 80px;
  width: 100%;

  @media (max-width: 1199px) {
    margin-top: 56px;

    ::before {
      display: none;
    }
  }

  @media (max-width: 1024) {
    margin-top: 56px;
  }

  @media (max-width: 599px) {
    margin-top: 48px;
  }

  iframe {
    background: #edf0ff;
    position: absolute;
    border-radius: 32px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    @media (max-width: 1199px) {
      border-radius: 24px;
    }

    @media (max-width: 599px) {
      border-radius: 16px;
    }
  }

  svg {
    width: 96px;
    height: 96px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -48px;
    z-index: 1;
    transition: 0.5s all;

    &:hover {
      transform: scale(1.1);
    }

    &.hide {
      pointer-events: none;
      transform: scale(0.9);
      opacity: 0;
    }

    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
      margin: -30px;
    }
  }

  ::before {
    content: "";
    position: absolute;
    background: #716ff6;
    border-radius: 16px;
    top: 40px;
    bottom: 40px;
    left: -20px;
    right: -20px;
    z-index: -1;

    @media (max-width: 600px) {
      display: none;
    }
  }
`
