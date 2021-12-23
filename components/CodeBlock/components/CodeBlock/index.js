import React, { useRef } from "react";

import useHighlights from "./useHighlights";
import * as S from "./styled";

const CodeBlock = React.forwardRef(
  ({ inline, isHighlighted, highlights, className }, ref) => {
    const el = useRef(null);
    useHighlights(el, highlights, [inline]);

    return (
      <S.Container ref={ref} className={className}>
        <S.Code
          dangerouslySetInnerHTML={{ __html: isHighlighted ? inline : "" }}
        />
      </S.Container>
    );
  }
);

CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
