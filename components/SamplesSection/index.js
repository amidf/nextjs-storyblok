import React, { useMemo } from "react"

import { Caption, Heading } from "../uikit/Typographic"
import RequestSampleModal from "./RequestSampleModal"
import Slider from "./Slider"
import * as S from "./styled"

const colors = ["#21D3B3", "#3F9FF8", "#5855F4", "#02CCCB", "#313C9D"]
const hovers = ["#4DDCC2", "#65B2F9", "#6F6CFA", "#2FD6D3", "#545FB1"]

const SamplesSection = ({ content }) => {
  const [isModal, setModal] = React.useState(false)
  const dotsNumber = useMemo(() => content.items.length, [content])

  return (
    <S.SectionCarausel id="UseCasesSection">
      <RequestSampleModal
        isOpen={isModal}
        content={content.requestSampleModal}
        onClose={() => setModal(false)}
      />
      <Caption>{content.label}</Caption>
      <Heading>{content.title}</Heading>
      <Slider dotsNumber={dotsNumber}>
        {content.items.map((item, i) => (
          <li key={i} className="splide__slide">
            <S.Card
              href={item.link}
              hover={hovers[i % 5]}
              style={{ background: colors[i % 5] }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.CardLabel>{item.category}</S.CardLabel>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardDescription>{item.description}</S.CardDescription>
              <S.CardLangs>{item.langs.join(", ")}</S.CardLangs>
            </S.Card>
          </li>
        ))}
      </Slider>

      <S.Text>{content.requstSample}</S.Text>
      <S.ThemedButton onClick={() => setModal(true)} inverse>
        {content.requstSampleBtn}
      </S.ThemedButton>
    </S.SectionCarausel>
  )
}

export default SamplesSection
