import React, { useRef } from "react"

import useHighlights from "./useHighlights"
import * as S from "./styled"

const CodeBlock = React.forwardRef(
  ({ inline, highlights, className }, ref) => {
    const el = useRef(null)
    useHighlights(el, highlights, [inline])

    return (
      <S.Container ref={ref} className={className}>
        <S.Code dangerouslySetInnerHTML={{ __html: inline }} />
      </S.Container>
    )
  }
)

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock
