import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const SectionCaption = ({ blok }) => {
  return (
    <S.Caption {...sbEditable(blok)} key={blok._uid}>
      {blok.text}
    </S.Caption>
  );
};

export default SectionCaption;
