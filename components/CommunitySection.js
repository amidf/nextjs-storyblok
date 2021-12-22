import React from "react"
import styled from "styled-components"
import { Section } from "./uikit/Layout"
import { Button } from "../uikit/Button"
import { Caption, Paragraph, Heading } from "./uikit/Typographic"

export const Container = styled(Section)`
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

    ${Caption} {
      margin-bottom: 4px;
    }
  }
`

export const Description = styled(Paragraph)`
  margin: 16px 0 40px 0;
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }

  @media (max-width: 599px) {
    margin-top: 8px;
  }
`

export const JoinButton = styled(Button)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 280px;
  height: 56px;

  @media (max-width: 767px) {
    text-align: center;
    width: 288px;
    height: 48px;
    margin: 0 auto;
  }
`

const CommunitySection = ({ content }) => (
  <Container id="CommunitySection">
    <Caption>{content.label}</Caption>
    <Heading>{content.title}</Heading>
    <Description>{content.description}</Description>
    <JoinButton
      as="a"
      color="cyan"
      href={content.joinLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content.joinBtn}
    </JoinButton>
  </Container>
)

export default CommunitySection
