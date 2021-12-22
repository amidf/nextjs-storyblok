import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { Paragraph } from "../uikit/Typographic"
import { useBreakpoint } from "../../common/hooks"
import ExampleCode from "../uikit/ExampleCode"

import ArrowIcon from "./arrow.svg"
import * as S from "./styled"

const FeaturesSection = ({ content }) => {
  const { formatMessage } = useIntl()
  const isBreak = useBreakpoint(1199)

  return (
    <S.Section id="HowItWorks">
      <S.Title>{content.title}</S.Title>
      {content.items.map((item, i) => (
        <S.FeatureItem id={item.id} key={i} isLeft={i % 2 === 0}>
          <div>
            <S.FeatureCaption>{item.label}</S.FeatureCaption>
            <S.FeatureTitle>{item.title}</S.FeatureTitle>
            <Paragraph>{item.description}</Paragraph>
            {!isBreak && (
              <S.FeatureLink href={item.link}>
                {formatMessage({ id: "learnMore" })} <ArrowIcon />
              </S.FeatureLink>
            )}
          </div>
          {item.img ? (
            <S.ImgContainer>
              <img className="lazyload" data-src={item.img} alt="Image" />
            </S.ImgContainer>
          ) : (
            <ExampleCode samples={item.code} />
          )}
          {isBreak && (
            <S.FeatureLink href={item.link}>
              {item.linkLabel || formatMessage({ id: "learnMore" })}{" "}
              <ArrowIcon />
            </S.FeatureLink>
          )}
        </S.FeatureItem>
      ))}
    </S.Section>
  )
}

export default FeaturesSection
