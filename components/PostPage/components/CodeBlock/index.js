import React, { useState, useRef, useEffect } from "react";

import * as S from "./styled";
import CopyIcon from "./assets/copy.inline.svg";
import CheckIcon from "./assets/check.inline.svg";
import useTimer from "./useTimer";
import useSourceCode from "./useSourceCode";
import useLineNumbers from "./useLineNumbers";

const COPYING_CODE_TIMEOUT = 3000;

const CodeBlock = ({ children, highlighter }) => {
  const [isCopied, setIsCopied] = useState(false);
  const el = useRef(null);
  const containerEl = useRef(null);
  const startTimer = useTimer(COPYING_CODE_TIMEOUT);
  const sourceCode = useSourceCode(containerEl);
  useLineNumbers(el);

  useEffect(() => {
    if (!el.current) return;
  }, []);

  const handleCopyCodeClick = async () => {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(sourceCode);
    setIsCopied(true);

    startTimer(() => setIsCopied(false));
  };

  return (
    <S.Container ref={containerEl}>
      <S.CopyBtn
        copied={isCopied ? 1 : 0}
        type="button"
        disabled={isCopied}
        onClick={handleCopyCodeClick}
      >
        <div className="shadow"></div>
        {isCopied ? <CheckIcon /> : <CopyIcon className="copy-icon" />}
      </S.CopyBtn>
      <div
        className="inner"
        ref={el}
        dangerouslySetInnerHTML={{
          __html: highlighter
            ? highlighter.codeToHtml(children[0].props.children.join(""), {
                lang: children[0].props.className.replace("language-", ""),
              })
            : "",
        }}
      ></div>
    </S.Container>
  );
};

export default CodeBlock;
