import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const Paragraph = ({ blok }) => {
  return (
    <S.Container {...sbEditable(blok)} key={blok._uid}>
      {blok.text}
    </S.Container>
  );
};

export default Paragraph;
