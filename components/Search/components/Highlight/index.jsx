import React from "react"
import { connectHighlight } from "react-instantsearch-dom"
import ReactHtmlParser from "react-html-parser"

import * as S from "./styled"
import { getText } from "./utils"

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  })

  if (attribute === "text") {
    return <S.MarkText>{ReactHtmlParser(getText(parsedHit))}</S.MarkText>
  }

  return parsedHit.length > 0 ? (
    parsedHit.map((part, index) => {
      return part.isHighlighted ? (
        <S.Mark key={`${hit.path}-${index}-${hit.objectID}`}>
          {ReactHtmlParser(part.value)}
        </S.Mark>
      ) : (
        ReactHtmlParser(part.value)
      )
    })
  ) : (
    <>{hit[attribute]}</>
  )
}

export default connectHighlight(Highlight)
