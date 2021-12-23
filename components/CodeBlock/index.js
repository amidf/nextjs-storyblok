import { useContext, useMemo } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styled from "styled-components";

import ShikiContext from "../../shiki/context";
import MiltiCodeBlock from "./components/MultiCodeBlock";

export const Container = styled.div`
  height: 464px;
  background: #2e3361;
  border-radius: 16px;
  width: 100%;
`;

const CodeBlock = ({ blok }) => {
  const shiki = useContext(ShikiContext);
  const files = useMemo(
    () =>
      blok.files.map((file) => {
        try {
          if (!shiki) return file;

          return {
            ...file,
            body: shiki.codeToHtml(file.body, { lang: file.lang }),
            isHighlighted: true,
          };
        } catch (err) {
          return file;
        }
      }),
    [shiki, blok]
  );

  return (
    <Container
      data-component={blok.component}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      <MiltiCodeBlock files={files} />
    </Container>
  );
};

export default CodeBlock;
