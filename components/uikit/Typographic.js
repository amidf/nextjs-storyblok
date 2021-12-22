import styled from "styled-components"

import { FONT } from "src/developers/constants"

export const Hero = styled.h1`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  text-align: center;
  color: ${p => p.theme.text};
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 48px;
    line-height: 64px;
  }

  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: left;
  }
`

export const Heading = styled.h2`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-align: center;
  color: ${p => p.theme.text};
  margin: 0;

  @media (max-width: 1199px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
  }
`

export const Paragraph = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: ${p => p.theme.text};
  margin: 0;

  @media (max-width: 600px) {
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0;
  }
`

export const Caption = styled.h3`
  text-transform: uppercase;
  color: ${p => p.theme.caption};
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 28px;
    text-align: left !important;
  }
`
