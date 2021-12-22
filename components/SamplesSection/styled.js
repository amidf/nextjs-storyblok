import styled from "styled-components"
import Button from "../../newUikit/Button"
import { Section } from "../uikit/Layout"
import { FONT } from "src/developers/constants"
import { Caption, Heading } from "../uikit/Typographic"

export const Card = styled.a`
  display: block;
  text-decoration: none;
  max-width: 389px;
  min-width: 389px;
  height: 355px;
  border-radius: 16px;
  padding: 16px 24px 32px 24px;
  text-align: left;
  margin: 0 8px;
  user-select: none;
  transition: 0.5s background;
  position: relative;

  @media (max-width: 600px) {
    max-width: 288px;
    min-width: 288px;
    width: 288px;
    height: 288px;
    padding: 16px;
  }

  :hover {
    background: ${p => p.hover} !important;
  }
`

export const CardLabel = styled.h2`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: 599px) {
    margin-bottom: 8px;
  }
`

export const CardTitle = styled.h3`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`

export const CardDescription = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #ffffff;
  overflow: hidden;
  margin: 0;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 24px;
  }
`

export const CardLangs = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 32px;
  /* identical to box height, or 188% */

  letter-spacing: 0.2px;
  color: #ffffff;
  margin: 0;
  margin-top: 23px;
  position: absolute;
  bottom: 24px;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 28px;
    margin-top: 8px;
    bottom: 16px;
  }
`

export const Text = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center !important;
  color: ${p => p.theme.text};
  margin-top: 48px;
  margin-bottom: 32px;

  @media (max-width: 1199px) {
    margin-top: 56px;
  }

  @media (max-width: 599px) {
    font-size: 24px;
    line-height: 32px;
    margin-top: 48px;
    margin-bottom: 16px;
  }
`

export const ThemedButton = styled(Button)`
  width: 280px;
  height: 56px;
  margin: 0 auto;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;

  @media (max-width: 599px) {
    width: 288px;
    height: 48px;
  }

  :not(:disabled):active,
  :not(:disabled):hover,
  & {
    ${props =>
      props.theme.buttonInverseColor &&
      "color: " + props.theme.buttonInverseColor}
  }
`

export const SectionCarausel = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 144px;

  ${Caption} {
    margin-bottom: 16px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 56px;
  }

  @media (max-width: 599px) {
    margin-bottom: 48px;
    overflow-x: hidden;

    ${Caption},
    ${Heading} {
      padding-left: 4px;
    }

    ${Caption} {
      margin-bottom: 4px;
    }
  }

  .splide {
    margin-top: 64px;

    @media (max-width: 1199px) {
      margin-top: 24px;
    }

    @media (max-width: 600px) {
      margin-top: 16px;
    }
  }

  .splide__slide {
    display: flex;
    justify-content: center;
  }

  .splide__pagination {
    bottom: -40px;
  }

  .splide__arrow {
    display: none;
  }

  .splide__pagination__page {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    background: ${p => p.theme.carauselDot};
  }

  .splide__pagination__page.is-active {
    background: ${p => p.theme.carauselDotActive};
    transform: scale(1);
  }
`
