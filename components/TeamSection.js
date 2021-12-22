import React from "react"
import styled from "styled-components"
import { Section } from "./uikit/Layout"
import { Caption, Heading, Paragraph } from "./uikit/Typographic"
import useTeamModal from "src/components/TeamSection/useTeamModal"
import { FONT } from "src/developers/constants"

const Container = styled(Section)`
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

const Description = styled(Paragraph)`
  margin: 16px 0 56px 0;

  @media (max-width: 599px) {
    margin-top: 8px;
    margin-bottom: 48px;
  }
`

const Flexbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

const Teammate = styled.div`
  width: 238px;
  text-align: center;
  color: ${p => p.theme.text};
  cursor: pointer;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }

  :hover {
    h2 {
      color: #6f6cfa;
    }
  }

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    transition: 0.5s color;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin: 24px 0 8px;
  }

  p {
    font-family: ${FONT.PRIMARY};
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    margin: 0;
  }
`

const TeamSection = ({ content }) => {
  const { modal, show } = useTeamModal()

  return (
    <Container id="TeamSection">
      {modal}
      <Caption>{content.label}</Caption>
      <Heading>{content.title}</Heading>
      <Description>{content.description}</Description>

      <Flexbox>
        {content.items.map(({ name, position, avatar, bio }, i) => (
          <Teammate key={i} onClick={() => show(name, avatar, bio)}>
            <img className="lazyload" data-src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{position}</p>
          </Teammate>
        ))}
      </Flexbox>
    </Container>
  )
}

export default TeamSection
