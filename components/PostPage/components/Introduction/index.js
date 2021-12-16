import React from "react";
import ReactMarkdown from "react-markdown";

import * as S from "./styled";

const Introduction = ({ body }) => {
  return (
    <S.Container>
      <ReactMarkdown>{body}</ReactMarkdown>
    </S.Container>
  );
};

export default Introduction;
