import styled from "styled-components"
import { Heading, Caption } from "../uikit/Typographic"
import { FONT } from "src/developers/constants"

export const Section = styled.section`
  width: 1200px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 144px;

  @media (max-width: 1199px) {
    max-width: 100%;
    padding: 0 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 56px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 600px) {
    padding: 0 12px;
    margin-bottom: 48px;
  }

  @media (max-width: 413px) {
    padding: 0 16px;
  }
`

export const Title = styled(Heading)`
  margin-bottom: 64px;

  @media (max-width: 1199px) {
    margin-bottom: 24px;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 16px;
    text-align: left;
  }
`

export const FeatureItem = styled.div`
  margin-bottom: 56px;
  text-align: left;

  :last-child {
    margin-bottom: 0;
  }

  > div:first-child {
    max-width: 454px;
    min-width: 454px;
    flex-shrink: 0;
  }

  > div:last-child {
    max-width: 664px;
    min-width: 664px;
    flex-shrink: 0;
  }

  @media (max-width: 1439px) {
    > div:last-child {
      max-width: 616px;
      min-width: 616px;
    }
  }

  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 100%;
    width: 100%;
    margin-bottom: 56px;

    > div:first-child {
      margin-bottom: 16px;
      max-width: 916px;
    }

    > div:last-child {
      max-width: 100%;
      min-width: 100%;
    }

    & > div > * {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    & > div > * {
      text-align: left;
    }
  }

  @media (max-width: 599px) {
    align-items: flex-start;
    margin-bottom: 48px;

    > div:first-child {
      width: 100%;
      min-width: 100%;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: ${p => (p.isLeft ? "row" : "row-reverse")};
    margin-bottom: 120px;

    > div:first-child {
      margin: ${p => (p.isLeft ? "0 48px 0 0" : "0 0 0 48px")};
    }
  }
`

export const FeatureCaption = styled(Caption)`
  @media (max-width: 1199px) {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    margin: 0;
  }
`

export const FeatureTitle = styled.h4`
  font-family: ${FONT.SECONDARY};
  color: ${p => p.theme.text};
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
  margin: 24px 0 16px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 1199px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    margin: 4px 0 8px 0;
  }
`

export const FeatureLink = styled.a`
  display: block;
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 17px;
  line-height: 32px;
  text-align: left;
  text-decoration: none;
  color: ${p => p.theme.link};
  margin-top: 16px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  > svg {
    margin-left: 8px;
    fill: ${p => p.theme.link};
  }

  @media (max-width: 1199px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`

export const ImgContainer = styled.div`
  border-radius: 16px;
  max-width: 664px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    max-width: 100%;
  }

  img {
    border-radius: 16px;
    max-width: 100%;
  }
`
