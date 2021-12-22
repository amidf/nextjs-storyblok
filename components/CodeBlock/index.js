import { sbEditable } from "@storyblok/storyblok-editable";
import styled from "styled-components";

import MiltiCodeBlock from "./MultiCodeBlock";

export const Container = styled.div`
  height: 464px;
  background: #2e3361;
  border-radius: 16px;
  width: 100%;
`;

const CodeBlock = ({ blok }) => {
  console.log({ files: blok.files });

  return (
    <Container {...sbEditable(blok)} key={blok._uid}>
      <MiltiCodeBlock files={blok.files} />
    </Container>
  );
};

export default CodeBlock;
